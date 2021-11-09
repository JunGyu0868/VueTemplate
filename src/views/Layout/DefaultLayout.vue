<template>
    <div>
        <div class="side-bar">
            <div class="side-bar__logo">
                Logo
            </div>
            <div class="side-bar__categories">
                <div class="side-bar__categories category" @click="selectCategory(category)" v-for="category in categories" :key="category">
                    {{category}}
                    <div v-if="currentCategory && category === currentCategory">
                        <div class="sub-category" @click="selectSubCategory(subCategory)" v-for="subCategory in subCategories" :key="subCategory">
                            {{subCategory}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            categories:[
                '대카테고리1', '대카테고리2','대카테고리3'
            ],
            subCategories:[
                '중카테고리1','중카테고리2','중카테고리3','중카테고리4'
            ],
                    currentCategory:'',
                    currentSubCategory:''
        }
    },
    methods: {
        selectCategory(data){
            this.currentCategory = data;
        },
        selectSubCategory(data){
            this.currentSubCategory = data;
            // this.$router.push('/somthingURL')
        },
    }
    
}
</script>
<style lang="scss">
.side-bar{
    height: 100%;
    width: 200px;
    background-color: #555;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 0;

    &__logo {
        width: 100%;
        height: 100px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: white;
    }

    &__categories {
        width: 100%;
        // height: 100%;
        display: table;

        & .category {
            user-select: none;
            cursor: pointer;

            height: 100px;
            width: 100%;
            background-color: gray;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            line-height: 100px;

            // border: 1px solid black;
            // margin-bottom: 10px;
        }

        & .sub-category {
            user-select: none;
            cursor: pointer;

            height: 50px;
            width: 100%;
            background-color: rgb(212, 212, 212);
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            line-height: 50px;
        }


    }
}
.content {
    position: fixed;
    left: 200px;
    width:100%;
    height: 100%;
    margin: 5px;
}

</style>
