<script setup lang="ts">
function bar() {
  ElMessage.success('panel')
}
</script>

<template>
  <div>Hello Panel!</div>
  <el-button @click="bar">
    nihaoaaa
  </el-button>
</template>

<style scoped></style>
