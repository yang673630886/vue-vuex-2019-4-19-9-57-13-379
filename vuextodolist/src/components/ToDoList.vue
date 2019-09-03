<template>
    <div>
    <span>{{index}}</span>
    <span>{{getlistInfo}}</span>
    </div>
</template>

<script>
export default {
    methods:{
    },
    computed:{
        getlistInfo(){
            return this.$store.getters.getList();

        }
    }
    
}
</script>