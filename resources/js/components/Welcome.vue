<template>
    <div class="pt-10 text-center">
        <h1 class="text-3xl font-extrabold text-slate-200">
            {{ title }}
        </h1>
        <h4 class="pt-3 text-xl">
            {{ subTitle }}
        </h4>
    </div>
    <div class="flex items-center justify-center pt-12">
        <img
            class="object-fill h-96"
            :src="logo"
            alt=""
        />
    </div>
</template>
<script setup>
import logo from '@images/logo.jpg'

defineProps({
    title: String,
    subTitle: String

})
</script>
