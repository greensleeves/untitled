<template>
    <div class="my-component">{{ message }}</div>
</template>

<script>
  export default {
    name: 'my-component',
    data () {
      return {
        message: 'Hello!!'
      }
    }
  }
</script>

<style lang="sass">
    $block: '.my-component'

    #{$block}
        color: coral
</style>