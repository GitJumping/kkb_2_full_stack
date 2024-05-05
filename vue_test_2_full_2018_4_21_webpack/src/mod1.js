// require.js
// require 是 node.js 的模块
/*
也可以直接exports
*/
// exports.a = 12;

// default 表示导出整个模块
// export default 12;

// export 输出一个类
export default class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log(`${this.name}, ${this.age}`);
    }
}

// export let a=10;
// export let b=28;