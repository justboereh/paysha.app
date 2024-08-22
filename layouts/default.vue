<script setup lang="ts">
import type { Component } from 'vue'
const isSearching = ref(false)
const searchQuery = ref('')
const searchRef = ref<{ $el: HTMLDivElement }>()
const isCreatingBook = ref(false)
const openedBook = useState('useOpenBook', () => '')

const route = useRoute()
const router = useRouter()

watch(isSearching, async (v) => {
  if (!searchRef.value) return

  console.log(searchRef.value.$el)

  await nextTick()

  searchRef.value.$el[isSearching.value ? 'focus' : 'blur']()
})

onMounted(() => {
  fetchBooks()
})

function newBook() {}

watch(openedBook, (v)=> {
 if (!v) return location.
})
</script>

<template>
  <div class="sticky top-0 p-3 z-10">
    <div class="rounded-lg border border-light shadow-md shadow-black/5 bg-white relative max-w-3xl mx-auto">
      <div class="flex items-center p-1">
        <u-dropdown
          :items="[
            [
              { label: 'Shared with you', icon: 'i-ph-users-three', shortcuts: ['Y'] },
              { label: 'Trash', icon: 'i-ph-trash', shortcuts: ['T'] },
            ],
            [
              { label: 'Settings', icon: 'i-ph-gear', shortcuts: ['S'] },
              { label: 'Help & Feedback', icon: 'i-ph-question', shortcuts: ['H'] },
            ],
          ]"
          :popper="{
            placement: 'bottom-start',
          }"
        >
          <u-button
            icon="i-ph-dots-nine"
            color="gray"
            variant="ghost"
          />
        </u-dropdown>

        <u-button
          color="white"
          variant="ghost"
          class="flex-grow"
          @click="isSearching = true"
        >
          Search for books
        </u-button>

        <u-button
          icon="i-ph-file-plus"
          color="gray"
          variant="ghost"
          @click="isCreatingBook = true"
        />
      </div>

      <div
        v-show="isSearching"
        :class="['flex items-center absolute w-full top-0 h-full bg-white rounded-lg p-1']"
      >
        <u-button
          icon="i-ph-arrow-left"
          color="gray"
          variant="ghost"
          @click=";(isSearching = false), (searchQuery = '')"
        />

        <u-input
          ref="searchRef"
          v-model="searchQuery"
          type="text"
          class="flex-grow"
        />
      </div>
    </div>
  </div>

  <slot />

  <u-modal v-model="isCreatingBook">
    <create-book-container @close="isCreatingBook = false" />
  </u-modal>
</template>
