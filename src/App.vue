<script setup>
import { ref, onMounted } from 'vue'
import TodoItem from './components/TodoItem.vue'
import { supabase } from './assets/superbase.js'

const newTodo = ref('')
const todos = ref([])
const filter = ref('all')
// const error = ref()

// Fetch todos from Supabase
async function fetchTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) console.error('Error fetching todos:', error)
  else todos.value = data
}

// Add a new todo to Supabase
async function addTodo() {
  if (!newTodo.value.trim()) return

  const { data, error } = await supabase
    .from('todos')
    .insert([{ text: newTodo.value.trim(), completed: false }])
    .select()

  if (error) console.error('Error adding todo:', error)
  else {
    todos.value.unshift(data[0])
    newTodo.value = ''
  }
}

// Toggle todo completion in Supabase
async function toggleComplete(index) {
  const todo = todos.value[index]
  const { error } = await supabase
    .from('todos')
    .update({ completed: !todo.completed })
    .eq('id', todo.id)

  if (error) console.error('Error updating todo:', error)
  else todo.completed = !todo.completed
}

// Delete a todo from Supabase
async function deleteTodo(index) {
  const todo = todos.value[index]
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', todo.id)

  if (error) console.error('Error deleting todo:', error)
  else todos.value.splice(index, 1)
}

// Clear completed todos
async function clearCompleted() {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('completed', true)

  if (error) console.error('Error clearing todos:', error)
  else todos.value = todos.value.filter(todo => !todo.completed)
}

// Fetch todos when the component mounts
onMounted(() => {
  fetchTodos()
})
</script>
<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Todo List</h1>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <!-- Add new todo form -->
        <div class="p-4 border-b">
          <form @submit.prevent="addTodo" class="flex gap-2">
          <!-- <span v-if="this.error" class="bg-red-500 p-6">
{{ this.error }}
          </span> -->
            <input
              v-model="newTodo"
              type="text"
              placeholder="Add a new todo..."
              class="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </form>
        </div>
        
        <!-- Todo list -->
        <ul class="divide-y divide-gray-200">
          <TodoItem
            v-for="(todo, index) in fetchTodos"
            :key="index"
            :todo="todo"
            :index="index"
            @toggle-complete="toggleComplete"
            @delete-todo="deleteTodo"
          />
          
          <li v-if="fetchTodos.length === 0" class="p-4 text-center text-gray-500">
            No todos found
          </li>
        </ul>
        
        <!-- Todo footer with filters -->
        <div class="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div>
            {{ todos.filter(t => !t.completed).length }} items left
          </div>
          
          <div class="flex gap-2">
            <button
              @click="filter = 'all'"
              :class="{ 'text-indigo-600 font-medium': filter === 'all' }"
              class="hover:text-gray-800"
            >
              All
            </button>
            <button
              @click="filter = 'active'"
              :class="{ 'text-indigo-600 font-medium': filter === 'active' }"
              class="hover:text-gray-800"
            >
              Active
            </button>
            <button
              @click="filter = 'completed'"
              :class="{ 'text-indigo-600 font-medium': filter === 'completed' }"
              class="hover:text-gray-800"
            >
              Completed
            </button>
          </div>
          
          <button
            @click="clearCompleted"
            class="hover:text-gray-800"
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>