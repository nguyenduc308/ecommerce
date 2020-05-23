<template>
    <div class="wrapper-register">
        <div class="register">
            <div class="row m-0">
                <div class="col-lg-6 col-md-12  p-0">
                    <div class="register-img">
                        <img src="../../assets/img/backRegister.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="form-register--wrapper">
                        <div class="form-register">
                            <img class="form-register__logo" src="../../assets/img/logo.png" alt="">
                            <h3 class="form-register__title">Open up your Strax Account now</h3>
                            <router-link to="/login" class="form-register__link">Already signed up? Log in</router-link>
                            <!-- Email -->
                            <div class="form-group">
                                <input 
                                class="form-group__input form-control " 
                                type="email" 
                                placeholder="Your email address"
                                v-model.trim="$v.email.$model"
                                :class="{
                                    'is-invalid' : $v.email.$error,
                                    'is-valid' : !$v.email.$invalid
                                }"
                                >
                            </div>
                            <!-- Password -->
                            <div class="form-group">
                                <input
                                class="form-group__input form-control" 
                                type="password" 
                                placeholder="Create a password"
                                v-model.trim="$v.password.$model"
                                :class="{'is-invalid' : $v.password.$error,
                                        'is-valid'  : !$v.password.$invalid
                                    }
                                "
                                >
                                <div class="valid-feedback">
                                    Your password is  valid !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.password.required">Password is required</span>
                                    <span 
                                    v-if="!$v.password.minLength">
                                    Password must have at least {{ $v.password.$params.minLength.min }} letters.
                                    </span>
                                </div>
                            </div>
                            <!-- Confỉrm Pasword  -->
                            <div class="form-group">
                                <input 
                                class="form-group__input form-control" 
                                type="password" 
                                placeholder="Confirm a password"
                                v-model.trim="$v.confirmPassword.$model"
                                :class="{'is-invalid' : $v.confirmPassword.$error,
                                        'is-valid'  : (password !== '') ? !$v.confirmPassword.$invalid : ''}"
                                >
                                <div class="valid-feedback">
                                    Your password is  valid !
                                </div>
                                <div class="invalid-feedback">
                                    <span v-if="!$v.confirmPassword.sameAsPassword">Passwords must be identical.</span>
                                </div>
                            </div>
                            <button class="btn-register"
                            @click="postDataRegister"
                            >Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="modalRegister" class="wrapper-modal">
            <ModalLoader/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { required , minLength , sameAs , isUnique , email} from 'vuelidate/lib/validators'
import ModalLoader from '../Modal/ModalLoader'
import { resolve } from 'url'
import { rejects } from 'assert'
export default {
    data() {
        return {
            email:'',
            password:'',
            confirmPassword:'',
            modalRegister:false
        }
    },
    validations :{
        password:{
            required,
            minLength: minLength(6)
        },
        confirmPassword:{
            sameAsPassword: sameAs('password')
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
    components :{
        ModalLoader
    },
    methods: {
        postDataRegister(){
            // this.modalRegister = true
            this.$v.$touch()
            if(this.$v.$invalid){
                this.submitStatus = 'ERROR'
            }
            else{
                this.submitStatus = 'OK'
                 const payload = {
                     email: this.email,
                     password : this.password,
                     confirmPassword :this.confirmPassword
                 }
                // this.$store.dispatch('REGISTER',payload)
                //     .then((response) =>{
                //         this.modalRegister = false
                //         // this.$router.push('/login')
                //         console.log(response);
                //     })
                //     .catch((error) =>{
                //         this.modalRegister = false
                //         console.log(error);
                //     })
                    // return axios.post('http://localhost:8000/api/auth/register',payload)
                    // .catch((err) =>{
                    //     console.log(err);
                        
                    // })
            }
        }
    }
}
</script>

<style>
.wrapper-register{
    box-sizing: border-box;
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
    height: 45px;
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
    height: 45px;
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
.valid-feedback,
.invalid-feedback
{
    font-size: 1.4rem;
    text-align: left;
}

</style>