<script setup lang="ts">
const isLogged = ref(false);
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
    class="flex h-20 items-center justify-between border-b-2 border-b-white-10 px-8"
  >
    <NuxtLink class="flex select-none items-center gap-3" to="/">
      <img src="/logo.svg" alt="" />
      <img src="/logo-name.svg" alt="" class="hidden sm:flex" />
    </NuxtLink>
    <!-- Menu Actions -->
    <div class="flex items-center gap-3 sm:gap-5">
      <div class="flex items-center gap-2 text-xl sm:gap-4">
        <Button variant="icon" :action="showSearch">
          <Icon name="streamline:magnifying-glass" />
        </Button>
        <Button to="/posts/edit" v-show="isLogged" variant="icon">
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
      <Button variant="primary" v-else to="/getin">Get Started</Button>
    </div>
  </header>

  <SearchOverlay :hideSearch="hideSearch" :isSearchVisible="isSearchVisible" />
</template>

<style></style>
