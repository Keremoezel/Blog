<template>
    <div
    class="font-mono">
        test for blog 
    </div>

    <div>post id is {{ route.params.id }}</div>
</template>

<script setup>
const route = useRoute();

useHead({
  titleTemplate: 'blog'
})

</script>   
