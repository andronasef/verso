<script setup lang="ts">
defineProps({
  title: {
    default:
      "The secret life of people with high self-control (it’s easier than you think)",
    required: true,
  },
  description: {
    default:
      "Research suggests that people with high self-control are good at avoiding temptation — not resisting it",
    required: true,
  },
  date: {
    default: "Jan 9, 2024",
  },
  image: {
    default: "https://placehold.co/1280x720",
  },
  author: {},
  link: {},
});
</script>

<template>
  <NuxtLink :to="link">
    <div
      class="flex flex-col gap-2 sm:items-center sm:flex-row-reverse border-2 border-white-10 rounded-lg p-4"
    >
      <img
        :src="image"
        alt=""
        srcset=""
        class="aspect-video max-w-96 sm:w-1/2 rounded overflow-hidden"
      />
      <div class="flex flex-col gap-2">
        <h3 class="text-xl sm:text-2xl font-bold">
          {{ title }}
        </h3>
        <p class="text-white-75 line-clamp-2">{{ description }}</p>
        <div class="text-white-75">{{ date }}</div>
      </div>
    </div>
  </NuxtLink>
</template>

<style></style>
