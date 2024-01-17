<script setup lang="ts">
import { MenuIcon, SettingsIcon, BookIcon, LogOutIcon } from 'lucide-vue-next'

definePageMeta({ layout: 'empty' })
useHead({
  title: 'Dashboard - Paysha',
})
</script>

<template>
  <container
    class="sticky top-0 border border-b"
    inner-class="flex justify-between items-center"
  >
    <svg-logo-icon class="h-8" />

    <a-dropdown>
      <a-button>
        <template #icon>
          <MenuIcon :size="16" />
        </template>
      </a-button>

      <template #overlay>
        <a-menu>
          <a-menu-item>
            <span class="flex gap-2 items-center">
              <SettingsIcon :size="16" />

              Settings
            </span>
          </a-menu-item>

          <a-menu-item value="docs">
            <span class="flex gap-2 items-center">
              <BookIcon :size="16" />

              Documentation
            </span>
          </a-menu-item>

          <a-menu-item value="signout">
            <span class="flex gap-2 items-center">
              <LogOutIcon :size="16" />

              Sign out
            </span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </container>
</template>
