import React, { Component } from 'react';
import { Layout, Row, Col, Menu, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom'
import './index.css'

export default class App extends Component {
    state = {
        current: 'home'
    }
    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }
    render() {
        return (<Layout.Header className="header">
            <Row>
                <Col span={8} style={{textAlign: 'right', lineHeight: '62px'}}>
                    <span style={{fontSize: 30, marginRight: 50, fontWeight: "bold"}}>cNode</span>
                    <Divider type="vertical" style={{height: 40, position: 'relative', top: -5, width: 2}} />
                </Col>
                <Col span={16}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="home">
                            <Link to="/">
                                <Icon type="mail" />
                                首页
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="book">
                            <Link to="/book">
                                <Icon type="appstore" />
                                教程
                            </Link>

                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">
                                <Icon type="appstore" />
                                关于
                            </Link>

                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Layout.Header>
        )
    }
}