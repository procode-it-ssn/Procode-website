"use client";

import * as React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn, parseEventDate } from "@/lib/utils";

const SLIDE_INTERVAL = 2000;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduced(event.matches);

    setReduced(query.matches);
    query.addEventListener("change", onChange);

    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};

const formatEventDate = ({ start_date, end_date }) => {
  const start = parseEventDate(start_date);
  const end = parseEventDate(end_date);

  if (!start) return "";
  if (!end || end.getTime() === start.getTime()) return format(start, "dd MMM yy");

  return `${format(start, "dd MMM")} – ${format(end, "dd MMM yy")}`;
};

function PhotoFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
      <CalendarDays className="h-12 w-12 text-slate-500 dark:text-slate-400" />
    </div>
  );
}

export default function EventCard({ event }) {
  const { name, description, is_handson } = event;
  const images = event.images ?? [];

  const hasPhotos = images.length > 0;
  const hasGallery = images.length > 1;

  const [index, setIndex] = React.useState(0);
  const [hasHovered, setHasHovered] = React.useState(false);
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  const reducedMotion = usePrefersReducedMotion();
  const timer = React.useRef(null);

  const stopCycling = React.useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  // Also covers unmount mid-cycle, which would otherwise leave a timer running.
  React.useEffect(() => stopCycling, [stopCycling]);

  const onEnter = () => {
    setHasHovered(true);

    if (!hasGallery || reducedMotion || timer.current) return;

    timer.current = setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      SLIDE_INTERVAL
    );
  };

  const onLeave = () => {
    stopCycling();
    setIndex(0);
  };

  // Photos beyond the cover are only mounted once hovered, so a visitor who
  // never hovers downloads one image per event instead of all of them.
  const mounted = hasHovered ? images : images.slice(0, 1);

  const dateLabel = formatEventDate(event);
  const step = (delta) =>
    setGalleryIndex((current) => (current + delta + images.length) % images.length);

  return (
    <Dialog onOpenChange={(open) => open && setGalleryIndex(index)}>
      <DialogTrigger asChild>
        <button
          type="button"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="group w-full rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Card className="relative aspect-[4/3] overflow-hidden p-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
            {hasPhotos ? (
              mounted.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  alt={i === 0 ? name : `${name} — photo ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={cn(
                    "object-cover transition-opacity duration-500",
                    i === index ? "opacity-100" : "opacity-0"
                  )}
                />
              ))
            ) : (
              <PhotoFallback />
            )}

            {hasGallery && (
              <div className="absolute right-3 top-3 z-20 flex gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                      i === index ? "bg-white" : "bg-white/40"
                    )}
                  />
                ))}
              </div>
            )}

            {/* Title and date sit here at rest; the description expands below them on hover */}
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-12 transition-all duration-300 group-hover:from-black group-hover:via-black/85">
              <h3 className="text-lg font-bold leading-tight text-white">{name}</h3>
              {dateLabel && <p className="mt-1 text-xs text-white/80">{dateLabel}</p>}

              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
                {is_handson && (
                  <span className="mt-3 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white">
                    Hands-on
                  </span>
                )}
                <p className="mt-2 line-clamp-3 text-sm text-white/90">{description}</p>
              </div>
            </div>
          </Card>
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {dateLabel}
            {is_handson && " · Hands-on"}
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          {hasPhotos ? (
            <Image
              src={images[galleryIndex]}
              alt={
                galleryIndex === 0 ? name : `${name} — photo ${galleryIndex + 1}`
              }
              fill
              sizes="(max-width: 640px) 100vw, 32rem"
              className="object-cover"
            />
          ) : (
            <PhotoFallback />
          )}

          {hasGallery && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setGalleryIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      i === galleryIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      </DialogContent>
    </Dialog>
  );
}
