<script setup lang="ts">
import { tv } from "tailwind-variants";

interface Props {
  variant?: "normal" | "primary" | "secondary" | "icon" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  align?: "left" | "center" | "right" | undefined;
  action?: VoidFunction;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "normal",
  size: "md",
  align: "center",
  action: () => {},
  to: "",
});

const button = tv({
  base: "font-medium text-white rounded-full hover:opacity-90 active:opacity-85 flex items-center gap-3 justify-center transition-all select-none",
  variants: {
    variant: {
      normal: "",
      primary: "bg-primary-600",
      secondary: "border-2 border-white-100 hover:bg-white-10",
      icon: "text-xl ",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-base",
    },
    align: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
    { variant: "icon", size: ["sm", "md", "lg"], class: "!p-3 !aspect-square" },
    {
      variant: ["icon", "normal"],
      class: "hover:bg-white-100 hover:bg-opacity-5",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "normal",
  },
});
</script>

<template>
  <button
    @click="async () => (to ? await navigateTo(to) : action())"
    :class="button({ variant, size, align })"
  >
    <slot></slot>
  </button>
</template>
