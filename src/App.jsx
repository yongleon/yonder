import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
//App 页面入口,所有的路由配置等,放在APP中
//导入需要的组件
import Yonder from '@/views/Yonder'//Hooks组件


const App = function App () {
    return <HashRouter>
        <div className='content'>
            {/* 所有的路由匹配规则都放在<Routes>中;每一条规则的匹配,还是基于<Route> */}
            <Routes>
                {/* <Route path="/" element={<Navigate to="/" />} /> */}
                <Route path='/' element={<Yonder />} >
                    {/* <Route path='/Vote/vote1' element={<HooksDemo />}></Route> */}
                </Route>
                {/* <Route path='/HooksDemo' element={<HooksDemo />} /> */}
                <Route path="*" element={<Navigate to={{
                    pathname: '/',//需要跳转的地址,代替了重定向redirect
                    search: '?lx=404'//?传参信息
                }} />} />
            </Routes>
            {/* 遇到Navigate组件,路由就会指定跳转到to组件 */}
        </div>

    </HashRouter>
}

export default App



/*react-router-dom在V6 版本中,移除了:
Switch
Redirect---->代替方案Navigate
witRouter---->代替方案:自己写一个withRouter
*/