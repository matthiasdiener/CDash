<template>
    <div id="headerbottom">
        <div id="headerlogo">
            <a v-bind:href="url"><img id="projectlogo" alt="Logo" v-bind:src="logo" /></a>
        </div>
        <div id="headername">
            <span class="projectname">{{ project }}</span>
            <span class="pagename">{{ pagename }}</span>
        </div>
        <HeaderNav
            :previous="previous"
            :current="current"
            :next="next">
        </HeaderNav>
        <HeaderMenu></HeaderMenu>
    </div>
</template>

<script>
    import HeaderNav from "./HeaderNav";
    import HeaderMenu from "./HeaderMenu";
    export default {
        name: "HeaderBottom",
        components: {HeaderNav, HeaderMenu},
        props: ['basePath', 'pagename', 'previous', 'current', 'next'],
        methods: {

        },
        data () {
            return {
                logo: this.basePath ? `${this.basePath}/img/cdash.png` : '/img/cdash.png',
                url: 'https://cdash.local',
                project: 'CDash',
            }
        },
    }
</script>

<style scoped>
#projectlogo {
    height: 50px;
    border: none;
}
</style>
