import Vue from "vue"

Vue.filter("dateformat", value => {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
})
