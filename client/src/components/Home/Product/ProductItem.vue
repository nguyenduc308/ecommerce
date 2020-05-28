<template>
        <div class="product__item">
            <div class="product__img">
                <a class="product__img-link">
                    <img :src="product.img" alt="" class="product__img-img">
                </a>
                <div class="product__item-modal">
                    <a href="" class="product__item-modal--button">Mua hàng</a>
                </div>
            </div>
            <div class="product__item-info">
                <span class="product__item-info--id">ID:{{product.id}}</span>
                <h3 class="product__item-info--name">
                    <a href="">{{product.name}}</a>
                </h3>
                <span class="product__item-info--price">
                    {{product.price}}
                </span>
            </div>
        </div>
</template>

<script>

export default {
    props :{
        product:Object
    },
    data() {
        return {
        }
    },
    
}
</script>

<style>
.product__img{
    position: relative;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    transition: all 0.3s ease-out 0s;
}
.product__img-link{
    display: block;
    position: relative;
    overflow: hidden;
    
}
.product__img-link::before {
    background: rgba(255, 255, 255, 0.7);
    opacity: 0;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    transition: all 0.3s ease-out 0s;
}
.product__img:hover .product__img-link::before {
    opacity: 1;
}
.product__img-img{
    transition: all 0.3s ease-out 0s;
    width: 100%;
    height: 250px;
}
.product__img:hover .product__img-img{
    transform: scale(1.2);
}
.product__item-modal{
    position: absolute;
    height: 100px;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    z-index: 12;
    transition: all 0.1s ease-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
}
.product__item-modal--button{
    color: #ffffff;
    background-color:#de8ebe ;
    padding: 10px 20px;
    font-size: 1.8rem;
    border: none;
    outline: none;
    border-radius: 6px;
    display: block;
    text-decoration: none;
}
.product__item-modal--button:hover{
    text-decoration: none;
    color: #ffffff;
}
.product__img:hover .product__item-modal {
    visibility: visible;
}
.product__item-modal--button:hover{
    background-color: #ca76aa;
}
.product__item{ 
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.product__item-info{
    text-align: left;
    padding:10px;
}
.product__item-info--id{
    color: #de8ebe;
    font-size: 1.4rem;
    font-weight: bold;
    display: inline-block;
    margin: 8px 0;
}
.product__item-info--name a{
    color: #333333;
    font-size: 2.5rem;
    font-family: 'Coiny';
    display: inline-block;
    margin: 10px 0;
    transition: 0.5s linear;
}
.product__item-info--name a:hover{
    color: #de8ebe;
    text-decoration: none;
}
.product__item-info--price{
    color: #de8ebe;
    font-size: 1.8rem;
    font-weight: bold;
}

</style>