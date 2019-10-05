import Vue from 'vue';

class Event {
  constructor (vue) {
    this.vue = new Vue();
  }

  dispatch (event, data = null) {
    this.vue.$emit(event, data);
  }

  listen (event, callback) {
    this.vue.$on(event, callback);
  }
}

export default new Event();
