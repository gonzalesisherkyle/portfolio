<script setup>
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
    useMouseInElement(target);

const cardTransform = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (
        MAX_ROTATION / 2 -
        (elementY.value / elementHeight.value) * MAX_ROTATION
    ).toFixed(2); // handles x-axis

    const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION -
        MAX_ROTATION / 2
    ).toFixed(2); // handles y-axis

    return isOutside.value
        ? ""
        : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>
<style></style>
<template>
    <section
        id="about"
        class="bg-light-primary dark:bg-dark-primary overflow-hidden pt-12 pb-12 lg:pt-[90px] lg:pb-[90px]"
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
            }"
            class="container mx-auto"
        >
            <div class="-mx-4 flex flex-wrap items-center justify-between">
                <div class="w-full px-4 lg:w-6/12">
                    <div class="-mx-3 flex items-center sm:-mx-4">
                        <div class="w-full px-3 sm:px-4 xl:w-1/2">
                            <div class="py-3 sm:py-4">
                                <img
                                    src="/storage/images/1.jpg"
                                    alt=""
                                    class="w-full rounded-2xl"
                                />
                            </div>
                            <div class="py-3 sm:py-4">
                                <img
                                    src="/storage/images/2.jpg"
                                    alt=""
                                    class="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:px-4 xl:w-1/2">
                            <div class="relative z-10 my-4">
                                <img
                                    src="/storage/images/3.jpg"
                                    alt=""
                                    class="w-full rounded-2xl"
                                />
                                <span
                                    class="absolute -right-7 -bottom-7 z-[-1]"
                                >
                                    <svg
                                        width="134"
                                        height="106"
                                        viewBox="0 0 134 106"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="1.66667"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 31 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3334"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 60.3334 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 103 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="104"
                                            r="1.66667"
                                            transform="rotate(-90 132 104)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 89.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 89.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 89.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="89.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 89.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 89.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 89.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 89.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 89.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 103 89.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="89.3338"
                                            r="1.66667"
                                            transform="rotate(-90 132 89.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="74.6673"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 74.6673)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 31.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 31.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 31 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 31 31.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="31.0003"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 31.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 30.9998)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 30.9998)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 30.9998)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 30.9998)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 103 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 103 30.9998)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="74.6668"
                                            r="1.66667"
                                            transform="rotate(-90 132 74.6668)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="30.9998"
                                            r="1.66667"
                                            transform="rotate(-90 132 30.9998)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 31 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 103 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 103 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="60.0003"
                                            r="1.66667"
                                            transform="rotate(-90 132 60.0003)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="16.3333"
                                            r="1.66667"
                                            transform="rotate(-90 132 16.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 45.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="1.66667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 1.66667 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 45.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="16.3333"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 16.3333 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 31 45.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="31"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 31 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="45.3333"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 45.3333)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="45.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 45.6667 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 45.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="60.3333"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 60.3333 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 45.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="88.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 88.6667 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 45.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="117.667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 117.667 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 45.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="74.6667"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 74.6667 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 103 45.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="103"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 103 1.66683)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="45.3338"
                                            r="1.66667"
                                            transform="rotate(-90 132 45.3338)"
                                            fill="#3F51B5"
                                        />
                                        <circle
                                            cx="132"
                                            cy="1.66683"
                                            r="1.66667"
                                            transform="rotate(-90 132 1.66683)"
                                            fill="#3F51B5"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div class="mt-10 lg:mt-0">
                        <span
                            class="text-accent mb-2 block text-lg font-semibold"
                        >
                            Why Choose Me?
                        </span>
                        <h2
                            class="text-dark mb-8 text-3xl font-bold sm:text-4xl"
                        >
                            Web Developer in the making.
                        </h2>
                        <p class="text-black dark:text-white mb-8 text-base">
                            What distinguishes me is not just my technical
                            expertise in PHP and basic understanding of
                            JavaScript, but also my commitment to collaborative
                            working.
                        </p>
                        <p class="text-black dark:text-white mb-12 text-base">
                            During my academic career, for example, I played a
                            big part in team projects, relying on excellent
                            communication and motivation to accomplish
                            successful outcomes. I was the lead programmer on
                            our capstone project, which I consider a remarkable
                            accomplishment.
                        </p>
                        <div class="button">
                            <a
                                href="/storage/files/CV.pdf"
                                class="bg-indigo-500 inline-flex items-center rounded-lg py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
                                target="_blank"
                                download
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
