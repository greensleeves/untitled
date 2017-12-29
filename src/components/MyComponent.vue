<template>
    <div class="my-component"
         @mouseleave="onMouseLeave($event)"
         @mouseenter="onMouseEnter($event)"
         @mousemove="onMouseMove($event)">
        {{ message }}
        <div class="custom-cursor"
             v-show="cursor.show"
             :style="getCursorPosition()">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'my-component',
    data () {
      return {
        message: 'Hello!!',
        cursor: {
          x: 0,
          y: 0,
          show: false
        }
      }
    },
    methods: {
      onMouseMove (event) {
        let elCoords = this.getCoords(this.$el)
        this.cursor.x = event.pageX - elCoords.left - this.$el.querySelector('.custom-cursor').offsetWidth / 2
        this.cursor.y = event.pageY - elCoords.top - this.$el.querySelector('.custom-cursor').offsetWidth / 2
        this.cursor.show = true
      },
      onMouseEnter (event) {
        let elCoords = this.getCoords(this.$el)
        this.cursor.x = event.pageX - elCoords.left - this.$el.querySelector('.custom-cursor').offsetWidth / 2
        this.cursor.y = event.pageY - elCoords.top - this.$el.querySelector('.custom-cursor').offsetWidth / 2
        this.cursor.show = true
      },
      onMouseLeave () {
        this.cursor.x = 0
        this.cursor.y = 0
        this.cursor.show = false
      },
      getCursorPosition () {
        return {left: `${this.cursor.x}px`, top: `${this.cursor.y}px`}
      },
      getCoords (elem) {
        let box = elem.getBoundingClientRect()
        return {
          top: box.top + window.pageYOffset,
          left: box.left + window.pageXOffset
        }
      }
    }
  }
</script>

<style lang="sass">
    $block: '.my-component'
    $cursor: '.custom-cursor'

    #{$block}
        position: relative
        width: 200px
        height: 200px
        margin: 0 auto
        background-color: whitesmoke
        color: coral

    #{$cursor}
        position: absolute
        width: 10px
        height: 10px
        border-radius: 50%
        background-color: goldenrod
</style>