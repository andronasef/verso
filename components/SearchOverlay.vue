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
      class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white-5/95 bg-opacity-95 px-8"
      v-if="isSearchVisible"
    >
      <Button
        :action="hideSearch"
        variant="secondary"
        class="absolute right-10 top-10 !p-2 text-xl sm:right-16 sm:top-16"
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
