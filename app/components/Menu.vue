<template>
  <nav class="container md:mx-auto flex-auto font-mono">
    <ul class="flex space-x-20 justify-center">
      <li>
        <NuxtLink
          to="/about"
          class="link"
        >
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/blog"
          class="link"
        >
          Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projekte"
          class="link"
        >
          Projekte
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
  .link {
    @apply p-1 hover:bg-gray-200;
    @apply font-mono;
  }

</style>
