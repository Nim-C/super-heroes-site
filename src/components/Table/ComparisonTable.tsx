import { useContext, useMemo } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { Hero } from "@/types";
import HeroesComparisonContext from "@/contexts/heroes-comparison";
import HeroModalContext from "@/contexts/heroes-modal";

import "@/assets/styles/ComparisonTable.css";

const columnHelper = createColumnHelper<Hero>();

function ComparisonTable() {
  const { setHero } = useContext(HeroModalContext);

  const { heroes, setHeroes } = useContext(HeroesComparisonContext);
  const columns = useMemo<ColumnDef<Hero, string>[]>(
    () => [
      columnHelper.accessor("id", {
        cell: (info) => (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHeroes(heroes.filter((hero) => hero.id !== info.getValue()));
            }}
          >
            ❌
          </button>
        ),
        header: "Action",
      }),
      columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: "Name",
      }),
      columnHelper.accessor("biography.full-name", {
        cell: (info) => info.getValue(),
        header: "Full Name",
      }),
      columnHelper.accessor("appearance.eye-color", {
        cell: (info) => info.getValue(),
        header: "Eye color",
      }),
      columnHelper.accessor("image.url", {
        cell: (info) => <img src={info.getValue()} alt="" />,
        header: "Image",
      }),
      columnHelper.accessor("powerstats.strength", {
        cell: (info) => info.getValue(),
        header: "Strength",
      }),
      columnHelper.accessor("work.occupation", {
        cell: (info) => info.getValue(),
        header: "Occupation",
      }),
    ],
    [heroes, setHeroes]
  );

  const table = useReactTable({
    columns,
    data: heroes,
    getCoreRowModel: getCoreRowModel(),
  });

  if (heroes.length === 0) {
    return null;
  }

  return (
    <>
      <h1>Heroes Comparison</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} onClick={() => setHero(row.original)}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ComparisonTable;
