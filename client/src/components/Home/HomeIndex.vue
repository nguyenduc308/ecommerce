<template>
    <div class="home">
        <Header/>
        <Category/>
        <Product/>
    </div>
</template>

<script>
import Header from '../Home/Header'
import Category from '../Home/Category'
import Product from '../Home/Product/Product'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Header,
        Category,
        Product
    },
    methods: {
        
    },
}
</script>

<style>

</style>