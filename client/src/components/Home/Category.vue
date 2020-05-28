<template>
    <div class="category-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="category">
                        <a href="" class="category-link">Trang chủ</a>
                        <span class="category-title"> Danh mục sản phẩm</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.category-wrapper{
    margin-top: 30px ;
}
.category{
    background: #ededed;
    padding: 11px 20px;
    border-radius: 6px;
    width: 100%;
}
.category-link{
    font-size: 1.6rem;
    color: #555555;
    padding: 10px;
}

.category-link:hover {
    text-decoration: none;
    color: #de8ebe;
}
.category-title{
    display: inline-block;
    font-size: 1.6rem;
    color: #333333;
}
</style>