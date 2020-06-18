<template>
  <h1>{{ msg }}</h1>
  <input type="text" name="" class="" id="">
  <button class=" text-white flex justify-center px-4 py-2 bg-blue-500" @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style lang="scss">
  input{
    background: blue;
    &:focus{
      outline-color: red;
    }
  }
</style>