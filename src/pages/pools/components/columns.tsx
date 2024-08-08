import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@components/ui/dropdown-menu";
import type { IPoolData } from "@custom-types/api";
import NumberReducer from "@helpers/number-reducer";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: Array<ColumnDef<IPoolData>> = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="flex items-center"
      />
    ),
    cell: ({ row }) => <Checkbox className="flex items-center" checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "symbol",
    header: "Name",
    cell: ({ row }) => <p className="capitalize truncate max-w-16">{row.getValue("symbol")}</p>,
    enableHiding: false,
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row}) => {
      
      return (
        <>
          <div className="capitalize flex items-center gap-x-2 max-w-32 ">
            <Avatar className="size-6 rounded-full overflow-hidden shrink-0">
              <AvatarImage src='' alt="Bitcoin" />
              <AvatarFallback className="border bg-primary/10"></AvatarFallback>
            </Avatar>
            <Link to="/" className="capitalize text-blue-500">
              {String(row.getValue("project"))}
            </Link>
          </div>
        </>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "tvlUsd",
    meta: "Total TVL",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          TVL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className={`uppercase px-4`}>{NumberReducer({ value: row.getValue("tvlUsd"), max: 2 })}</div>,
  },
  {
    accessorKey: "apy",
    meta: "Apy",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Apy
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("apy"), max: 2, style: "percent" })}</div>,
  },
  {
    accessorKey: "apyMean30d",
    meta: "Average APY",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Average APY
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className={`uppercase px-4`}>{NumberReducer({ value: row.getValue("apyMean30d"), style: "percent", max: 2 })}</div>,
  },
  {
    accessorKey: "apyBase",
    meta: "Apy Base",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Apy Base
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("apyBase"), style: "percent", max: 2 })}</div>,
  },
  {
    accessorKey: "volumeUsd1d",
    meta: "Volume USD",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Volume
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("volumeUsd1d") })}</div>,
  },

  {
    accessorKey: "stablecoin",
    meta: "Stablecoin",
    header: "Stablecoin",
    cell: ({ row }) => <div className="capitalize px-1.5">{String(row.getValue("stablecoin"))}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const allData = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-0 overflow-hidden">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigator.clipboard.writeText(allData.symbol)}>
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">View</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Add favorites</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
