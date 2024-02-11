<script setup lang="ts">
import { reactive, ref } from 'vue'
const counter = reactive({
  count: 0,
  message: ''
})

// bind
const bindTest = ref('text')

// v-on
function increment() {
  counter.count++
}
function decrement() {
  counter.count--
}

//  v-model
</script>

<template>
  <div>
    <h1>Hello</h1>
    <br />
    <p>count : {{ counter.count }}</p>
    <br />
    <h1 v-bind:class="bindTest">Bind</h1>
    <br />
    <button v-on:click="increment">Count Up</button>
    <button v-on:click="decrement">Count Down</button>
    <br />
    <br />
    <input v-model="counter.message" />
    <p>{{ counter.message }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .text {
    color: aqua;
  }
}
</style>
