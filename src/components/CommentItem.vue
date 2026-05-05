<template>
    <div class="ms-4 mt-4 mb-5">
        <h3 class="d-inline">-{{ comment.name }}</h3>
        <p class="d-inline">/{{ comment.email }}</p>
        <p>{{ comment.body }}</p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'CommentItem',
        props: {
            comment: Object,
        },
    }
</script>

<style scoped>
</style>