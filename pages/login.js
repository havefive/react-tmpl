/**
 * Created by lizhaocai on 2017/3/27.
 */
import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="/pwd">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default () => (
    <div>
        <Head>
            <meta charSet='utf-8'/>
            <title>登录</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="stylesheet" href="/static/antd.min.css"></link>
            <link rel="stylesheet" href="/static/app.css"></link>
        </Head>
        <style>{`.div-center{margin-top:50px;text-align:center}.dib{display:inline-block;margin-right:20px}`}</style>
        <h1 className="div-center"> 请登录</h1>
        <div className="div-center">
            <div id="components-form-demo-normal-login">
                <WrappedNormalLoginForm></WrappedNormalLoginForm>
            </div>
        </div>
    </div>
)