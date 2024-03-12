<script setup lang="ts">
const dummyPosts = [
  { id: 1, title: "First Post", content: "This is my first post" },
  { id: 2, title: "Second Post", content: "This is my second post" },
  { id: 3, title: "Third Post", content: "This is my third post" },
];
</script>

<template>
  <div class="grid gap-12">
    <h2 class="text-3xl font-bold">My Posts</h2>
    <div class="flex flex-col overflow-clip rounded">
      <div
        class="flex flex-col items-center justify-between bg-white-5 px-4 py-2 md:flex-row"
        :class="{ '!bg-white-10': index % 2 == 1 }"
        v-for="(post, index) in dummyPosts"
        :key="post.id"
      >
        <h3 class="self-start md:self-auto">{{ index }} {{ post.title }}</h3>
        <div class="flex self-end md:self-auto">
          <Button variant="icon">
            <Icon name="streamline:chat-bubble-square-write-solid" />
          </Button>
          <Button variant="icon">
            <Icon name="streamline:recycle-bin-2-solid" />
          </Button>
          <Button variant="icon">
            <Icon size="20" name="material-symbols:open-in-new-rounded" />
          </Button>
        </div>
      </div>
    </div>

    <Pagination />
  </div>
</template>

<style></style>
