<template>
    <p>
        <PostsCard  :qtdPosts = "nPosts"/>
        <posts-card :qtdPosts = "0" />
        <RouterLink>teste</RouterLink>
    </p>
</template>

<script>
    import PostsCard from '../components/PostsCard.vue'
    export default{
        name: 'HomePage',
        components: {
        PostsCard,
        },
        data() {
        return{
            nPosts: 0,
        }
        },
        mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            response.json()
            .then((dados) => {
            this.nPosts = dados.length;
            console.log('Posts fetched: ', dados)
            })
        })
        .catch((erro) => {
            console.log.error('Error fetching posts: ', erro)
        })
        },
    }
</script>