<!--ページコンポーネント-->
<!--ページコンポーネントでは使用する普通のコンポーネント（ここではApp）を読み込んで使用できる-->
<template lang="pug">
#home-top
  App
  p Top page
  img(src='../../images/image.jpg')
</template>

<style lang="scss"></style>

<script>
import App from '../../components/app'

export default {
  components: {
    App
  }
}
</script>