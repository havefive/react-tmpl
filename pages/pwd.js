/**
 * Created by lizhaocai on 2017/5/12.
 */
import Head from 'next/head';
import React from 'react';
import {Steps, Button, message} from 'antd';
const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];

class ForgetPwd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title}/>)}
                </Steps>
                <div className="steps-content">{steps[this.state.current].content}</div>
                <div className="steps-action">
                    {
                        this.state.current < steps.length - 1
                        &&
                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        this.state.current === steps.length - 1
                        &&
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        this.state.current > 0
                        &&
                        <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    }
                </div>
            </div>
        );
    }
}

export default () => (
    <div>
        <Head>
            <meta charSet='utf-8'/>
            <title>忘记密码</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="stylesheet" href="/static/app.css"></link>
        </Head>
        <style>{`.div-center{margin-top:50px;text-align:center}.dib{display:inline-block;margin-right:20px}`}</style>
        <h1 className="div-center"> 找回密码</h1>
        <div className="div-center">
            <div className="pwd-section">
                <ForgetPwd/>
            </div>

        </div>
    </div>
)
