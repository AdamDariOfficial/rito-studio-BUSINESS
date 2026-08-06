import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorialArrowProps {
  className?: string;
  size?: number;
}

export function EditorialArrow({ className, size = 18 }: EditorialArrowProps) {
  return (
    <ArrowUpRight
      aria-hidden
      size={size}
      strokeWidth={1.7}
      className={cn("editorial-arrow", className)}
    />
  );
}
