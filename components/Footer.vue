<template>
  <div
    class="flex flex-col items-center justify-between gap-5 border-t-2 border-t-white-10 px-8 py-10 sm:flex-row sm:py-6"
  >
    <NuxtLink class="flex select-none items-center gap-3" to="/">
      <img src="/logo.svg" alt="" />
      <img src="/logo-name.svg" alt="" class="" />
    </NuxtLink>
    <div class="flex flex-row gap-3 font-bold text-white-75">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>
