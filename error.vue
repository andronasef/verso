<script lang="ts">
import "@/assets/main.scss";
</script>

<!-- TODO: Customize the issue for other Errors -->

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div
      class="max-w-5xl mx-auto p-8 py-12 sm:p-16 flex flex-col gap-8 flex-grow justify-center items-center"
    >
      <div class="flex flex-col text-center gap-1">
        <p class="text-2xl sm:text-3xl font-bold">
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
