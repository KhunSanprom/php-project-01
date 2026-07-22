<script setup>
import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)
const isSubmitting = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  isSubmitting.value = true
  errorMsg.value = ''
  try {
    await addDoc(collection(db, 'messages'), {
      name: name.value,
      email: email.value,
      message: message.value,
      createdAt: serverTimestamp(),
    })
    submitted.value = true
  } catch (err) {
    console.error(err)
    errorMsg.value = 'Fail please sent again'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="p-8 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6 text-center">Contact</h1>

    <p v-if="submitted" class="text-green-600 text-center mb-4">
      Thank you for sending us a message. !
    </p>

    <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input
        v-model="name"
        type="text"
        placeholder="name"
        required
        class="border border-gray-300 rounded-lg px-3 py-2"
      />
      <input
        v-model="email"
        type="email"
        placeholder="email"
        required
        class="border border-gray-300 rounded-lg px-3 py-2"
      />
      <textarea
        v-model="message"
        placeholder="discription"
        rows="4"
        required
        class="border border-gray-300 rounded-lg px-3 py-2"
      ></textarea>

      <p v-if="errorMsg" class="text-red-600 text-sm">{{ errorMsg }}</p>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 disabled:opacity-50"
      >
        {{ isSubmitting ? 'please wait...' : 'sent message' }}
      </button>
    </form>
  </div>
</template>
