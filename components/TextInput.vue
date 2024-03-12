<script setup lang="ts">
interface Props {
  name: string;
  label: string;
  value: "";
  placeholder: string;
  size?: "normal" | "textarea";
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  label: "",
  value: "",
  placeholder: "",
  size: "normal",
  type: "text",
});
</script>

<template>
  <div class="grid gap-4">
    <label :for="name" class="text-bg font-semibold text-white-75">{{
      label
    }}</label>

    <textarea
      :name="name"
      class="h-11 w-full resize-none rounded border-2 border-white-75 bg-transparent p-2 outline-none focus:border-white-100 md:max-w-[400px]"
      :type="type"
      :class="{ 'min-h-24 resize-y': size === 'textarea' }"
      size="text"
      :value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<style></style>
