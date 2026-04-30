<template>
    <div class="post-item">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p v-if="post.like">Recebeu um like</p>
        <button @click="clique()">Dar like</button>
    </div>
    <hr>
</template>

<script>
    export default{
        name: 'PostItem',
        emits: ['like'],
        props: {
            post: Object,
        },
        methods: {
            clique(){
                this.$emit('like', this.post.id)
            }
        }
    }
</script>

<style scoped>
</style>