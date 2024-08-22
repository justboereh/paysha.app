<script setup lang="ts">
useHead({
  title: 'Paysha',
})
</script>

<template>
  <header class="sticky top-0 h-14 border-b border-zinc-200 p-4 backdrop-blur">
    <div class="relative mx-auto flex h-full max-w-7xl items-center justify-between">
      <nuxt-link
        class="h-full"
        to="/"
      >
        <svg-logo class="h-full max-w-full" />
      </nuxt-link>

      <div class="absolute left-1/2 -translate-x-1/2 transform flex gap-2">
        <nuxt-link to="/docs">
          <a-button type="text"> Documentation </a-button>
        </nuxt-link>

        <nuxt-link to="https://github.com/justboereh/paysha.app">
          <a-button type="text"> Github </a-button>
        </nuxt-link>

        <nuxt-link to="/pricing">
          <a-button type="text"> Pricing </a-button>
        </nuxt-link>
      </div>

      <nuxt-link :to="'/signin'">
        <a-button type="primary"> Sign in </a-button>
      </nuxt-link>
    </div>
  </header>

  <slot />
</template>
