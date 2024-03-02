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
  <div class="flex flex-col gap-3 items-start">
    <img :src="author.image" class="w-24 h-24 rounded-full" alt="" />
    <div class="font-bold text-xl">Written by {{ author.name }}</div>
    <p class="text-white-75">{{ author.description }}</p>
  </div>
  <div class="flex flex-col gap-6">
    <PostCard v-for="i in 6" />
  </div>

  <div
    class="flex justify-center items-stretch gap-2 [&>*]:border-white-25 [&>*]:rounded"
  >
    <Button variant="secondary"
      ><Icon
        name="streamline:interface-arrows-button-left-double-arrow-arrows-double-left"
    /></Button>

    <Button variant="secondary">1</Button>
    <Button variant="primary" :action="undefined">2</Button>
    <Button variant="secondary">3</Button>
    <Button variant="secondary">4</Button>
    <Button variant="secondary"
      ><Icon
        name="streamline:interface-arrows-button-right-duoble-arrow-arrows-double-right"
        size="14"
    /></Button>
  </div>
</template>

<style></style>
