
import Vue from "vue";
import app from "../components/app.vue";

function Vueditor(el) {
  app.el = el;
  return new Vue(app);
}

export default Vueditor;