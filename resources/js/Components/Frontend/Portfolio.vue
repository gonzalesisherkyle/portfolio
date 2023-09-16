<script setup>
defineProps({
    skills: Object,
    projects: Object,
});
</script>

<template>
    <section
        class="bg-light-primary dark:bg-dark-primary pt-20 pb-10 lg:pt-[120px] lg:pb-20"
        id="portfolio"
    >
        <div
            v-motion
            :initial="{
                opacity: 0,
                y: 100,
            }"
            :visible="{
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: '100',
                    delay: 100,
                },
            }"
            class="container mx-auto"
        >
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <div
                        class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20"
                    >
                        <span
                            class="text-accent text-primary mb-2 block text-lg font-semibold"
                        >
                            Portfolio
                        </span>
                        <h2
                            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                        >
                            My latest work
                        </h2>
                    </div>
                </div>
            </div>
            <div class="-mx-4 flex flex-wrap">
                <div
                    v-for="project in projects.data"
                    :key="project.id"
                    class="w-full px-4 md:w-1/2 lg:w-1/3"
                >
                    <div class="mx-auto mb-10 max-w-[370px]">
                        <div class="mb-8 overflow-hidden rounded">
                            <a :href="project.project_url" target="_blank"
                                ><img
                                    :src="project.image"
                                    :alt="project.name"
                                    class="w-full"
                            /></a>
                        </div>
                        <div>
                            <h3>
                                <a
                                    target="_blank"
                                    class="text-gray-600 dark:text-gray-200 hover:text-blue-700 mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                                    {{ project.name }}
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
