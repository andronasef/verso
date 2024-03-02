<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
    default:
      "https://media.vanityfair.com/photos/5edcf34989654e1d12a48bf0/1:1/w_1600%2Cc_limit/jk-rowling.jpg",
  },
  followersCount: {
    type: String,
    required: false,
  },
  link: {},
});
</script>

<template>
  <NuxtLink :to="link">
    <div
      class="flex flex-col min-h-[200px] shadow-lg gap-4 bg-white-5 rounded justify-center items-center"
    >
      <img :src="photo" class="w-24 h-24 rounded-full" alt="" />
      <div class="font-bold">{{ name }}</div>
      <div v-if="followersCount">{{ followersCount }}</div>
    </div>
  </NuxtLink>
</template>

<style></style>
