"use client";

import { cn } from "@/lib/utils";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns = [
  {
    accessorKey: "name",
    label: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="font-bold max-w-xs w-full">{row.getValue("name")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "start_date",
    label: "Start Date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ row }) => {
      return <div>{row.getValue("start_date")}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "end_date",
    label: "End Date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Date" />
    ),
    cell: ({ row }) => {
      return <div>{row.getValue("end_date")}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "is_handson",
    label: "Published",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Hands on"
        className="max-w-[50px]"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[25px]">
          {row.getValue("is_handson") ? "yes" : "no"}
        </div>
      );
    },
  },
  {
    accessorKey: "is_published",
    label: "Published",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Published"
        className="max-w-[50px]"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[25px]">
          <div
            className={cn(
              "w-6 h-6 rounded-full",
              row.getValue("is_published") ? "bg-green-500" : "bg-red-500"
            )}
          />
        </div>
      );
    },
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
