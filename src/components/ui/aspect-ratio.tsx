"use client";

// FIX 1: Removed the version number @1.1.2
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import * as React from "react"; // Added React import for ComponentProps

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };