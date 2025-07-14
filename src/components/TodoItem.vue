<script setup>
defineProps({
  todo: Object,
  index: Number
})

defineEmits(['toggle-complete', 'delete-todo'])
</script>

<template>
  <li class="flex items-center justify-between gap-4 p-3 bg-white rounded-lg shadow">
    <div class="flex items-center gap-3 flex-1 min-w-0">
      <input 
        type="checkbox" 
        :checked="todo.completed" 
        @change="$emit('toggle-complete', index)"
        class="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <span 
        :class="{
          'line-through text-gray-400': todo.completed,
          'text-gray-800': !todo.completed
        }"
        class="truncate flex-1"
      >
        {{ todo.text }}
      </span>
    </div>
    <button 
      @click="$emit('delete-todo', index)"
      class="text-red-500 hover:text-red-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </li>
</template>