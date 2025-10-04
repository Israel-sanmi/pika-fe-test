"use client";

import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { browser: "estimated revenue", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "delivery balance", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  chrome: {
    label: "Estimated Revenue",
    color: "#ACA1CD",
  },
  safari: {
    label: "Delivery Balance",
    color: "#2D224D",
  },
} satisfies ChartConfig;

export function WalletPieChart() {
  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
          />
        </PieChart>
      </ChartContainer>

      <div className="flex font-inter gap-6 items-center">
        <div className="flex items-center gap-1">
          <div
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: "#ACA1CD" }}
          />
          <span className="text-xs font-medium text-gray-700">
            Estimated Revenue
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: "#2D224D" }}
          />
          <span className="text-xs font-medium text-gray-700">
            Delivery Balance
          </span>
        </div>
      </div>
    </div>
  );
}
