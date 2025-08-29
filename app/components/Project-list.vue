<script setup lang="ts">
const {error, pending, data} = await useFetch('/api/users')
</script>


<template>
    <div>
        <div class="font-bold mb-2">Project Title</div>
    </div>
    <div>

        <p class="mb-10"> Take A look at these projects:</p>
    <section v-if="pending"> Loading... </section>
    <section v-else-if="error"> Error loading projects. </section>
    <section v-else> here we display the repos</section>

    <ul class="grid grid-cols-1 gap-4">
        <li v-for="repo in data" :key="repo.id" class="border-b py-2 rounded-sm p-4 hover:bg-gray-100 font-mono">
            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
            <div class="text-sm text-gray-600">{{ repo.name }}</div>
        </li>
    </ul>
    </div>
</template>
