<script setup>
import Header from "@/Components/Frontend/Header.vue";
import Footer from "@/Components/Frontend/Footer.vue";
</script>

<style>
.button {
    position: relative;
    display: inline-block;
    margin: 20px;
}

.button a {
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    text-decoration: none;
    background-color: rgb(99 102 241);
    display: block;
    position: relative;
    padding: 20px 40px;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);

    -webkit-box-shadow: inset 0 1px 0 rgb(79 70 229), 0 10px 0 rgb(79 70 229);
    -moz-box-shadow: inset 0 1px 0 rgb(79 70 229), 0 10px 0 rgb(79 70 229);
    box-shadow: inset 0 1px 0 rgb(79 70 229), 0 10px 0 rgb(79 70 229);

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

.button a:active {
    top: 10px;
    background-color: rgb(109 40 217);

    -webkit-box-shadow: inset 0 1px 0 rgb(109 40 217),
        inset 0 -3px 0 rgb(79 70 229);
    -moz-box-shadow: inset 0 1px 0 rgb(109 40 217),
        inset 0 -3pxpx 0 rgb(79 70 229);
    box-shadow: inset 0 1px 0 rgb(109 40 217), inset 0 -3px 0 rgb(79 70 229);
}

.button:after {
    content: "";
    height: 100%;
    width: 103%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2b1800;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

@media (prefers-color-scheme: dark) {
    .button:after {
        background-color: #353839;
    }
}
</style>

<template>
    <div class="bg-light-primary dark:bg-dark-primary">
        <!-- header -->
        <Header />
        <main class="min-h-screen">
            <slot />
        </main>
        <!-- footer -->
        <Footer />
    </div>
</template>
