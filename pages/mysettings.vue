<script setup lang="ts"></script>

<template>
  <h2 class="text-3xl font-bold">Your Settings</h2>
  <form class="grid gap-8">
    <h3 class="text-2xl font-bold">Public Profile</h3>
    <img
      class="w-32 rounded-full"
      src="https://media.vanityfair.com/photos/5edcf34989654e1d12a48bf0/1:1/w_1600%2Cc_limit/jk-rowling.jpg"
      alt=""
    />
    <TextInput label="Name" />
    <TextInput label="Username" />
    <TextInput size="textarea" label="Description" />
    <div class="flex gap-3">
      <Button variant="secondary"> Cancel </Button>
      <Button variant="primary"> Save </Button>
    </div>
  </form>
</template>

<style></style>
