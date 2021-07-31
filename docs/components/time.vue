<template>
    <p>{{ time }}</p>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const time = ref(0)

time.value = dayjs().format('YYYY-MM-DD hh:mm:ss')
</script>
