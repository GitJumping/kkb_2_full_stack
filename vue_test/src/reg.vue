<template lang="html">
  <div id="reg-main-div">
    <cmpHeader/>
    <form action="http://localhost:8081" method="post">
      用户：<input type="text" ><br/>
      密码：<input type="password"><br/>
      <input type="submit" value="注册">
      <a href="#/">去登录</a>
    </form>
    <cmpfooter/>
  </div>
</template>

<script>
import cmpHeader from '@/components/cmpheader'
import cmpfooter from '@/components/cmpfooter.vue'

export default {
  components: {cmpHeader, cmpfooter}
}
</script>

<style lang="css" scoped>

</style>
