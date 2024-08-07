import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@components/ui/dropdown-menu";
import type { ICoinListWithMarket } from "@custom-types/api";
import NumberDecider from "@helpers/number-decider";
import NumberReducer from "@helpers/number-reducer";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columns: Array<ColumnDef<ICoinListWithMarket>> = [
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-x-2 max-w-32 ">
        <Avatar className="size-5 rounded-full overflow-hidden shrink-0">
          <AvatarImage src={row.original.image} alt="Bitcoin" />
          <AvatarFallback className="border bg-primary/10"></AvatarFallback>
        </Avatar>
        <span className="truncate">{row.getValue("name")}</span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "current_price",
    header: ({ column }) => {
      return (
        <Button variant="ghost" className="" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-3.5">{NumberReducer({ value: row.getValue("current_price") })}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "price_change_percentage_24h",
    meta: "Price Change",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Change
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className={`uppercase px-4 ${NumberDecider(row.getValue("price_change_percentage_24h"))}`}>
        {NumberReducer({ value: row.getValue("price_change_percentage_24h"), style: "percent" })}
      </div>
    ),
  },
  {
    accessorKey: "market_cap",
    meta: "Market Cap",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Market Cap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("market_cap") })}</div>,
  },
  {
    accessorKey: "market_cap_change_percentage_24h",
    meta: "Market Change",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Change
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className={`uppercase px-4 ${NumberDecider(row.getValue("market_cap_change_percentage_24h"))}`}>
        {NumberReducer({ value: row.getValue("market_cap_change_percentage_24h"), style: "percent" })}
      </div>
    ),
  },
  {
    accessorKey: "total_supply",
    meta: "Total Supply",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Total Supply
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("total_supply") })}</div>,
  },
  {
    accessorKey: "circulating_supply",
    meta: "circulating",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Circulating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("circulating_supply") })}</div>,
  },

  {
    accessorKey: "total_volume",
    meta: "Total Volume",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Total Volume
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="uppercase px-4">{NumberReducer({ value: row.getValue("total_volume") })}</div>,
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
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigator.clipboard.writeText(allData.id)}>
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
