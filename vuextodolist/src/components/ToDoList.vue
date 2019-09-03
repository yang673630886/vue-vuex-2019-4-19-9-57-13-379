<template>
    <div>
    <span>{{index}}</span>
    <p>{{getlistInfo}}</p>
    </div>
</template>

<script>
export default {
    methods:{
    },
    computed:{
        getlistInfo(){
            window.console.log("1213")
            return this.$store.getters.getList();

        }
    }
    
}
</script>