<template>
    <div class="control-wrappwer"
    :class="{'width__mobile' : isMobile}"
    >
        <div class="control__Logo">
            <h1>ADMIN</h1>
        </div>
        <ul class="control__navbar-list">
            <li class="control__navbar-item">
                <router-link class="control__navbar-link" to="">
                    <i class="fa fa-adjust"></i>
                    Trang Tổng Quan
                </router-link>
            </li>
            <li class="control__navbar-item">
                <router-link class="control__navbar-link" to="/admin/category">
                    <i class="fa fa-adjust"></i>
                    Category
                </router-link>
            </li>
            <!-- <li class="control__navbar-item">
                <router-link class="control__navbar-link" to="/admin/category/edit">
                    <i class="fa fa-adjust"></i>
                    Sản phẩm
                </router-link>
            </li>
            <li class="control__navbar-item">
                <router-link class="control__navbar-link" to="">
                    <i class="fa fa-adjust"></i>
                    Danh sách danh mục
                </router-link>
            </li>
            <li class="control__navbar-item">
                <router-link class="control__navbar-link" to="">
                    <i class="fa fa-adjust"></i>
                    Quản lý đơn hành
                </router-link>
            </li>
            <li class="control__navbar-item">
                <router-link class="control__navbar-link" to="">
                    <i class="fa fa-adjust"></i>
                    Quản lý User
                </router-link>
            </li> -->
        </ul>
        <div class="control__button">
            <button class="control__button-left" @click="setWidthControl">
                <i class="fa fa-angle-left"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile:false
        }
    },
    methods: {
        setWidthControl(){
            this.isMobile= ! this.isMobile
        }
    },
}
</script>

<style>
.control-wrappwer{
    width: 25rem;
    background-color: #4e73df;
    /* background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%); */
    height: 100vh;
}
.control__Logo{
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    border-bottom: 1px solid #c5c5c5;
}
.control__navbar-link{
    display: block;
    color:rgba(255,255,255,.8);
    font-size: 1.4rem;
    padding: 22px 20px;
    font-weight: 400;
    border-bottom: 1px solid #c5c5c5;
}
.control__navbar-link:hover{
    color: white;
    text-decoration: none;
}
.control__navbar-link i{
    margin-right: 10px;
}
.control__button{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
}
.control__button-left{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: rgba(255,255,255,.2);
    
}
.control__button-left:hover{
    background-color: rgba(255,255,255,.4);
}
.control__button-left i{
    color: rgba(255,255,255,.8);
    font-size: 1.8rem;
}
.width__mobile{
    width: 14rem;
}
</style>