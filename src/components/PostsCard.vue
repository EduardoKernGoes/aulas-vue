<template>
    <div class="card">
        <h2 v-if="qtdPosts>0">{{ qtdPosts }} Posts</h2>
        <h2 v-if="qtdPosts === 0">Não há posts</h2>
        <p v-if="qtdPosts>0">ver posts</p>
    </div>
</template>

<script>
    export default {
        name: 'PostsCard',
        props: {
            qtdPosts: {
                type: Number,
                required: true,
            },
        },
    }
</script>

<style scoped>
    .card{
        border: 1px solid grey;
        border-radius: 8px;
        padding: 16px;
        margin: 8px;
    }
</style>