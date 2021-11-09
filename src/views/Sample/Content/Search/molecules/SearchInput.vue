<template lang="">
    <div style="display:flex; margin: 10px; align-items: center;">
        <div style="width:100px" v-if="label">
            <span>{{label}}</span>
        </div>
        <sui-input :value="inputValue" @input="onchange"/>
    </div>
</template>
<script>
export default {
    props:{
        label: String,
        inputValue: String,
        onchange: Function,
    }
    
}
</script>
<style lang="">
    
</style>