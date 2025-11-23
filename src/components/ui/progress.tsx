"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "./utils";

function Progress({
  className,
  value, // Removed the default value here
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  // FIX: Use optional chaining and nullish coalescing to ensure value is a number for CSS math
  const progressValue = value ?? 0;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value} // Pass the original value to Radix component
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        // FIX: Use the calculated progressValue to ensure it's a number
        style={{ transform: `translateX(${progressValue - 100}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };