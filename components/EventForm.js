"use client";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

import { Input } from "@/components/ui/input";
import { eventSchema } from "@/validations/event";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

import useToggleState from "@/hooks/useTogleState";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { API } from "@/config/axios";
import Loading from "./Loading";
import { useRouter } from "next/navigation";
import { Textarea } from "./ui/textarea";

export default function EventForm({ event, eventId }) {
  const { state, open, close } = useToggleState();

  const router = useRouter();

  const title = event ? "Edit Event" : "New Event";

  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: event?.name || "",
      description: event?.description || "",
      start_date: event?.start_date || null,
      end_date: event?.end_date || null,
      is_handson: event?.is_handson || false,
      is_published: event?.is_published || false,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      if (JSON.stringify(data) === JSON.stringify(event)) {
        console.log("no changes");
        close();
        return { message: "No changes detected!" };
      }
      if (event) {
        await API.patch(`/event/${eventId}`, data);

        return;
      }

      await API.post("/event/new", data);
    },
    onSuccess: (data) => {
      console.log("success");
      if (data?.message) {
        toast(data.message);
        return router.refresh();
      }
      toast.success("Updated successfully!");
      router.refresh();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append('file', data.image);

    // Upload img get image url

    mutate(data);
  };

  return (
    <Dialog open={state} onOpenChange={(value) => (value ? open() : close())}>
      <DialogTrigger asChild>
        {event ? (
          <Button variant="link" onClick={open}>
            Edit
          </Button>
        ) : (
          <Button onClick={open}>New Event</Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="items-start dark:bg-slate-800"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="hidden">{title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <p className="font-bold text-4xl mb-4">{title}</p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input className="bg-transparent dark:border-2 dark:border-background" placeholder="new event name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none min-h-32 bg-transparent dark:border-2 dark:border-background"
                      placeholder="event description..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2 w-full justify-between">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Start Date</FormLabel>
                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "h-12 pl-3 text-left font-normal w-full bg-transparent dark:border-2 dark:border-background",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd-LL-y")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="end_date"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>End Date</FormLabel>
                    <div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "h-12 pl-3 text-left font-normal w-full bg-transparent dark:border-2 dark:border-background",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd-LL-y")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {event ? (
              <div className="flex flex-col gap-4 py-4">
                <FormField
                  control={form.control}
                  name="is_handson"
                  render={({ field }) => (
                    <FormItem className="flex space-y-0 items-center justify-between max-w-[150px] w-full">
                      <FormLabel>Hands On</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="is_published"
                  render={({ field }) => (
                    <FormItem className="flex space-y-0 items-center justify-between max-w-[150px] w-full">
                      <FormLabel>Published</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : null}

            <div className="space-x-4 float-end">
              <Button type="button" variant="link" onClick={() => form.reset()}>
                Clear
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <Loading className="w-5 h-5" />
                ) : event ? (
                  "Save"
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
