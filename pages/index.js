/**
 * Created by lizhaocai on 2017/3/27.
 */
import Head from 'next/head'
import {message,Button} from 'antd'
import React from 'react'
import axios from 'axios'

//Ajaxbutton
class Abutton extends React.Component{
    state = { loading: false }
    getData = () => {
        this.setState({
            loading: true,
        });
        var that = this
        axios.get('/user/1').then(function (response) {
            console.log(response)
            message.info('This is a normal message');
            that.setState({
                loading: false
            });
        })
        .catch(function (error) {
            console.log(error)
            setTimeout (()=>{
                that.setState({
                    loading: false
                });
                message.error('This is a error message');
            },2000);
        })
    };
    render(){
        return <Button type="primary" loading={this.state.loading} onClick={this.getData}>axios get请求</Button>
    }
}

export default () => (
<div>
    <Head>
        <meta charSet='utf-8' />
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/static/antd.min.css"></link>
    </Head>
    <style>{`.div-center{margin-top:50px;text-align:center}.dib{display:inline-block;margin-right:20px}`}</style>
    <h1 className="div-center"> Welcome use React-tmpl!</h1>
    <div className="div-center">
        <Button className="dib">antd normal button</Button>
        <Abutton></Abutton>
    </div>
</div>
)