创建一个全局的 公共 容器  这样 可以随时引入
用来存储组件需要的公共信息
!在创建store容器中,存储两个部分的内容
-公共状态:各个组件需要共享通信的信息 ,需要的参数
-事件池:存放着可以让组件更新的方法 各个页面的setState

特点:当公共状态一旦发生改变,会默认立即通知事件池中的方法执行
事件池方法的执行,让指定组件渲染更新,而组件一更新,就可以获取最新的公共状态信息进而渲染


公共状态:   stroe.getState()---->{supnum:0,oppnum:0}

事件池:     stroe.subscribe(function)


还是用vote4来测试store