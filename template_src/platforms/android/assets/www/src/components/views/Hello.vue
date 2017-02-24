<template>
    <div id="body">
        <div>
            
        </div>     
    </div>
</template>

<script>
    export default {
        created() {
            this.$http.get('')
                .then(function(response){
                    console.log(response);
                });
        }
    }
</script>

<style scoped>
    div#body{
        background: #37495f; /* For browsers that do not support gradients */
        background: -webkit-linear-gradient(#3ab982, #37495f); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(#3ab982, #37495f); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(#3ab982, #37495f); /* For Firefox 3.6 to 15 */
        background: linear-gradient(#3ab982, #37495f); /* Standard syntax (must be last) */
    }
</style>
