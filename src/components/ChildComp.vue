<script setup lang="ts">
// propsの受け取りを宣言
const props = defineProps({
  msg: String
})

// 発行されるイベントを宣言します
const emit = defineEmits(['response'])
// 引数つきで発行
emit('response', 'hello from child')
</script>

<template>
  <div>
    <h1>{{ props.msg }}</h1>
    <br />
    <br />
    <slot>Fallback content</slot>
    <br />
    <br />
  </div>
</template>

<style></style>
