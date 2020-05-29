<template>
    <!-- main -->
    <div class="center-container">
        <!--header-->
        <div class="header-w3l">
            <h1>wecome </h1>
        </div>
        <!--//header-->
        <div class="main-content-agile">
            <div class="sub-main-w3">	
                <div class="wthree-pro">
                    <h2>Login here</h2>
                </div>
                <form @submit.prevent="login">
                    <div class="pom-agile">
                        <input 
                            v-model="user.email"
                            placeholder="E-mail" 
                            class="user"
                            type="email" 
                            :disabled="isActive"
                        >
                        <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                    </div>
                    <div class="pom-agile">
                        <input  
                        v-model="user.password"
                            placeholder="Password" 
                            class="pass"
                            type="password" 
                            :disabled="isActive"
                        >
                        <span class="icon2"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                    </div>
                    <div class="box-error">
                        <p
                            v-show="errorMessage"
                            class="text-danger text-error"
                        >
                            {{ errorMessage }}
                        </p>
                    </div>
                    <div class="sub-w3l">
                        <div class="login-register">
                            <h6>
                            <nuxt-link
                                to="/forgot-password"
                                class="btn-fogot"
                            >Fogot password?</nuxt-link></h6>
                            <h6>
                                <nuxt-link 
                                    to="/register"
                                    class="btn-fogot">
                                    Sign up
                                </nuxt-link>
                            </h6>
                        </div>
                        <div class="right-w3l">
                            <button type="submit" >
                                <span v-if="!isActive">Sign in</span>
                                <img v-else src="../../assets/image/loading.svg">
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!--//main-->
        <!--footer-->
        <div class="footer">
            <p>&copy; 2020 Login Form | Design by <a href="http://w3layouts.com">Bii</a></p>
        </div>
        <!--//footer-->
    </div>
</template>

<script>

import { mapActions } from "vuex";
import { log } from 'util';
export default {
    layout: 'blank',
    middleware: ['non-authentication'],
    data() {
        return{
            user: {
                email: '',
                pasword: ''
            },
            errorMessage: '',
            isActive: false,
        }
    },

    methods: {
        ...mapActions('login', ['signin']),

        async login() {
            this.errorMessage='';
            this.isActive=true;
            if(!this.validateEmail()){
                this.isActive=false;
                return;
            }
            if(!this.validatePassword()){
                this.isActive=false;
                return;
            }

            const data = await this.signin(this.user).catch(err => {
                this.errorMessage = err.message;
                this.isActive=false;
                return false;
            });

            if(data){
                this.$router.push('/home');
            }
        },

        validateEmail() {
            if(!this.user.email) {
                this.errorMessage = 'The email is required.';
                return false;
            }
            else{
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
                if (!regex.test(this.user.email)) {
                    this.errorMessage = 'Must be a  valid email.';
                    return false;
                }
                else{
                    this.errorMessage = '';
                    return true;
                }
            }
        },

        validatePassword() {
            if(!this.user.password){
                this.errorMessage = 'Password is required.'
                return false;
            }
            if(this.user.password.length <6 || this.user.email.length > 20) {
                this.errorMessage = 'Must be at least 6 and maximun 20 character.';
                return false;
            }
            else{
                this.errorMessage = '';
                return true;
            }
        }
    }
}
</script>
