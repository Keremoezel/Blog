<script setup lang="ts">
useHead({
  titleTemplate: '%s - Kerem Ozel'
})
</script>


<template>
  <header class="flex justify-between items-center mt-5 py-8">
    <div class="container mx-auto">
      <NuxtLink to="/" class="homelink">
        Home
      </NuxtLink>
    </div>


    <Menu />
  </header>
    <main class="p-2 mt-10">


      <slot />
    </main>



  
</template>


<style>

.homelink {
 @apply text-black hover:bg-gray-200;
  @apply px-4 py-2 rounded font-bold text-4xl;


}

</style>