<template>
    <Head title="Edit Project" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit Project</h2>
        </template>

        <div class="py-12">
            <div class="max-w-md mx-auto sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900">
                <form class="p-4" @submit.prevent="submit">
                    <div class="mt-2">
                        <InputLabel for="skill_id" value="SKill" />
                        <select 
                            v-model="form.skill_id" 
                            id="skill_id" 
                            name="skill_id"
                            class="
                                mt-1
                                block
                                w-full
                                pl-3
                                pr-10
                                py-2
                                text-base
                                border-gray-300
                                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                                sm:text-sm
                                rounded-md
                            "
                        >
                            <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="$page.props.errors.skill_id" />
                    </div>

                    <div class="mt-2">
                        <InputLabel for="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.name"
                        />
                        <InputError class="mt-2" :message="$page.props.errors.name" />
                    </div>

                    <div class="mt-2">
                        <InputLabel for="project_url" value="URL" />
                        <TextInput
                            id="project_url"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.project_url"
                        />
                        <InputError class="mt-2" :message="$page.props.errors.project_url" />     
                    </div>

                    <div class="mt-2">
                        <InputLabel for="image" value="Image" />
                        <TextInput
                            id="image"
                            type="file"
                            class="mt-1 block w-full"
                            @input="form.image = $event.target.files[0]"
                        />
                        <InputError class="mt-2" :message="$page.props.errors.image" />
                    </div>
                
                    <div class="flex items-center justify-end mt-4">
                        <PrimaryButton 
                            class="ml-4" 
                            :class="{ 'opacity-25': form.processing }" 
                            :disabled="form.processing"
                        >
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { router } from '@inertiajs/vue3';


const props = defineProps({
    skills: Array,
    project: Object,
});

const form = useForm({
    name: props.project?.name,
    skill_id: props.project?.skill_id,
    image: null,
    project_url: props.project?.project_url,
});

const submit = () => {
    router.post(`/projects/${props.project.id}`, {
        _method: "put",
        name: form.name,
        image: form.image,
        skill_id: form.skill_id,
        project_url: form.project_url,
    });
};
</script>