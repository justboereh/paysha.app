<script setup lang="ts">
import { GithubIcon, UserIcon } from 'lucide-vue-next'
useHead({
  title: 'Signin - Paysha',
})

definePageMeta({ layout: 'empty' })
</script>

<template>
  <container
    :full="true"
    center="both"
    inner-class="max-w-sm"
  >
    <nuxt-link
      to="/"
      class="w-4/5"
    >
      <svg-logo class="h-full" />
    </nuxt-link>

    <br />

    <a-button
      class="min-h-[36px]"
      size="large"
      type="primary"
      long
    >
      <template #icon>
        <GithubIcon />
      </template>
      Sign in with Github
    </a-button>

    <a-button
      class="min-h-[36px]"
      size="large"
      long
    >
      <template #icon>
        <UserIcon />
      </template>
      Continue as Guest
    </a-button>

    <a-divider />

    <p class="text-black/75 text-center">
      By continuing, you agree to give Paysha Inc. all your data and sell to China, Russia, North Korea, and/or the highest bidder. These
      <nuxt-link to="/terms">
        <a-link>terms</a-link>
      </nuxt-link>
      and
      <nuxt-link to="/privacy">
        <a-link>privacy policy</a-link>
      </nuxt-link>
      also apply, so yeaaahhhh. Beat it.
    </p>

    <span class="block w-px h-full flex-grow bg-neutral-300" />
  </container>
</template>
