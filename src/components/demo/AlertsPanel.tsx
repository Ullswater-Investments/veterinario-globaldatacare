import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Alert {
  id: string;
  type: "prediction" | "warning" | "critical" | "info";
  title: string;
  message: string;
  timestamp?: string;
  actionLabel?: string;
  onAction?: () => void;
}

interface AlertsPanelProps {
  title: string;
  alerts: Alert[];
  className?: string;
}

const getAlertConfig = (type: Alert["type"]) => {
  switch (type) {
    case "critical":
      return {
        icon: AlertCircle,
        bgColor: "bg-red-500",
        textColor: "text-white",
        badgeVariant: "destructive" as const,
      };
    case "warning":
      return {
        icon: AlertTriangle,
        bgColor: "bg-amber-500",
        textColor: "text-white",
        badgeVariant: "secondary" as const,
      };
    case "prediction":
      return {
        icon: Brain,
        bgColor: "bg-indigo-600",
        textColor: "text-white",
        badgeVariant: "default" as const,
      };
    default:
      return {
        icon: Info,
        bgColor: "bg-blue-500",
        textColor: "text-white",
        badgeVariant: "secondary" as const,
      };
  }
};

const AlertsPanel: React.FC<AlertsPanelProps> = ({
  title,
  alerts,
  className,
}) => {
  if (alerts.length === 0) {
    return (
      <Card className={className}>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <Brain className="w-5 h-5" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-4">
            No hay alertas activas
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Brain className="w-5 h-5" />
          {title}
          <Badge variant="secondary" className="ml-auto">
            {alerts.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const config = getAlertConfig(alert.type);
          const Icon = config.icon;

          return (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-xl flex items-start gap-3",
                config.bgColor,
                config.textColor
              )}
            >
              <div className="bg-white/20 p-2 rounded-lg shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm uppercase tracking-wide opacity-90">
                    {alert.title}
                  </span>
                  {alert.timestamp && (
                    <span className="text-xs opacity-70">{alert.timestamp}</span>
                  )}
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  {alert.message}
                </p>
                {alert.actionLabel && alert.onAction && (
                  <button
                    onClick={alert.onAction}
                    className="mt-2 text-xs font-bold underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    {alert.actionLabel}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
