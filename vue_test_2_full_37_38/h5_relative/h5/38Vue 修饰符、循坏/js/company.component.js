export default
{
  data(){
  return {
    count: 22
  }
},
  methods: {
    fn (){
      alert('bbb');
    }
  },
  template: '<div>卖家{{count}}<input type="button" value="按钮2" @click="fn"></div>'
}
