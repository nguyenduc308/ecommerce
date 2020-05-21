<template>
  <v-form v-model="valid">
        <v-text-field   v-model="userInfo.name" 
                        label="Name" 
                        :rules="[required('name')]" 
                        v-if="hasName"/>
        <v-text-field   v-model="userInfo.email"
                        label="Email"
                        :rules="[required('email'), emailFormat()]"
        />

        <v-text-field   v-model="userInfo.password"
                        label="Password"
                        :type="showPassword ? text : password"
                        :append-icon="showPassword =! showPassword"
                        @click:append="showPassword =! showPassword"
                        counter=true
                        :rules="[required('password'), minLength('password', 8)]"
        />

        <v-btn @click="submitForm(userInfo)" :disabled="!valid"> {{ buttonText }}</v-btn>
  </v-form>
</template>

<script>


export default {
    data() {
        return{
            valid: false,
            showPassword: false,
            userInfo: {
                email: '',
                password: ''
            },
  
        }
    },
    props: ['submidFrom', 'buttonText', 'hasName']
}
</script lang="scss" scoped>

<style>

</style>