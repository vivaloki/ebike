import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component{

    render () {
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username',{
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: 'xxx'
                                        }
                                    ]
                                })(
                                    <Input placeholder="xxx"/>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}