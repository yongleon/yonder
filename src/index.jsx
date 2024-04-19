import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//index 作为程序入口,APP为页面入口
/*使用ANTD组件库*/
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import '@/index.less';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}
        theme={{
            components: {
                Input: {
                    /* 这里是你的组件 token */
                    colorBgContainer: '#F1F2F3',
                    activeBg: '#FFFFF0',//输入框激活状态时背景颜色
                    hoverBorderColor: '#FFF',//悬浮态边框色
                    activeBorderColor: '#FFF',//激活态边框色
                },
            },
        }}
    >
        <App />
    </ConfigProvider>
);



