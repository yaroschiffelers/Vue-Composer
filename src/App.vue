<script>
import composerConfig from './composer.config.js'
import composerContext from './composer.context.js'

export default {
    name: 'App',
    data () {
        return {
            rContext: null,
            rConfig: null
        }
    },
    created() {
        /**
         * @todo:
         * Fake db call, need to do some kind of async call
         * and render the Render component again after the
         * promise (db call) is resolved.
         * Perhaps: this.$nextTick() could be the key to solve
         * this issue.
         * setTimeout(() => {
         *     this.responseLocal = responseObject
         * }, 2000)
         */
        this.rConfig = composerConfig
        this.rContext = composerContext
    }
}
</script>

<template>
    <div id="app">
        <VueComposer
            :renderContext="rContext"
            :renderConfig="rConfig"
        />
    </div>
</template>

<style>
body {
    font-size: 17px;
    padding: 3rem;
    font-family: sans-serif;
}
</style>
