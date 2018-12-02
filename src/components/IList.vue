<script>
export default {
    name: 'IList',
    props: {
        content: Object
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="(item, index) in content.items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<style scoped>
</style>
