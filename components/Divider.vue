<script setup lang="ts">
import { tv } from "tailwind-variants";

interface Props {
  type?: "horizontal" | "vertical" | undefined;
}

withDefaults(defineProps<Props>(), {
  type: "vertical",
});

const divider = tv({
  base: "bg-white-25 rounded-full",
  variants: {
    type: {
      horizontal: "h-px",
      vertical: "h-8 w-px",
    },
  },
});
</script>

<template>
  <div :class="divider({ type })"></div>
</template>
