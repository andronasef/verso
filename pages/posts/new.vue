<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Quote from "@editorjs/quote";

const title = ref("");
const isSettingsVisible = ref(false);
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

watch(isLargeScreen, (isLarge: Boolean) => {
  if (isLarge) {
    isSettingsVisible.value = true;
  }
});

function showSettings() {
  isSettingsVisible.value = true;
  lockScroll();
}

function hideSettings() {
  isSettingsVisible.value = false;
  unlockScroll();
}

onMounted(() => {
  if (process.client) {
    isSettingsVisible.value = isLargeScreen.value;

    const editor = new EditorJS({
      placeholder: "Type text or paste a link",
      holder: "editor",
      data: {
        blocks: [],
      },
      tools: {
        header: Header,
        list: List,
      },
    });
  }
});
</script>

<template>
  <div class="flex w-full items-start justify-center gap-3 self-start">
    <!-- Post Editor -->
    <div class="flex w-full max-w-full flex-grow flex-col items-start">
      <!-- Main Actions -->
      <div class="flex gap-3 self-end lg:hidden">
        <Button variant="primary" class="!bg-green-400">Publish</Button>
        <Button variant="primary" class="!bg-error">Delete</Button>
        <Button variant="primary" :action="showSettings">Settings</Button>
      </div>
      <!-- Post Title -->
      <input
        autofocus
        type="text"
        placeholder="Title"
        :value="title"
        class="m-auto w-full border-0 bg-transparent py-2 text-3xl font-bold outline-none"
      />
      <!-- Editor -->
      <ClientOnly>
        <div id="editor" class="w-full"></div>
      </ClientOnly>
    </div>
    <!-- Settings -->
    <Transition name="fade">
      <div
        class="absolute right-0 top-0 z-10 h-screen min-w-full !overflow-y-auto bg-white-5/95 lg:static lg:h-full lg:w-[350px] lg:min-w-[350px] lg:bg-transparent"
        v-if="isSettingsVisible"
      >
        <div class="flex h-full flex-col gap-5 px-8 pt-24 lg:p-4">
          <!-- Close Button -->
          <Button
            :action="hideSettings"
            variant="secondary"
            class="absolute right-10 top-10 !p-2 text-xl lg:right-16 lg:top-16 lg:hidden"
          >
            <Icon name="flowbite:close-solid" />
          </Button>
          <!-- Settings Title -->
          <div>
            <p class="text-xl font-bold">Post Settings</p>
          </div>
          <!-- Post Actions Section -->
          <div class="flex flex-col gap-2">
            <p class="text-lg font-bold">Status</p>
            <div class="flex gap-3">
              <Button variant="primary" class="!bg-green-400">Publish</Button>
              <Button variant="primary" class="!bg-error">Delete</Button>
              <Button variant="primary" class="!bg-gray-400"
                >Change to Draft</Button
              >
            </div>
          </div>
          <!-- Featured Image Section -->
          <div class="flex flex-col gap-2">
            <p class="text-lg font-bold">Featured Image</p>
            <div
              class="flex aspect-video items-center justify-center rounded border-2 border-white-10"
            >
              <Icon name="uil:image-upload" size="32px" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: unset;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
h7 {
  font-size: revert;
  font-weight: revert;
}

.codex-editor * {
  color: white !important;
}
.ce-block--selected .ce-block__content {
  @apply rounded;
}

.cdx-block {
  max-width: 100%;
}

.ce-inline-tool:hover,
.ce-toolbar__actions > *,
.ce-popover-item__icon,
.ce-block--selected .ce-block__content,
.ce-conversion-toolbar,
.ce-conversion-tool__icon {
  background-color: theme("colors.white.10");
}

.ce-inline-tool--active {
  background-color: theme("colors.white.25");
}

.cdx-search-field,
.ce-popover-item:hover:not(.ce-popover-item--no-hover),
.ce-inline-toolbar__dropdown:hover,
.ce-conversion-tool:hover {
  background-color: theme("colors.white.25");
}

.ce-inline-toolbar,
.ce-popover,
.ce-toolbar__actions > *:hover,
.ce-inline-tool-input {
  background-color: theme("colors.white.5");
}
</style>
