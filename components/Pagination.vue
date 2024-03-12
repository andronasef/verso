<script setup lang='ts'>

</script>

<template>
  <div
    class="flex items-stretch justify-center gap-2 [&>*]:rounded [&>*]:border-white-25"
  >
    <Button variant="secondary"
      ><Icon
        name="streamline:interface-arrows-button-left-double-arrow-arrows-double-left"
    /></Button>

    <Button variant="secondary">1</Button>
    <Button variant="primary" :action="undefined">2</Button>
    <Button variant="secondary">3</Button>
    <Button variant="secondary">4</Button>
    <Button variant="secondary"
      ><Icon
        name="streamline:interface-arrows-button-right-duoble-arrow-arrows-double-right"
        size="14"
    /></Button>
  </div>
</template>

<style>

</style>