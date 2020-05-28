<template>
    <div class="category">
        <Control/>
        <div class="content-wrapper">
            <Navbar/>
            <div class="tablet-wrapper">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <button class="btn btn-primary">Sửa</button>
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <button class="btn btn-primary">Sửa</button>
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <button class="btn btn-primary">Sửa</button>
                                <button class="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Control from '../Control/AdminControl'
import Navbar from '../Navbar/AdminNavbar'
import axios from 'axios'
import Vue from 'vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Control,
        Navbar
    },
    methods: {
        callApi(){
            
        }
    },
    created() {
        this.callApi()
    },
}
</script>

<style>
.category{
    display: flex;
    align-content: center;
    justify-content: center;
}
.content-wrapper{
    width: 100%;
    height: 100vh;
}
.tablet-wrapper{
    padding: 20px 30px;
}
table{
    font-size: 1.8rem;
}
button.btn{
    font-size: 1.8rem;
}
</style>