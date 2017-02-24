<template>
    <div id="body" :style="{ height: clientHeight }">
        <div>
            <img :src="imageSrc" />
        </div>     
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imageSrc: '',
                clientHeight: 0
            }
        },
        methods:{
        },
        created() {
            this.$http.get('https://vuejs.org/images/logo.png').then(function(response){
                this.imageSrc = response.url;
            });
        },
        mounted(){
            this.clientHeight = document.documentElement.clientHeight + 'px';
        }
    }
</script>

<style scoped>
    div#body{
        height: 100%;
        margin: -8px;
        height: 100%;
        background: #37495f; /* For browsers that do not support gradients */
        background: -webkit-linear-gradient(#3ab982, #37495f); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(#3ab982, #37495f); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(#3ab982, #37495f); /* For Firefox 3.6 to 15 */
        background: linear-gradient(#3ab982, #37495f); /* Standard syntax (must be last) */
    }

    img{
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        margin: auto;
        transform: translate(-50%,-50%);
    }
</style>
