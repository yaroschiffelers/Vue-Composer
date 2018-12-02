<script>
export default {
    name: 'VueComposer',
    data() {
        return {
            childComponents: [],
        }
    },
    props: {
        renderContext: {
            type: Object,
        },
        renderConfig: {
            type: Object,
        },
    },
    mounted() {
        this.renderContext.components.forEach(component => {
            /**
             * Import the component
             * @type {Object}
             */
            const componentFile = require(`${
                this.renderConfig.componentsBasePath
            }/${component.name}.vue`).default

            /**
             * Construct the component object.
             * @type {Object}
             */
            const toRenderComponent = {
                component: componentFile,
                content: component.content,
            }

            /**
             * Store the component.
             */
            this.childComponents.push(toRenderComponent)
        })
    },
}
</script>

<template>
    <div>
        <component
            v-for="(childComponent, index) in childComponents"
            :is="childComponent.component"
            :key="index"
            :content="childComponent.content"
        />
    </div>
</template>
