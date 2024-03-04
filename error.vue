<script lang="ts" setup>
import "@/assets/main.scss";
</script>

<!-- TODO: Customize the issue for other Errors -->

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <div
      class="mx-auto flex max-w-5xl flex-grow flex-col items-center justify-center gap-8 p-8 py-12 sm:p-16"
    >
      <div class="flex flex-col gap-1 text-center">
        <p class="text-2xl font-bold sm:text-3xl">
          Oops! That page can’t be found.
        </p>
        <p class="text-lg font-medium text-white-75">
          It looks like nothing was found at this location. Maybe try to search
          for something else?
        </p>
      </div>
      <Searchbar />
    </div>
    <Footer />
  </div>
</template>
