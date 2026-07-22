<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
    <span class="text-lg font-semibold">MyPortfolio</span>
    <div class="flex gap-6 text-sm text-gray-600">
      <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
      <RouterLink to="/projects" class="hover:text-blue-600">Projects</RouterLink>
      <RouterLink to="/contact" class="hover:text-blue-600">Contact</RouterLink>
    </div>
  </nav>
</template>
