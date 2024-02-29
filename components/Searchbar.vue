<script setup lang="ts">
const query = ref();

defineProps({
  doSearch: {
    type: Function,
    required: true,
  },
});

function doSearch(query: string) {
  alert(`Searching: ${query}`);
}
</script>

<template>
  <div class="relative w-full">
    <input
      v-model="query"
      type="text"
      class="w-full py-2 rounded-full px-4 bg-transparent border-white-75 focus:border-white-100 border-2 outline-none peer"
      placeholder="Search..."
      @keyup.enter="() => doSearch(query)"
    />
    <Button
      @click="() => doSearch(query)"
      variant="icon"
      class="absolute top-0 bottom-0 my-auto right-4 text-white-75 peer-focus:text-white-100"
    >
      <Icon name="streamline:magnifying-glass"
    /></Button>
  </div>
</template>

<style></style>
