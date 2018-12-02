<script>
export default {
    name: 'IHeader',
    props: {
        content: Object
    }
}
</script>

<template>
    <div>
        <h1>{{ content.title }}</h1>
    </div>
</template>

<style scoped>
</style>
