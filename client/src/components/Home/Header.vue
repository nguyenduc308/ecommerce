<template>
    <div class="header-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 p-2">
                    <div class="header__logo">
                        <img src="../../assets/img/logoHome.png" alt="">
                    </div>
                </div>
                <div class="col-lg-9 p-2">
                    <div class="header__navbar">
                        <ul class="header__navbar-list">
                            <li class="header__navbar-item">
                                <a href="" class="header__navbar-link active">Trang Chủ</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="" class="header__navbar-link">Thú Cưng</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="" class="header__navbar-link">Dịch Vụ</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="" class="header__navbar-link">Phụ Kiện</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="" class="header__navbar-link">Giới thiệu</a>
                            </li>
                            <li class="header__navbar-item">
                                <a href="" class="header__navbar-link">Liên hệ</a>
                            </li>
                        </ul>
                        <div class="header__navbar-cart">
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header__banner">
                                <img src="../../assets/img/banner.png" alt="">
                            </div>
                            <div class="header__search">
                                <button class="header__search-button">
                                    <i class="fa fa-search"></i>
                                </button>
                                <input class="header__search-input" type="text" placeholder="Tìm kiếm...">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '../../assets/img/logoHome.png'
export default {

}
</script>

<style>
:root {
    --color-primary : #de8ebe
}
.header-wrapper{
    width: 100%;
    height: auto;
    border-bottom: 1px solid #de8ebe;
    padding: 10px 0;
    padding-bottom: 30px;
}
.header__logo{
    width: 80%;
    display: flex;
    align-items: center;
}
.header__logo img {
    width: 100%;
    
}
.header__navbar{
    display: flex;
    height: 40px;
    margin-bottom: 30px;
}
.header__navbar-list{
    flex: 1;
}
.header__navbar-item{
    display: inline-block;
    list-style: none;
}
.header__navbar-link{
    text-decoration: none;
    font-size: 1.6rem;
    color: #333333;
    font-family: dosis;
    padding: 0px 15px;
    line-height: 40px;
    height: 40px;
    display: inline-block;
    font-weight: 900;
    border-radius: 6px;
    transition: all 0.4 linear;
    text-transform: uppercase;
}
.header__navbar-link.active{
    background-color: #de8ebe;
    color: #ffffff;
}
.header__navbar-link.active:hover{
    color:#ffffff
}
.header__navbar-link:hover{
    
    text-decoration: none;
    color: #de8ebe;
}

.item{
    width: 100%;
    height: 500px;
    background-color: #de8ebe;

}
.header__banner{
    width: 100%;
}
.header__banner img{
    height: 110px;
    width: 100%;
    border-radius: 6px;
}
.header__search{
    width: 100%;
    margin-top: 40px;
    height: 40px
}
.header__search-input{
    width: 50%;
    float: right;
    height: 40px;
    outline: none;
    border: none;
    background: transparent;
    border:  1px solid #cacaca;
    padding: 0 20px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-size: 1.6rem;
}
.header__search-button{
    float: right;
    height: 40px;
    width: 50px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0 10px;
    outline: none;
    background-color: #333333;
    border: none;
    
}
.header__search-button i{
    color: white;
    font-size: 1.4rem;
}
</style>