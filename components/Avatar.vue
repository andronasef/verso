<script setup lang="ts">
const props = defineProps({
  isProfileMenuVisible: { type: Boolean, required: true },
  closeProfileMenu: {
    type: Function,
    required: true,
  },
  toggleAvatarMenu: {
    type: Function,
    required: true,
  },
});

const { isProfileMenuVisible } = toRefs(props);

const profileRef = ref(null);
const { closeProfileMenu } = toRefs(props);
onClickOutside(profileRef, (e) =>
  isProfileMenuVisible.value ? closeProfileMenu.value() : null
);
</script>

<template>
  <div class="relative" ref="profileRef">
    <!-- Avatar -->
    <div
      @click="toggleAvatarMenu"
      class="w-8 h-8 bg-red-400 rounded-full hover:cursor-pointer"
    ></div>
    <!-- Profile Avatar Menu -->
    <Transition name="fade">
      <div
        v-if="isProfileMenuVisible"
        class="flex flex-col gap-4 absolute top-10 right-0 bg-[#212121] w-48 px-4 py-6 rounded z-50"
      >
        <div class="flex flex-col gap-3 [&>*]:text-xl [&>Button>div]:text-lg">
          <Button align="left">
            <Icon name="material-symbols:account-circle" />
            <div>Profile</div>
          </Button>
          <Button align="left">
            <Icon name="material-symbols:article-rounded" />
            <div>My Posts</div>
          </Button>
          <Button align="left">
            <Icon name="streamline:cog-solid" />
            <div>Settings</div>
          </Button>
        </div>
        <Divider type="horizontal" />
        <Button align="left" class="font-bold">Log out</Button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
