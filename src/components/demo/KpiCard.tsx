import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: number;
  trendLabel?: string;
  icon?: React.ReactNode;
  target?: number;
  targetLabel?: string;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger";
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  unit,
  trend,
  trendLabel,
  icon,
  target,
  targetLabel,
  className,
  variant = "default",
}) => {
  const getTrendIcon = () => {
    if (trend === undefined) return null;
    if (trend > 0) return <TrendingUp className="w-3 h-3" />;
    if (trend < 0) return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  const getTrendColor = () => {
    if (trend === undefined) return "";
    if (trend > 0) return "text-emerald-600 bg-emerald-50";
    if (trend < 0) return "text-red-600 bg-red-50";
    return "text-slate-600 bg-slate-50";
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-l-4 border-l-emerald-500";
      case "warning":
        return "border-l-4 border-l-amber-500";
      case "danger":
        return "border-l-4 border-l-red-500";
      default:
        return "";
    }
  };

  return (
    <Card className={cn("bg-card", getVariantStyles(), className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-muted-foreground text-sm font-medium">
            {title}
          </span>
          {icon && (
            <div className="text-muted-foreground">{icon}</div>
          )}
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold text-foreground">{value}</span>
          {unit && (
            <span className="text-lg text-muted-foreground">{unit}</span>
          )}
        </div>

        {trend !== undefined && (
          <div
            className={cn(
              "inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded",
              getTrendColor()
            )}
          >
            {getTrendIcon()}
            {trend > 0 ? "+" : ""}
            {trend}% {trendLabel || "vs mes pasado"}
          </div>
        )}

        {target !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>{targetLabel || "Objetivo"}</span>
              <span>{target}{unit}</span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all",
                  Number(value) >= target ? "bg-emerald-500" : "bg-amber-500"
                )}
                style={{
                  width: `${Math.min((Number(value) / target) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;
