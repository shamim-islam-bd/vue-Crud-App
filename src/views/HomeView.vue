<template>
  <main class="mt-5 container">
    <h1 class="mb-5">Home ></h1>

    <div class="row">
      <div class="col-md-3 col-sm-4 col-lg-3">
        <h3>Active Button</h3>
        <button
          :class="{ Active: activeClass == 'red' }"
          @click="setClass('red')"
        >
          red
        </button>
        <button
          :class="{ Active: activeClass == 'green' }"
          @click="setClass('green')"
        >
          green
        </button>
        <button
          :class="{ Active: activeClass == 'blue' }"
          @click="setClass('blue')"
        >
          blue
        </button>
        <div :class="activeClass">Hey</div>
      </div>
      
      <div class="col-md-3 col-sm-4 col-lg-3">
        <h3>Conditional Rendaring</h3>

        <button @click="show = !show">Toggle</button>
        <div v-if="show">Hello</div>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      activeClass: "red",
      show: true,
    };
  },
  methods: {
    setClass(className) {
      this.activeClass = className;
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.red {
  display: block;
  background-color: red;
  width: 100px;
  height: 100px;
  color: aliceblue;
  text-align: center;
  line-height: 100px;
  top: 10px;
}
.green {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  color: aliceblue;
  text-align: center;
  line-height: 100px;
  top: 10px;
}
.blue {
  display: block;
  background-color: blue;
  width: 100px;
  height: 100px;
  color: aliceblue;
  text-align: center;
  line-height: 100px;
  top: 10px;
}
.Active {
  background-color: rgb(255, 251, 32);
}
button {
  padding: 10px;
  margin: 10px;
}
</style>
