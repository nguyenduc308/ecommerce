<template>
    <div class="category">
        <Control/>
        <div class="content-wrapper">
            <Navbar/>
            <div class="form-create">
                <button 
                class="btn btn-success btn-create"
                @click="openModalCreate"
                >
                Thêm mới
                </button>
            </div>
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
                        <tr v-for="(category,index) in listProduct " :key="category.name">
                        <th scope="row">{{index +1}}</th>
                            <td>{{category.name}}</td>
                            <td>{{category.slug}}</td>
                            <td>
                                <button 
                                class="btn btn-primary"
                                @click="openModalEdit(category)"
                                >Sửa
                                </button>
                                <button class="btn btn-danger"
                                @click="deleteCategory(category)"
                                >Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal-create" v-if="modalCreate">
            <span class="closeModalCreate" @click="closeModalCreate">X</span>
            <input 
            type="text" 
            class="category__input" 
            placeholder="Name Category"
            v-model="nameCategory"
            >
            <button 
            class="btn btn-primary"
            @click="createCategory"
            >
            Tạo mới
            </button>
        </div>
        <div class="modal-edit" v-if="modalEdit">
            <span class="closeModalCreate" @click="closeModalEdit">X</span>
            <input 
            type="text" 
            class="category__input"
            v-model="nameCategoryEdit"
            placeholder="Name Category"
            >
            <button 
            class="btn btn-primary"
            @click="EditCategory"
            >
            Sửa Category
            </button>
        </div>
        <ModalLoader v-if="loading"/>
    </div>
</template>

<script>
import Control from '../Control/AdminControl'
import Navbar from '../Navbar/AdminNavbar'
import ModalLoader from '../../Modal/ModalLoader'
import axios from 'axios'
import Vue from 'vue'
export default {
    data() {
        return {
            nameCategory:'',
            nameCategoryEdit:'',
            modalCreate:false,
            modalEdit:false,
            loading:false,
            category :null
        }
    },
    components:{
        Control,
        Navbar,
        ModalLoader
    },
    computed: {
        listProduct() {
            return this.$store.state.listCategory
        }
    },
    methods: {
        getListCategory(){
            this.loading= true
            const url ='http://localhost:8000/api/categories/'
            axios.get(url)
            .then((res) =>{
                this.$store.dispatch('GET_CATEGORY', res.data.categories)
                this.loading = false
            })
            .catch((err) =>{
                this.loading = false
            })
            
        },
        createCategory() {
            this.loading= true
            const payload ={
                name:this.nameCategory
            }
            this.$store.dispatch('CREATE_CATEGORY',payload)
                .then((res) =>{
                    this.loading = false
                    this.closeModalCreate()
                    this.getListCategory()
                    this.nameCategory =''
                })
                .catch((err) =>{
                    this.loading= false
                })
        },
        deleteCategory(category) {
            this.loading= true
            const payload = category
            this.$store.dispatch('DELETE_CATEGORY',payload )
                .then((res) =>{
                    this.loading = false
                    this.getListCategory()                  
                })
                .catch((err) =>{
                    this.loading = false
                })
        },
        EditCategory(){
            const payload = this.categoryEdit
            this.$store.dispatch('EDIT_CATEGORY',payload)
                .then((res) =>{
                    this.getListCategory()
                    console.log(res);
                })
                .catch((err) =>{
                    console.log(err.response);
                })
        },
        openModalCreate(){
            this.modalCreate = true
        },
        closeModalCreate(){
            this.modalCreate = false
        },
        openModalEdit(category){
            this.nameCategoryEdit = category.name
            this.categoryEdit = category
            this.modalEdit= true
        },
        closeModalEdit(){
            this.modalEdit= false
        }
    },
    created() {
        this.getListCategory()
    },
}
</script>

<style>
.category{
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
}
.content-wrapper{
    width: 100%;
    height:auto;
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
btn.btn-create{
    margin-right: 40px;
}
.form-create{
    width: 100%;
    margin-top: 20px;
    padding-left: 30px;
}
.modal-create,
.modal-edit
{
    position: absolute;
    width: 400px;
    height: auto;
    background: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 30px;
    justify-content: center;
}
.category__input{
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 1.8rem;
    padding: 8px 12px;
    margin-bottom: 20px;
}
.closeModalCreate{
    display: block;
    font-size: 2rem;
    color: white;
    margin-bottom: 30px;
    width: 100%;
    text-align: right;
    cursor: pointer;
    
}
</style>