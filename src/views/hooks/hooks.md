之前有接触过react中的组件
函数组件
不具备"状态 ref 周期函数"等内容, 第一次渲染完毕之后,无法基于组件内部的操作来控制其更新,因此称为静态组件
但是具备属性及插槽,父组件可以控制其重新渲染,每次调用,都属于重新传参
渲染流程简单,速度极快
基于FP函数式编程,提供更细粒度的逻辑组织和复用


类组件
具备 "状态 ref 周期函数 属性 插槽"等内容 ,可以灵活的控制 组件更新, 基于钩子函数也可以 灵活掌控不同阶段处理不同的事情
渲染流程繁琐,渲染速度相对较慢
基于OOP(面向对象编程)思想设计,更方便实现继承等

Hooks组件
基于React 中新提供的hook函数,让函数式组件可以组件动态化---让静态的组件选着性的拥有动态组件的功能
保留疑问,这种调用其他函数的方式,也是类似于模块化开发的那种(传参)更新调用吗

