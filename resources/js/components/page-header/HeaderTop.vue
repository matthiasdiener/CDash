<template>
    <div id="headertop">
        <div id="topmenu" class="fill">
            <a id="cdash-login-link" :class="{ 'hidden': loggedIn }"  :href="uri.login">Login</a>
            <a id="cdash-register-link" :class="{ 'hidden': loggedIn }"  :href="uri.register">Register</a>
            <a id="cdash-profile-link" :class="{ 'hidden': !loggedIn }" :href="uri.profile">My CDash</a>
            <a id="cdash-logout-link" :class="{ 'hidden': !loggedIn, 'float-right' : true }" :href="uri.logout">Log out</a>
            <a id="cdash-home-link" :class="{ 'hidden': isHome}"   :href="uri.home">All Dashboards</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop",
        props: ['uri', 'user'],

        computed: {
            loggedIn () {
                return this.user.id > 0;
            },

            isHome () {
                return this.uri.home === this.uri.current;
            },
        },
    }
</script>

<style scoped>
 .hidden {
     display: none;
 }
 .float-right {
     position: absolute;
     right: 5px;
     top: -3px;
 }

</style>
