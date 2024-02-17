<script setup lang="ts">
import { reactive, ref, computed, onMounted, watch } from 'vue'
import ChildComp from '@/components/ChildComp.vue'

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

//  v-if
const h1ToggleFlg = ref(true)
function h1Toggle() {
  h1ToggleFlg.value = !h1ToggleFlg.value
}

// v-for
let countId = 0
const todoLists = ref([
  {
    id: countId++,
    title: 'test1',
    done: false
  },
  {
    id: countId++,
    title: 'test2',
    done: false
  },
  {
    id: countId++,
    title: 'test3',
    done: false
  }
])
const inputTodoTitle = ref('')
function addTodoList() {
  todoLists.value.push({
    id: countId++,
    title: inputTodoTitle.value,
    done: false
  })
  inputTodoTitle.value = ''
}
function removeTodo(todoId: number) {
  todoLists.value = todoLists.value.filter((todoList) => todoList.id != todoId)
}

// computed
const hideCompleted = ref(false)
const filterTodoLists = computed(() => {
  return hideCompleted.value
    ? todoLists.value.filter((todoList) => !todoList.done)
    : todoLists.value
})

// ライフサイクル
const pElementRef = ref<HTMLElement | null>(null)
onMounted(() => {
  console.log('Mountが実行されました')
  pElementRef.value!.textContent = 'hello Mount'
})

// watch
const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  todoData.value = await res.json()
}
fetchData()
watch(todoId, fetchData)

// props
const greeting = ref('Hello Children Compnent')

// emit
function emitLog() {
  console.log('子コンポーネントからイベントを受信しました！')
}
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
    <br />
    <br />
    <h1 v-if="h1ToggleFlg">Toggle display</h1>
    <h1 v-else>Toggle not display</h1>
    <button v-on:click="h1Toggle">Toggle</button>
    <br />
    <br />
    <input v-model="inputTodoTitle" />
    <button v-on:click="addTodoList">add</button>
    <ul>
      <li v-for="todoList in filterTodoLists" :key="todoList.id">
        <input type="checkbox" v-model="todoList.done" />
        <span :class="{ done: todoList.done }">{{ todoList.title }}</span>
        <button v-on:click="removeTodo(todoList.id)">X</button>
      </li>
    </ul>
    <br />
    <br />
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
    <br />
    <br />
    <p ref="pElementRef">hello</p>
    <br />
    <br />
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
    <br />
    <br />
    <ChildComp :msg="greeting" @response="emitLog">This is some slot !</ChildComp>
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
  .done {
    text-decoration: line-through;
  }
}
</style>
