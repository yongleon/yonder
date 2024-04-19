//扩展 基于ES5的方式 实现继承:寄生组合式继承
import React from 'react';
function AAA () {
    React.Component.call(this)//call继承
    this.state = {
        x: 10,
        y:true,
    }
    
}
Object.setPrototypeOf(AAA.prototype, React.Component.prototype)//原型继承
AAA.prototype.sum=function(){}