<template>
    <div class="wrapper-register">
        <div class="register">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12  p-0">
                    <div class="register-img">
                        <img src="../../assets/img/backlogin.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="form-register--wrapper">
                        <div class="form-register">
                            <img class="form-register__logo" src="../../assets/img/logo.png" alt="">
                            <h3 class="form-register__title">Welcome back</h3>
                            <router-link to="/register" class="form-register__link">New to Hepro? Sign up</router-link>>
                            <div class="form-group">
                                <input 
                                class="form-group__input form-control" 
                                type="email" 
                                placeholder="Your email address"
                                v-model.trim="$v.email.$model"
                                :class="{
                                    'is-invalid' : $v.email.$error,
                                    'is-valid' : !$v.email.$invalid
                                }"
                                >
                                
                            </div>
                            <div class="form-group">
                                <input 
                                class="form-group__input" 
                                type="password"
                                placeholder="Your password"
                                v-model="password"
                                >
                            </div>
                            <div v-if="error" class="alert alert-danger alert-dismissible fade show">
                                {{error}}
                            </div>
                            <button 
                            v-if="!modalLogin"
                            class="btn-register"
                            @click="login"
                            >Login
                            </button>
                            <button v-if="modalLogin" class="btn btn-primary btn-loading">
                                <span class="spinner-border spinner-border-sm spinner-text "></span>
                            Loading..
                            </button>
                            <span class="register-or">OR</span>
                            <button class="btn-connect__facebook">Connect with Facebook</button>
                            <button class="btn-connect__google">Connect with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { required , minLength , sameAs , isUnique , email} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            email:'',
            password:'',
            modalLogin:false,
            error:''
        }
    },
    validations :{
        password:{
            required,
            minLength: minLength(6)
        },
        email:{
            required,
            email,
            isUnique(value){
                if(value === '') return true
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return new Promise ((resolve , rejects) =>{
                    setTimeout(() =>{
                        resolve(re.test(value))
                    },350 + Math.random() * 300)
                })
            }
        }
    },
    methods: {
        login(){
            this.modalLogin =true
            this.$v.$touch()
            if(this.$v.$invalid){
                this.submitStatus = 'ERROR'
                this.modalLogin= false
            }
            else{
                this.submitStatus = 'OK'
                const payload = {
                    email:this.email,
                    password:this.password
                }
                this.$store.dispatch('LOGIN', payload)
                .then((response) =>{
                    localStorage.setItem('token', response.data.token)
                    this.modalLogin = false
                    this.$router.push('/')
                })
                .catch((error) =>{
                    this.modalLogin = false
                    this.error = error.response.data.error
                })
            }
        }
    },
}
</script>

<style>
.wrapper-register{
    box-sizing: border-box;
    position: relative;
    height: 100vh;
}
.register{
    width: 100%;
    height: 100vh;
}
.register-img{
    width: 100%;
    height: 100vh;
}
.register-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.form-register--wrapper{
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-register{
    width: 500px;
    height: 100vh;
    text-align: center;
    padding: 80px 0;
}
.form-register__title{
    font-size: 4rem;
    margin: 20px 0;
}
.form-register__link{
    font-size: 1.8rem;
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
}
.form-register__link:hover{
    color: seagreen;
    text-decoration: none;
}
.form-group__input{
    height: 50px;
    background-color: #ffffff;
    color: #080a3c;
    border: none;
    transition: 0.5s;
    outline: none;
    width: 100%;
    box-shadow: 0px 5px 28.5px 1.5px rgba(149, 152, 200, 0.2) ;
    border-radius: 5px;
    font-size: 1.6rem;
    padding: 0px 20px;
    margin: 5px 0;
}
.btn-register{
    width: 100%;
    height: 50px;
    box-shadow: 0px 5px 28.5px 1.5px rgba(255, 97, 47, 0.2);
    background-color: #ff612f;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.8rem;
}
.btn-register:hover{
    background-color: seagreen;
    transition: 0.5s;
}
.register-or{
    font-size: 1.6rem;
    margin: 20px 0;
    display: block;
}
.btn-connect__facebook,
.btn-connect__google
{
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 1.8rem;
    transition: 0.5s;
    display: block;
    border-radius: 5px;
}
.btn-connect__facebook{
    border: 1px solid #3b5998;
    color: #3b5998;
}
.btn-connect__facebook:hover{
    background-color: #3b5998;
    color: white;
}
.btn-connect__google{
    margin-top: 10px;
    border:1px solid #EA4335;
    color: #EA4335;
}
.btn-connect__google:hover{
    color: white;
    background-color: #EA4335;
}
.btn-loading{
    width: 100%;
    height: 50px;
    box-shadow: 0px 5px 28.5px 1.5px rgba(255, 97, 47, 0.2);
    background-color: #ff612f;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.8rem;
}
.spinner-text{
    font-size: 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
    
    display: inline-block;
    margin-bottom: 3px;
}
</style>