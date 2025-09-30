"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  value: {
    label: "Count",
    color: "#433374",
  },
} satisfies ChartConfig;

export function DashChart({ data }: { data: { date: string; value: number }[] }) {
  return (
    <ChartContainer className="h-[200px] w-full" config={chartConfig}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="#433374" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}
