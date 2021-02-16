<template>
    <header class="navbar">
        <div>
            <h1 class="navbarText">F-DMCA</h1>
            <p class="LoginStyle">Login</p>
        </div>
    </header>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .navbarText {
        border: 2px solid #000;
        font-family: monospace;
        color:#000;
        font-size: 60px;
        width: 200px;
    }
    .LoginStyle {
        font-size: 20px;
        width: 100px;
        border: 1px solid #000;
        float: right;
    }
</style>