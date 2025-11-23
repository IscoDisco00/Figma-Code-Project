"use client";

import * as React from "react";
import {
  Root as DrawerRoot,
  Trigger as DrawerTriggerPrimitive,
  Portal as DrawerPortalPrimitive,
  Overlay as DrawerOverlayPrimitive,
  Content as DrawerContentPrimitive,
  Close as DrawerClosePrimitive,
  Title as DrawerTitlePrimitive,
  Description as DrawerDescriptionPrimitive,
} from "vaul";

import { cn } from "./utils";

// Root
function Drawer(props: React.ComponentProps<typeof DrawerRoot>) {
  return <DrawerRoot data-slot="drawer" {...props} />;
}

// Trigger
function DrawerTrigger(
  props: React.ComponentProps<typeof DrawerTriggerPrimitive>
) {
  return (
    <DrawerTriggerPrimitive data-slot="drawer-trigger" {...props} />
  );
}

// Portal
function DrawerPortal(
  props: React.ComponentProps<typeof DrawerPortalPrimitive>
) {
  return (
    <DrawerPortalPrimitive data-slot="drawer-portal" {...props} />
  );
}

// Close
function DrawerClose(
  props: React.ComponentProps<typeof DrawerClosePrimitive>
) {
  return <DrawerClosePrimitive data-slot="drawer-close" {...props} />;
}

// Overlay
function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerOverlayPrimitive>) {
  return (
    <DrawerOverlayPrimitive
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
function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerContentPrimitive>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerContentPrimitive
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
      </DrawerContentPrimitive>
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
function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerTitlePrimitive>) {
  return (
    <DrawerTitlePrimitive
      data-slot="drawer-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

// Description
function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerDescriptionPrimitive>) {
  return (
    <DrawerDescriptionPrimitive
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
