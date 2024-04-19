import React from 'react';
import ReactDOM from 'react-dom/client';
// import '@/index.less';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    Radio,
    DatePicker
} from 'antd';
import moment from 'moment'
import dayjs from 'dayjs'

const root = ReactDOM.createRoot(document.getElementById('root'));

class Demo extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            startTime: ''
        };

    }
    //表单提交
    onFinish (values) {
        console.log(values)

    }

    //开始时间
    handleStartTime = (value) => {
        this.setState({
            startTime: dayjs(value).format('YYYY-MM-DD HH:mm:ss')//00:00:00
        }, () => {
            console.log(dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
        })
    }


    render () {
        const { startTime } = this.state

        return <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="活动名称"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: '活动名称必填',
                        },
                        {
                            min: 0, max: 40, message: '长度不超过 40个字符', trigger: 'blur'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="助力有效时间" style={{ marginBottom: 0 }}>
                    <Form.Item
                        name="days"
                        style={{ display: 'inline-block', width: 'calc(25% - 8px)' }}
                    >
                        <InputNumber min={0} max={365} />
                    </Form.Item><span style={{ lineHeight: "32px" }}>天</span>
                    <Form.Item
                        name="hours"
                        style={{ display: 'inline-block', width: 'calc(25% - 8px)', margin: '0 8px' }}
                    >
                        <InputNumber min={0} max={24} />
                    </Form.Item><span style={{ lineHeight: "32px" }}>时</span>
                    <Form.Item
                        name="minutes"
                        style={{ display: 'inline-block', width: 'calc(25% - 8px)', margin: '0 8px' }}
                    >
                        <InputNumber min={0} max={60} />
                    </Form.Item><span style={{ lineHeight: "32px" }}>分钟</span>
                </Form.Item>

                <Form.Item
                    label="活动开始时间"
                    name="startTime"
                    rules={[
                        {
                            required: true,
                            message: '活动开始时间',
                        },
                    ]}
                >
                    <DatePicker
                        style={{ width: '100%' }}
                        disabledDate={currentDate => currentDate && currentDate <= moment().startOf('day')}
                        showTime={{ format: 'YYYY-MM-DD HH:mm:ss' }}
                        onChange={this.handleStartTime}
                    />
                </Form.Item>

                <Form.Item
                    label="活动结束时间"
                    name="endTime"
                    rules={[
                        {
                            required: true,
                            message: '活动截止时间',
                        },
                    ]}
                >
                    <DatePicker
                        style={{ width: '100%' }}
                        showTime={{ format: 'YYYY-MM-DD HH:mm:ss' }}
                        disabledDate={currentDate => startTime && currentDate < dayjs(startTime)}
                    />
                </Form.Item>

                <Form.Item
                    label="购买方式"
                    name="meansOfPurchase"
                    initialValue={1}
                    rules={[
                        {
                            required: true,
                            message: '活动名称必填',
                        },
                    ]}
                >
                    <Radio.Group >
                        <Radio value={0}> 任意金额可以购买 </Radio>
                        <Radio value={1}> 指定金额可以购买 </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="是否允许自己助力"
                    name="isAllow"
                    initialValue={1}
                    rules={[
                        {
                            required: true,
                            message: '活动名称必填',
                        },
                    ]}
                >
                    <Radio.Group >
                        <Radio value={0}> 是 </Radio>
                        <Radio value={1}> 否 </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="助力人数"
                    name="helpers"
                    rules={[
                        {
                            required: true,
                            message: '活动名称必填',
                        },
                    ]}
                >
                    <InputNumber min={1} />
                </Form.Item>

                <Form.Item
                    label="助力类型"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: '活动名称必填',
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="0">固定金额</Select.Option>
                        <Select.Option value="1">固定比例</Select.Option>
                        <Select.Option value="2">随机立减</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 32,
                    }}
                >

                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <Button type="primary" htmlType="submit" >
                                保存
                            </Button>
                        </div>
                        <div style={{ flex: 1, textAlign: 'right' }} >
                            <Button type="text">
                                取消
                            </Button>
                        </div>
                    </div>
                </Form.Item>
            </Form >
        </>
    }
}

root.render(
    <Demo />
);

