<script setup lang="ts">
const { author, posts } = {
  author: {
    name: "Andrew Nasef",
    image: "https://picsum.photos/60/60",
    username: "andronasef",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  posts: [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://picsum.photos/600/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      date: "2022-01-01",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ],
};
</script>

<template>
  <!-- Author Card -->
  <div class="flex flex-col items-start gap-3">
    <img :src="author.image" class="h-24 w-24 rounded-full" alt="" />
    <div class="text-xl font-bold">Written by {{ author.name }}</div>
    <p class="text-white-75">{{ author.description }}</p>
  </div>
  <!-- Posts -->
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
    <PostCard v-for="i in 6" to="/posts/post-slug" />
  </div>
  <!-- Pagination -->
  <Pagination />
</template>

<style></style>
