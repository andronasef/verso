<script setup lang="ts"></script>

<template>
  <!-- Top Authors -->
  <div class="flex flex-col gap-8">
    <div class="flex justify-between">
      <div class="text-2xl font-bold">Top Authors</div>
      <Button variant="secondary" size="sm">More</Button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <AuthorCard name="Andrew Nasef" v-for="i in 6" />
    </div>
  </div>
  <!-- Top Authors -->
  <div class="flex flex-col gap-8">
    <div class="flex justify-between">
      <div class="text-2xl font-bold">Top Posts</div>
      <Button variant="secondary" size="sm">More</Button>
    </div>
    <div class="flex flex-col gap-10">
      <PostCard
        v-for="i in 6"
        title="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        image="https://placehold.co/1280x720"
      />
    </div>
  </div>
</template>

<style></style>
