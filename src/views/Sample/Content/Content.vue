<template lang="">
    <div>
        <sui-divider/>
        <search-bar/>
        <sui-divider/>
        <sui-segment>
        <Table/>
        </sui-segment>

    </div>
</template>
<script>
import SearchBar from './Search/SearchBar'
import Table from './Table/Table'
export default {
    components:{
        SearchBar,
        Table
    }

}
</script>
<style lang="">
    
</style>