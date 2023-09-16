<script setup>
import FrontendLayout from "@/Layouts/Frontend.vue";
import Hero from "@/Components/Frontend/Hero.vue";
import About from "@/Components/Frontend/About.vue";
import Skills from "@/Components/Frontend/Skills.vue";
import Portfolio from "@/Components/Frontend/Portfolio.vue";
import ContactMe from "@/Components/Frontend/ContactMe.vue";
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    skills: Object,
    projects: Object,
});
</script>

<template>
    <Head title="Welcome" />
    <FrontendLayout>
        <!-- Hero Primary -->
        <Hero />
        <!-- About Secondary -->
        <About />
        <!-- Skills tail-100 -->
        <Skills :skills="skills" />
        <!-- Projects Primary -->
        <Portfolio :skills="skills" :projects="projects" />
        <!-- Contact Primary -->
        <ContactMe />
    </FrontendLayout>
</template>
