<template>
  <div id="body" :style="{ height: clientHeight }">
    <div id="content">
      <img :src="imageSrc" />
      <p>
        {{ $t("welcome") }}<br>
        {{ $t("language") }} {{ getLanguage() }}
      </p>
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
      this.$http.get('images/logo.png').then(function(response){
        this.imageSrc = response.url;
      });
    },
    mounted(){
      this.clientHeight = document.documentElement.clientHeight + 'px';
      this.updateLanguage(navigator.language || navigator.userLanguage);
    }
  }
</script>

<style scoped>
  div#body{
    background: #37495f;
    background: -webkit-linear-gradient(#3ab982, #37495f);
    background: -o-linear-gradient(#3ab982, #37495f);
    background: -moz-linear-gradient(#3ab982, #37495f);
    background: linear-gradient(#3ab982, #37495f);
  }

  #content{
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    margin: auto;
    transform: translate(-50%,-50%);
  }

  img{
    width: 100%;
  }

  p{
    color: #FFF;
    font-family: sans-serif;
    text-align: center;
  }
</style>
