export default
{
  //组件内的data用函数表达
  data(){
  return {
    count :12
  }
},
  methods: {
    fn (){
      alert('aaa');
    }
  },
  template: '<div>买家{{count}}<input type="button" value="按钮1" @click="fn"></div>'
}
