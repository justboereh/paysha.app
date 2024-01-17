<script setup lang="ts">
type Props = {
  is?: string
  innerClass?: string
  innerIs?: string
  full?:
    | true
    | {
        header: boolean
        footer: boolean
      }
  center?: 'outer' | 'inner' | 'both'
}

defineProps<Props>()
</script>

<template>
  <component
    :is="is || 'div'"
    :class="['p-4', center && center !== 'outer' && 'grid place-items-center']"
    :style="{ height: full ? `calc(${full === true ? '100dvh' : ['100dvh', full.header && '3.5rem'].join(' - ')})` : 'auto' }"
  >
    <component
      :is="innerIs || 'div'"
      :class="['mx-auto max-w-7xl', , center && center !== 'inner' && 'flex flex-col items-center justify-center gap-4', innerClass]"
    >
      <slot />
    </component>
  </component>
</template>
