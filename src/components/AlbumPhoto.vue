<template>
    <a class="col-5 text-center">
        <h3>{{ photo.title }}</h3>
        <img src="https://dummyimage.com/200x300/9696c8/000000">
    </a>
    <br>
</template>

<script>
    export default{
        name: 'AlbumPhoto',
        props: {
            photo: Object,
        },
    }
</script>

<style scoped>
    a{
        border: 1px solid rgb(220, 220, 220);
        background: rgb(230,230,230);
        box-shadow: 7px 7px 10px 0px rgb(160,160,160);
        border-radius: 10px;
        margin: 20px 30px;
        padding: 15px;
        text-decoration: none;
        color: rgb(90,90,90);
    }

    a:hover{
        color: black;
        transform: translateX(-3px) translateY(-3px);
        box-shadow: 10px 10px 10px 0px rgb(130,130,130);
    }

    a:hover img{
        box-shadow: 5px 5px 10px 0 rgb(160,160,160);
        border-radius: 10px;
        transform: translateX(-3px) translateY(-3px);
    }

    h3{
        font-size: 1.3rem;
    }

    img, a{
        transition: 0.4s;
    }
</style>