<template>
  <container
    center="both"
    :full="{ header: true, footer: false }"
  >
    <h2 class="text-7xl text-red-500 font-bold">404</h2>
    <p>Can not find this page. Whoops!</p>

    <a-space>
      <nuxt-link to="/">
        <a-button type="primary">Run home</a-button>
      </nuxt-link>

      <a-button @click="$router.back()">Head back</a-button>
    </a-space>
  </container>
</template>
