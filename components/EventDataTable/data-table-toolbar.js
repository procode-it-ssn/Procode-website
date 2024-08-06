"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

export function DataTableToolbar({
  table,
}) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search here..."
          value={table.globalFilter}
          onChange={(event) => {
            return table.setGlobalFilter(event.target.value)
          }}
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
