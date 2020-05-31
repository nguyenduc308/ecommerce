<template>
    <div class="product-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="product__title">Shop Bán Chó Mèo Cảnh</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 p-3" 
                v-for="(product , index) in products" 
                :key="index">
                    <ProductItem 
                        v-bind:product="product"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        products(){
            return this.$store.state.products
        }
    },
    components:{
        ProductItem
    }
}
</script>

<style>
.product__title{
    text-align: center;
    font-family: 'Coiny';
    font-weight: 900;
    font-size: 3.5rem;
    color: #de8ebe;
    margin: 60px 0;
}
.div{
    width: 100%;
}
</style>