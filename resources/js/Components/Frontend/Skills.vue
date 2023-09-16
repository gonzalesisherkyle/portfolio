<script setup>
defineProps({
    skills: Object,
});
</script>

<template>
    <!-- <div class="bg-light-tail-100 dark:bg-dark-navy-500 py-12" id="skills">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-8 md:grid-flow-col">
                <div
                    class="flex items-center justify-evenly"
                    v-for="skill in skills.data"
                    :key="skill.id"
                >
                    <img :src="skill.image" :alt="skill.name" class="lg:h-20" />
                </div>
            </div>
        </div>
    </div> -->
    <div class="bg-light-primary dark:bg-dark-primary py-5">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-3 gap-x-8 gap-y-16 lg:grid-cols-9">
                <div
                    v-for="skill in skills.data"
                    :key="skill.id"
                    class="mx-auto flex max-w-xs flex-col gap-y-4 justify-around"
                >
                    <img :src="skill.image" :alt="skill.name" class="lg:h-20" />
                </div>
            </dl>
        </div>
    </div>
</template>
