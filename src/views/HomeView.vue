<script setup>
import ProjectCard from '../components/ProjectCard.vue'

const projects = [
  {
    title: 'Todo App',
    description: 'แอปจัดการงาน สร้างด้วย Vue + Firebase',
    link: '',
  },
  {
    title: 'Shop Mockup',
    description: 'หน้าร้านค้าออนไลน์จำลอง ใช้ Vue + Tailwind',
    link: '',
  },
  {
    title: 'Dashboard',
    description: 'แดชบอร์ดแสดงข้อมูลจาก Public API',
    link: '',
  },
]
</script>

<template>
  <div class="p-8">
    <div class="text-center mb-10">
      <h1 class="text-2xl font-bold mb-1">สวัสดี ผมชื่อ ...</h1>
      <p class="text-gray-600">Front-end Developer · Vue.js / Tailwind CSS</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :link="project.link"
      />
    </div>
  </div>
</template>
