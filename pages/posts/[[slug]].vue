<script setup lang="ts">
const { title, image, description, date, content, author } = {
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  image: "https://picsum.photos/600/300",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  date: "2022-01-01",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  author: {
    name: "Andrew Nasef",
    image: "https://picsum.photos/60/60",
    username: "andronasef",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <NuxtLink :to="`/author/${author.username}`">
        <div class="flex gap-3 items-center">
          <img :src="author.image" class="w-6 h-6 rounded-full" alt="" />
          <div class="font-bold">{{ author.name }}</div>
        </div>
      </NuxtLink>
      <h3 class="text-xl sm:text-3xl font-bold">
        {{ title }}
      </h3>
      <p class="text-white-75">{{ description }}</p>
      <div class="text-white-75">{{ date }}</div>
    </div>
    <img
      :src="image"
      alt=""
      srcset=""
      class="aspect-video w-[95%] rounded overflow-hidden self-center"
    />
  </div>
  <div>{{ content }}</div>

  <div>
    <div class="flex flex-col gap-3 items-start">
      <NuxtLink :to="`/author/${author.username}`">
        <img :src="author.image" class="w-24 h-24 rounded-full" alt="" />
      </NuxtLink>
      <NuxtLink :to="`/author/${author.username}`">
        <div class="font-bold text-xl">Written by {{ author.name }}</div>
      </NuxtLink>
      <p class="text-white-75">{{ author.description }}</p>
    </div>
  </div>
</template>

<style></style>
