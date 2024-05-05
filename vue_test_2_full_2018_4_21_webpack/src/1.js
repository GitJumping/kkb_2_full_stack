// SyntaxError: Cannot use import statement outside a module
// 直接执行报错，node不认 import
import modd1 from './mod1.js'
console.log(modd1)
// let p = new modd1('Arry', 30)
// p.show()

// import {a,b} from './mod1.js'
// console.log(a,b)

// import {a as var_a, b as var_b} from './mod1.js'
// console.log(var_a, var_b)