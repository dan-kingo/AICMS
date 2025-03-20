"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import chartData from "@/assets/constants/chartData";

const chartConfig = {
  Pending: {
    label: "Pending",
    color: "hsl(var(--chart-1))",
  },
  In_Progress: {
    label: "In Progress",
    color: "hsl(var(--chart-2))",
  },
  Completed: {
    label: "Completed",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const CustomBar = () => {
  return (
    <Card className=" lg:mx-auto mt-8  lg:p-6 md:w-[92%] ">
      <CardHeader>
        <CardTitle>Number of complaints by category</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="categories"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Pending" fill="#2563ea" radius={4} />
            <Bar dataKey="In_Progress" fill="#60a8fb" radius={4} />
            <Bar dataKey="Completed" fill="#8fc2fc" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Solving +67% complaints this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex gap-2 font-medium leading-none">
          Accepting -5.2% complaints this month{" "}
          <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total complaints accepted for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};
export default CustomBar;
