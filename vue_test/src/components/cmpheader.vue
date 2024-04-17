<template lang="html">
  <div class="header">
    <ul>
      <li>header-1</li>
      <li>header-2</li>
      <li>header-3</li>
      <li>header-4</li>
    </ul>
  </div>
</template>

<script setup>
export default {
  name: 'cmpHeader'
}
</script>

<style lang="css" scoped>
header ul {overflow: hidden}
header ul li {float: left}
</style>
