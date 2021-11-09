<template>
    <div class="">
        <router-view></router-view>
    </div>
</template>
<script>
import { rootComputed, rootMethods } from '@/store/helpers';

export default {
    computed: {
        ...rootComputed
    },
    methods: {
        ...rootMethods
    },
    created(){
    }
}
</script>
<style>
    
</style>