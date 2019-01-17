
import React from 'react'

import {Button, Card, Modal} from 'antd'


import '../ui.less';

export default class Modals extends React.Component{

    state = {

        modal1 : false,
        modal2 : false,
        modal3 : false,
        modal4 : false
    }

    handleOpen = (type) => {

        console.log(type);
        this.setState({
            [type] : true
        })
    }

    handleConfirm = (type) => {

        Modal[type]({

            title:'提示',
            content : 'hello world',
            onOk:()=>{},
            onCancel:()=>{}
        })
    }

    render() {

        return (

            <div>
                <Card title="基础模态框">
                    <Button type="primary" onClick={() => this.handleOpen('modal1')}> open </Button>
                    <Button type="primary" onClick={() => this.handleOpen('modal2')}> 修改页脚 </Button>
                    <Button type="primary" onClick={() => this.handleOpen('modal3')}> 距离顶部20 </Button>
                    <Button type="primary" onClick={() => this.handleOpen('modal4')}> 居中 </Button>
                </Card>

                <Card title="信息提示框">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}> confirm </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}> info </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}> success </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}> error </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}> warning </Button>
                </Card>
                <Modal
                    title="hello"
                    visible={this.state.modal1}
                    onCancel={() => {
                        this.setState({
                            modal1 : false
                        })
                    }}
                >
                    <p>hello world</p>
                </Modal>
                <Modal
                    title="hello"
                    visible={this.state.modal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            modal2 : false
                        })
                    }}
                >
                    <p>hello world</p>
                </Modal>
                <Modal
                    title="hello"
                    visible={this.state.modal3}
                    style={{top:20}}
                    onCancel={() => {
                        this.setState({
                            modal3 : false
                        })
                    }}
                >
                    <p>hello world</p>
                </Modal>
                <Modal
                    title="hello"
                    visible={this.state.modal4}
                    centered
                    onCancel={() => {
                        this.setState({
                            modal4 : false
                        })
                    }}
                >
                    <p>hello world</p>
                </Modal>
            </div>
        )
    }
}