import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
// import SlotFun from '@/views/slot/slotFun.jsx'//函数组件
// import SlotClass from '@/views/slot/slotClass.jsx'//类组件
import HooksDemo from '@/views/hooks/hooksDemo2.jsx'//Hooks组件
import Vote from '@/views/compound/Vote'//Hooks组件




const root = ReactDOM.createRoot(document.getElementById('root'));

class InputGet extends React.Component {
    state = {
        onOff1: false,
        onOff2: false,
        num: 0,
    }


    getDialog1 (e) {
        this.setState({
            onOff1: !this.state.onOff1
        })
    }
    getDialog2 (e) {
        this.setState({
            onOff2: !this.state.onOff2
        })
    }
    confirm () {
        console.log('增加')
        // console.log(this)
        this.setState({
            num: this.state.num + 1
        })
    }
    concel () {
        console.log('减少')
        this.setState({
            num: this.state.num - 1
        })
    }
    close () {
        console.log('关闭')
        this.setState({
            onOff1: false,
            onOff2: false
        })

    }


    render () {
        // console.log('父组件重新渲染')
        const { onOff1, onOff2, num } = this.state
        const SlotClassProps = {
            title: '这里是自定义标题',
            content: "必传内容,我们多写点文本导入",
            num: num,
            x: 10,
            y: 20,
            // onRef: node => this.SlotClass = node,
        };
        return <>
            <a onClick={() => this.getDialog1()}>BUTTON</a>
            <button onClick={() => this.getDialog2()}>弹框2</button>

            {/* {onOff1 && <SlotFun title='这里是自定义标题' content="必传内容,我们多写点文本导入" num={num}>
                <button onClick={() => this.confirm()}>增加</button>
                <button onClick={() => this.concel()}>减少</button>
                <button onClick={() => this.close()}>关闭</button>
            </SlotFun>} */}
            {/* {onOff1 && <SlotClass  {...SlotClassProps}>
                <button onClick={() => this.confirm()}>增加</button>
                <button onClick={() => this.concel()}>减少</button>
                <button onClick={() => this.close()}>关闭</button>
            </SlotClass>} */}
            {/* {onOff2 && <SlotClass  {...SlotClassProps}>
                <button onClick={() => this.confirm()}>增加</button>
                <button onClick={() => this.concel()}>减少</button>
                <button onClick={() => this.close()}>关闭</button>
            </SlotClass>} */}
            <HooksDemo {...SlotClassProps}>
                {/* <button onClick={() => this.confirm()}>增加</button>
                <button onClick={() => this.concel()}>减少</button>
                <button onClick={() => this.close()}>关闭</button> */}
            </HooksDemo>

            <div className='vote'>这里是来写复合组件通讯
                <Vote />
            </div>

        </>
    }
}

root.render(
    <InputGet />
);

// /*#__PURE__*/React.createElement(
//     React.Fragment,
//     null,
//     "div", {
//     children: ["div\u6807\u7B7E\u5185\u5BB9",
//     /*#__PURE__*/React.createElement("span", {
//         style: {
//             color: "#c00ffff"
//         },
//         children: "span\u6807\u7B7E\u5185\u5BB9"
//     }), /*#__PURE__*/React.createElement("span", {
//         children: "\u591A\u5C11\u4EF6"
//     })]
// })

