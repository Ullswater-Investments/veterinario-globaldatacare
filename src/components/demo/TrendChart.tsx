import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrendChartProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<Record<string, any>>;
  dataKey: string;
  xAxisKey?: string;
  type?: "line" | "area";
  color?: string;
  height?: number;
  showGrid?: boolean;
  subtitle?: string;
}

const TrendChart: React.FC<TrendChartProps> = ({
  title,
  data,
  dataKey,
  xAxisKey = "name",
  type = "line",
  color = "hsl(var(--primary))",
  height = 200,
  showGrid = true,
  subtitle,
}) => {
  const commonProps = {
    data,
    margin: { top: 5, right: 10, left: 0, bottom: 5 },
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          {type === "area" ? (
            <AreaChart {...commonProps}>
              {showGrid && (
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              )}
              <XAxis
                dataKey={xAxisKey}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                className="fill-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                className="fill-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <defs>
                <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                fill={`url(#gradient-${dataKey})`}
              />
            </AreaChart>
          ) : (
            <LineChart {...commonProps}>
              {showGrid && (
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              )}
              <XAxis
                dataKey={xAxisKey}
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                className="fill-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                className="fill-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={{ fill: color, strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TrendChart;
