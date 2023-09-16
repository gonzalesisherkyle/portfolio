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
<template>
    <div
        v-motion
        :initial="{
            opacity: 0,
            y: 50,
        }"
        :enter="{
            opacity: 1,
            y: 0,
        }"
        class="relative bg-light-primary dark:bg-dark-primary pt-[110px] pb-[110px] lg:pt-[150px]"
        id="home"
    >
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4 lg:w-5/12">
                    <div class="hero-content">
                        <p class="text-lg text-accent tex-md mb-[10px]">
                            Hey, I'm Isher! 👋
                        </p>
                        <h1
                            class="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                        >
                            Web Development <br />
                            is my <br />
                            PASSION.
                        </h1>
                        <p
                            class="text-black dark:text-white mb-8 max-w-[480px] text-base"
                        >
                            As a recent graduate with a Bachelor's degree in
                            Information Technology and a passion for web
                            development, I'm excited to kick start my career as
                            a Web developer.
                        </p>
                        <ul class="flex flex-wrap items-centers">
                            <li>
                                <div class="button">
                                    <a
                                        href="#contact"
                                        class="bg-indigo-500 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-black sm:px-10 lg:px-8 xl:px-10"
                                    >
                                        Contact Me
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="socials pt-10">
                        <div class="flex items-center justify-evenly">
                            <div class="mr-4 w-auto py-3">
                                <a
                                    href="https://www.facebook.com/aysiyer/"
                                    target="_blank"
                                >
                                    <img
                                        src="../../../../public/storage/images/social-icons/facebook.svg"
                                        alt="facebook"
                                        class="h-20"
                                    />
                                </a>
                            </div>
                            <div class="mr-4 w-auto py-3">
                                <a
                                    href="https://www.linkedin.com/in/ikmgonzales/"
                                    target="_blank"
                                >
                                    <img
                                        src="../../../../public/storage/images/social-icons/linkedin.svg"
                                        alt="linedin"
                                        class="h-20"
                                    />
                                </a>
                            </div>
                            <div class="mr-4 w-auto py-3">
                                <a
                                    href="https://github.com/gonzalesisherkyle"
                                    target="_blank"
                                >
                                    <img
                                        src="../../../../public/storage/images/social-icons/github.svg"
                                        alt="github"
                                        class="h-20"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden px-4 lg:block lg:w-1/12"></div>
                <div class="w-full px-4 lg:w-6/12">
                    <div class="lg:ml-auto lg:text-right">
                        <div class="relative z-10 inline-block pt-11 lg:pt-0">
                            <div
                                class="card"
                                ref="target"
                                :style="{
                                    transform: cardTransform,
                                    transition: 'transform 0.25s ease-out',
                                }"
                            >
                                <img
                                    src="../../../../public/storage/images/UI-UX.png"
                                    alt="hero"
                                    class="max-w-full lg:ml-auto"
                                />
                            </div>
                            <span class="absolute -right-8 -top-0 z-[-1]">
                                <svg
                                    width="93"
                                    height="93"
                                    viewBox="0 0 93 93"
                                    fill="none"
                                >
                                    <circle
                                        cx="2.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                            <span class="absolute -left-8 -bottom-8 z-[-1]">
                                <svg
                                    width="93"
                                    height="93"
                                    viewBox="0 0 93 93"
                                    fill="none"
                                >
                                    <circle
                                        cx="2.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="24.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="46.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="24.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="46.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="68.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="68.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                    <circle
                                        cx="90.5"
                                        cy="90.5"
                                        r="2.5"
                                        fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
