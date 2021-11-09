<template lang="">
    <div >
        <search-input
            label="검색조건1"
            :inputValue="seachConditon1"
            :onchange="setSearchCondition1"
        />
        <search-input
            label="검색조건2"
            :inputValue="seachConditon2"
            :onchange="setSearchCondition2"
        />
    </div>
</template>
<script>
import {serviceComputed, serviceMethods} from '@/views/Sample/store/helpers';

import SearchInput from './molecules/SearchInput'

export default {
    components:{
        SearchInput
    },
    computed: {
        ...serviceComputed
    },
    methods: {
        ...serviceMethods
    },
}
</script>
<style lang="">
    
</style>