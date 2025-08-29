<script setup lang="ts" >
definePageMeta({
    layout: 'default'
})

useHead({
  titleTemplate: 'about-me'
})



/* function enableCustomLayout(){
 setPageLayout('custom')
}
function disableCustomLayout(){
 setPageLayout('default')
} */
</script>

<template>
        <p class="font-mono">
            diese seite ist uber mich
        </p>
    <!-- <div>
        <button @click="enableCustomLayout">Enable Custom Layout</button>
    </div>
    <div>
        <button @click="disableCustomLayout">Disable Custom Layout</button>
    </div> -->
</template>
