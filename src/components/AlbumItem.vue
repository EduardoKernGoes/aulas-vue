<template>
    <div class="album-item text-center">
        <h2 class="text-center pt-4">{{album.id}} - {{ album.title }}</h2>
        <div class="row justify-content-center px-5 pb-3">
            <AlbumPhoto
                v-for="p in visiblePhotos" :key="p.id" :photo="p"
            />
        </div>
        <span>{{ visiblePhotos.length }} de {{ allPhotosAlbum.length }}</span>
        <button @click="togglePhotos" class="see_more btn btn-lg btn-info m-0 w-100">
            {{ allLoaded ? 'Ver menos' : 'Ver mais' }}
        </button>
    </div>
    <hr>
</template>

<script>
    import AlbumPhoto from './AlbumPhoto.vue';
    import {getItems} from '../services/Index';
    export default{
        name: 'AlbumItem',
        components: {
            AlbumPhoto,
        },
        props: {
            album: Object,
        },
        data(){
            return{
                photos: [],
                limit: 4,
            }
        },
        computed: {
            allPhotosAlbum(){
                return this.photos.filter(p => p.albumId === this.album.id);
            },
            visiblePhotos(){
                return this.allPhotosAlbum.slice(0, this.limit);
            },
            allLoaded() {
                return this.limit >= this.allPhotosAlbum.length && this.allPhotosAlbum.length > 0;
            }
        },
        methods: {
            togglePhotos(){
                if(this.allLoaded){
                    this.limit = 4;
                }else{
                    this.limit += 10;
                }
            }
        },
        mounted() {
            getItems('photos')
            .then((dados) => {
                this.photos = dados;
            })
            .catch((error) => {
                console.log(error);
            });
        },
    }
</script>

<style scoped>
    .album-item{
        background:rgb(200, 200, 200);
        margin: 30px;
        border-radius: 10px;
        border: 1px solid rgb(150, 150, 150);
    }

    .see_more{
        border: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>