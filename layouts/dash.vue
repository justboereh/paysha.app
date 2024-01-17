<script setup lang="ts">
import { GripIcon, SettingsIcon } from 'lucide-vue-next'
</script>

<template>
  <slot />

  <container
    class="fixed sm:hidden bottom-0 bg-white border border-t w-full"
    inner-class=" flex justify-around"
  >
    <a-button type="text">
      <template #icon>
        <GripIcon />
      </template>
    </a-button>

    <a-button type="text">
      <template #icon>
        <GripIcon />
      </template>
    </a-button>

    <a-button type="text">
      <template #icon>
        <GripIcon />
      </template>
    </a-button>

    <nuxt-link to="/settings">
      <a-button type="text">
        <template #icon>
          <SettingsIcon />
        </template>
      </a-button>
    </nuxt-link>
  </container>
</template>
