<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
})
</script>

<template>
  <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
    <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600 mb-3">{{ description }}</p>
    <a v-if="link" :href="link" target="_blank" class="text-sm text-blue-600 hover:underline">
      View Project →
    </a>
  </div>
</template>
