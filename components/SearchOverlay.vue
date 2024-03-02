<script setup lang="ts">
defineProps({
  isSearchVisible: {
    type: Boolean,
  },
  hideSearch: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <Transition name="fade">
    <div
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 flex items-center justify-center px-8"
      v-if="isSearchVisible"
    >
      <Button
        :action="hideSearch"
        variant="secondary"
        class="!p-2 text-xl absolute top-10 right-10 sm:top-16 sm:right-16"
      >
        <Icon name="flowbite:close-solid" />
      </Button>
      <Searchbar class="max-w" />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slideup-enter-active,
.slideup-leave-active {
  transition: all 200ms ease;
}
</style>
