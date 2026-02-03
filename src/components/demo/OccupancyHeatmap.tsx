import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OccupancySlot {
  hour: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
}

interface OccupancyHeatmapProps {
  title: string;
  data: OccupancySlot[];
  subtitle?: string;
}

const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;

const getHeatColor = (value: number): string => {
  if (value === 0) return "bg-muted";
  if (value < 50) return "bg-emerald-200";
  if (value < 70) return "bg-emerald-400";
  if (value < 85) return "bg-amber-400";
  if (value < 95) return "bg-orange-500";
  return "bg-red-500";
};

const OccupancyHeatmap: React.FC<OccupancyHeatmapProps> = ({
  title,
  data,
  subtitle,
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr>
                <th className="p-1 text-left text-muted-foreground font-medium">Hora</th>
                {days.map((day) => (
                  <th key={day} className="p-1 text-center text-muted-foreground font-medium">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((slot) => (
                <tr key={slot.hour}>
                  <td className="p-1 text-muted-foreground font-medium">{slot.hour}</td>
                  {dayKeys.map((dayKey) => (
                    <td key={dayKey} className="p-1">
                      <div
                        className={cn(
                          "w-full h-6 rounded flex items-center justify-center text-[10px] font-bold",
                          getHeatColor(slot[dayKey]),
                          slot[dayKey] >= 85 ? "text-white" : "text-foreground"
                        )}
                      >
                        {slot[dayKey] > 0 ? `${slot[dayKey]}%` : "-"}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs">
          <span className="text-muted-foreground">Ocupación:</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-emerald-200 rounded" />
            <span>&lt;50%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-emerald-400 rounded" />
            <span>50-70%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-amber-400 rounded" />
            <span>70-85%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-orange-500 rounded" />
            <span>85-95%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-500 rounded" />
            <span>&gt;95%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OccupancyHeatmap;
