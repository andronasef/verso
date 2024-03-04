<script lang="ts">
import "@/assets/main.scss";
</script>

<template>
  <div
    class="flex min-h-screen flex-col selection:bg-primary-500 selection:text-white-100"
  >
    <Header />
    <div class="mx-auto w-full max-w-screen-xl flex-grow">
      <div class="flex h-full flex-grow flex-col gap-16 p-8 py-12 sm:p-16">
        <NuxtPage />
      </div>
    </div>
    <Footer />
  </div>
</template>
