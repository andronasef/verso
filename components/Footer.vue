<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-center px-8 py-10 border-t-white-10 border-t-2 gap-5"
  >
    <NuxtLink class="flex gap-3 items-center" to="/">
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
