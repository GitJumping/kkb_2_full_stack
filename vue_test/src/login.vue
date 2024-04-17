<template lang="html">
  <div id="login-main-div">
    <cmpHeader/>
    <form action="http://localhost:8081" method="post">
      用户：<input type="text" ><br/>
      密码：<input type="password"><br/>
      <input type="submit" value="登录">
      <a href="#/reg">去注册</a>
    </form>
    <cmpfooter/>
  </div>

</template>

<script >
import cmpHeader from '@/components/cmpheader'
import cmpfooter from '@/components/cmpfooter.vue'

export default {
  components: {cmpHeader, cmpfooter}
}
</script>

<style lang="css" scoped>

</style>
