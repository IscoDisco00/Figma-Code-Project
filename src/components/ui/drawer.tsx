"use client";

import * as React from "react";
// FIX: Import the main Drawer component (aliased as BaseDrawer) and access all sub-primitives from it.
import { Drawer as BaseDrawer } from "vaul";


import { cn } from "./utils";

// Root
// FIX: Use BaseDrawer as the root component
function Drawer(props: React.ComponentProps<typeof BaseDrawer.Root>) {
  return <BaseDrawer.Root data-slot="drawer" {...props} />;
}

// Trigger
// FIX: Use BaseDrawer.Trigger
function DrawerTrigger(
  props: React.ComponentProps<typeof BaseDrawer.Trigger>
) {
  return (
    <BaseDrawer.Trigger data-slot="drawer-trigger" {...props} />
  );
}

// Portal
// FIX: Use BaseDrawer.Portal
function DrawerPortal(
  props: React.ComponentProps<typeof BaseDrawer.Portal>
) {
  return (
    <BaseDrawer.Portal data-slot="drawer-portal" {...props} />
  );
}

// Close
// FIX: Use BaseDrawer.Close
function DrawerClose(
  props: React.ComponentProps<typeof BaseDrawer.Close>
) {
  return <BaseDrawer.Close data-slot="drawer-close" {...props} />;
}

// Overlay
// FIX: Use BaseDrawer.Overlay
function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Overlay>) {
  return (
    <BaseDrawer.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

// Content
// FIX: Use BaseDrawer.Content
function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <BaseDrawer.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          // Top
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          // Bottom
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          // Right
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          // Left
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </BaseDrawer.Content>
    </DrawerPortal>
  );
}

// Header
function DrawerHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

// Footer
function DrawerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

// Title
// FIX: Use BaseDrawer.Title
function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Title>) {
  return (
    <BaseDrawer.Title
      data-slot="drawer-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

// Description
// FIX: Use BaseDrawer.Description
function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseDrawer.Description>) {
  return (
    <BaseDrawer.Description
      data-slot="drawer-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};