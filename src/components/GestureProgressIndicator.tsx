import { useId } from "react";
import { cn } from "@/lib/utils";

const gestureArrowViewBoxWidth = 96;

interface GestureProgressIndicatorProps {
  progress: number;
  direction: "left" | "right";
  armed: boolean;
  label?: string;
  length?: "home" | "gallery";
  className?: string;
}

export function GestureProgressIndicator({
  progress,
  direction,
  armed,
  label,
  length = "home",
  className,
}: GestureProgressIndicatorProps) {
  const clipId = `gesture-progress-${useId().replace(/:/g, "")}`;
  const normalizedProgress = Math.min(1, Math.max(0, progress));
  const pathTransform = direction === "left" ? "rotate(180 48 10)" : undefined;
  const arrowWidth = length === "gallery" ? 36 : 96;
  const clipWidth = gestureArrowViewBoxWidth * normalizedProgress;
  const clipX = direction === "right" ? gestureArrowViewBoxWidth - clipWidth : 0;

  return (
    <span
      aria-hidden={label ? undefined : true}
      className={cn(
        "pointer-events-none inline-flex select-none flex-col items-start transition-[color,opacity] duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-ui)] motion-reduce:transition-none",
        normalizedProgress > 0 ? "opacity-100" : "opacity-0",
        className,
      )}
      data-armed={armed ? "true" : "false"}
      data-progress={normalizedProgress.toFixed(3)}
    >
      {label ? (
        <span className="mb-2 whitespace-nowrap text-[0.6875rem] font-medium">{label}</span>
      ) : null}
      <svg
        aria-hidden="true"
        className="block shrink-0 overflow-visible"
        width={arrowWidth}
        height="20"
        viewBox="0 0 96 20"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <rect x={clipX} y="0" width={clipWidth} height="20" />
          </clipPath>
        </defs>
        <path
          d="M2 10H92M84 2L92 10L84 18"
          transform={pathTransform}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
          opacity="0.24"
        />
        <path
          d="M2 10H92M84 2L92 10L84 18"
          transform={pathTransform}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={armed ? 1.8 : 1.5}
          vectorEffect="non-scaling-stroke"
          clipPath={`url(#${clipId})`}
        />
      </svg>
    </span>
  );
}
