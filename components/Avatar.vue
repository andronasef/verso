<script setup lang="ts">
interface Props {
  isProfileMenuVisible: boolean;
  closeProfileMenu: VoidFunction;
  toggleAvatarMenu: VoidFunction;
}

const props = withDefaults(defineProps<Props>(), {});

const { isProfileMenuVisible } = toRefs(props);

const profileRef = ref(null);
const { closeProfileMenu } = toRefs(props);
onClickOutside(profileRef, (e) =>
  isProfileMenuVisible.value ? closeProfileMenu.value() : null,
);
</script>

<template>
  <div class="relative" ref="profileRef">
    <!-- Avatar -->
    <div
      @click="toggleAvatarMenu"
      class="h-8 w-8 rounded-full bg-red-400 hover:cursor-pointer"
    ></div>
    <!-- Profile Avatar Menu -->
    <Transition name="fade">
      <div
        v-if="isProfileMenuVisible"
        class="absolute right-0 top-10 z-50 flex w-48 flex-col gap-4 rounded bg-white-10 px-4 py-6"
      >
        <div class="flex flex-col gap-3 [&>*]:text-xl [&>Button>div]:text-lg">
          <Button
            align="left"
            to="/author/author-slug"
            :action="toggleAvatarMenu"
          >
            <Icon name="material-symbols:account-circle" />
            <div>Profile</div>
          </Button>
          <Button align="left" to="/myposts" :action="toggleAvatarMenu">
            <Icon name="material-symbols:article-rounded" />
            <div>My Posts</div>
          </Button>
          <Button align="left" to="/mysettings" :action="toggleAvatarMenu">
            <Icon name="streamline:cog-solid" />
            <div>Settings</div>
          </Button>
        </div>
        <Divider type="horizontal" />
        <Button align="left" class="font-bold" :action="toggleAvatarMenu"
          >Log out</Button
        >
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
