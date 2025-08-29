<script setup lang="ts">
useSeoMeta({
  title: 'main page',
  description: 'This is the main page',
  ogTitle: 'main page',
  ogDescription: 'This is the main page',
  ogImage: '[og:image]',
  ogUrl: 'keremozel.blog',
  twitterTitle: 'main page',
  twitterDescription: 'this is a blog for me',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>



<template>
  <div>
    <p class="font-mono">Hi here is the home page</p>
  </div>

</template>  

<style>

</style>