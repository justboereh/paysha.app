<script setup lang="ts">
import { pipe, object, string, email, type InferOutput, minLength, optional } from 'valibot'
import type { FormSubmitEvent } from '#ui/types'

const emit = defineEmits(['close'])
const toast = useToast()
const schema = object({
  name: pipe(string(), minLength(4, 'Has to be at least 4 characters.')),
  description: optional(string()),
})

type Schema = InferOutput<typeof schema>

const state = reactive({
  name: '',
  description: '',
})

async function onSubmit({ data }: FormSubmitEvent<Schema>) {
  if ((await createBook(data)) === false) return toast.add({ title: 'Creating book failed', color: 'red', icon: 'i-ps-exclamation-mark' })

  state.name = ''
  state.description = ''

  

  emit('close')
}
</script>

<template>
  <div class="p-3 prose">
    <p class="mt-0">Create a new book and start tracking.</p>

    <u-form
      :state="state"
      :schema="schema"
      class="space-y-4"
      @submit="onSubmit"
    >
      <u-form-group
        label="Name"
        name="name"
        required
        :ui="{
          error: 'mt-1',
        }"
      >
        <u-input v-model="state.name" />
      </u-form-group>

      <u-form-group
        label="Description"
        name="description"
        :ui="{
          error: 'mt-1',
        }"
      >
        <u-textarea v-model="state.description" />
      </u-form-group>

      <u-button type="submit"> Create book </u-button>
    </u-form>
  </div>
</template>
