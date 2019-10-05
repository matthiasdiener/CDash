import './bootstrap';
import PageHeader from "./components/PageHeader";
import Event from "./Core/Event";
import Vuex from 'vuex';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const store = new Vuex.Store({
  state: {
    build: {},
    project: {},
    uri: {},
    user: {},
  },

  mutations: {
    build(state, build) {
      state.build = build;
    },

    project(state, project) {
      state.project = project;
    },

    uri (state, uri) {
      state.uri = uri;
    },

    user (state, user) {
      state.user = user;
    },
  },

  actions: {
    getPreviousBuild (context) {
      const version = this.state.uri.api.version;
      const buildId = this.state.build.id;

      const url = `/api/${version}/builds/${buildId}/previous`;
      axios.get(url)
        .then((response => {
          Object.keys(response.data).forEach(key => {
            context.commit(key, response.data[key])
          });
        }))
        .catch(error => console.error(error));
    },
  }

});

const app = new Vue({
  el: '#app',
  components: {PageHeader},
  store,
  methods: {
      pageUpdate (props) {
        Object.keys(props).forEach((key) => {
          this[key] = props[key];
        });
        console.log(this.$options.propsData);
      }
  },

  mounted () {
    Event.listen('page-update', this.pageUpdate);
  }
});
