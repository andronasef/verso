<script setup lang="ts">
const isLogged = ref(true);
const isSearchVisible = ref(false);
const isProfileMenuVisible = ref(false);

function closeProfileMenu() {
  isProfileMenuVisible.value = false;
  unlockScroll();
}

function toggleAvatarMenu() {
  isProfileMenuVisible.value = !isProfileMenuVisible.value;
  toggleScroll();
}

function hideSearch() {
  isSearchVisible.value = false;
  unlockScroll();
}

function showSearch() {
  lockScroll();
  isSearchVisible.value = true;
  isProfileMenuVisible.value = false;
  document.body.style.overflow = "hidden";
}
</script>

<template>
  <header
    class="flex justify-between items-center px-8 h-20 border-b-white-10 border-b-2"
  >
    <NuxtLink class="flex gap-3 items-center" to="/">
      <img src="/logo.svg" alt="" />
      <img src="/logo-name.svg" alt="" class="hidden sm:flex" />
    </NuxtLink>
    <!-- Menu Actions -->
    <div class="flex gap-3 sm:gap-5 items-center">
      <div class="flex gap-2 sm:gap-4 items-center text-xl">
        <Button variant="icon" :action="showSearch">
          <Icon name="streamline:magnifying-glass" />
        </Button>
        <Button v-show="isLogged" variant="icon">
          <Icon name="streamline:chat-bubble-square-write" />
        </Button>
      </div>
      <Divider />
      <Avatar
        v-if="isLogged"
        :isProfileMenuVisible="isProfileMenuVisible"
        :toggleAvatarMenu="toggleAvatarMenu"
        :closeProfileMenu="closeProfileMenu"
      />
      <Button variant="primary" v-else>Get Started</Button>
    </div>
  </header>

  <SearchOverlay :hideSearch="hideSearch" :isSearchVisible="isSearchVisible" />
</template>

<style></style>
