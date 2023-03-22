<template>
  <div id="HomePage" :class="`background-${isAnimation ? 'animation': 'noAnimation'}`">
    <div class="title"> 
      <h1>Júlio César</h1>
    </div>

    <div v-if="isAnimation" :class="`dropping-texts-${isAnimation ? 'animation': 'noAnimation'}`">
      <div>FRONT-END DEVELOPER</div>
      <div>VueJS</div>
      <div>React</div>
      <div>And a lot of coffee!</div>
    </div>

    <div v-else class="dropping-texts-noAnimation">
      <span>FRONT-END DEVELOPER</span>
    </div>    

    <div v-show="!isAnimation" class="logo">
      <img src="@/assets/logo.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
     return {
      time: null,
      isAnimation: true,
     }
    },
    methods:{
      stopAnimation(){
        clearTimeout(this.time)
        this.time = setTimeout(() => {
          this.isAnimation = false
          console.log('stop animation')
        }, 5000)
      }
    },
    created() {
      this.stopAnimation()
    },
  }
</script>

<style lang="scss" scoped src="./style.scss" />