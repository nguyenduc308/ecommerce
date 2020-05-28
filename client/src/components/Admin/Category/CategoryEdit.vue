<template>
    <div class="category">
        <Control/>
        <div class="content-wrapper">
            <Navbar/>
            <h1>Category Edit</h1>
        </div>
    </div>
</template>

<script>
import Control from '../Control/AdminControl'
import Navbar from '../Navbar/AdminNavbar'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Control,
        Navbar
    }
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
</style>