import React, { Component } from 'react';
import './index.css'
import data from './data'
import { connect } from "react-redux";
import * as actionTypes from '../../redux/actionTypes'
import axios from 'axios'
import { Menu, Layout, List, Avatar, Tag, Divider, Icon, Tabs, Radio, Pagination } from 'antd';
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

// import { Tabs, Radio } from 'antd';

class Home extends Component {
    state = {
        tab: "all",
        current: 1
    }
    componentDidMount() {
        this.getList('all', 1)
    }

    getList = (tab, page) => {
        this.setState({current: page})
        const { dispatch } = this.props;
        dispatch({
            type: actionTypes.HOME_LIST_UPDATING
        })
        axios.get(`https://cnodejs.org/api/v1/topics`,
            {
                params: {
                    tab: tab,
                    page: page,
                    limit: 10
                }
            }
        )
            .then((res) => {
                console.log('res', res);
                dispatch({
                    type: actionTypes.HOME_LIST,
                    val: res.data.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.HOME_LIST_ERROR,
                });
            })
    }
    handleMenuClick = (e) => {
        this.getList(e.key, 1)
        this.setState({
            tab: e.key
        })
    }
    handlePageChange = (page) => {
        const {tab} = this.state;
        this.getList(tab, page)
    }
    render() {
        console.log('this.props--------------', this.props);
        const {current} = this.state
        return (
            <div>
                <Layout>
                    <Sider>
                        <Menu defaultSelectedKeys={['all']} onClick={this.handleMenuClick}>
                            <Menu.Item key="all" >全部</Menu.Item>
                            <Menu.Item key="good">精华</Menu.Item>
                            <Menu.Item key="ask">问题</Menu.Item>
                            <Menu.Item key="share">分享</Menu.Item>
                            <Menu.Item key="job">招聘</Menu.Item>
                            <Menu.Item key="dev">测试</Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        {/* data.map(item => {
                        return <div>11111111111111<div>
                    }) */}
                        <List
                            itemLayout="horizontal"
                            dataSource={this.props.home.data}
                            renderItem={item => {

                                let color = "";
                                let text = '';
                                if (item.tab == "share") {
                                    if (item.good == true) {
                                        text = "精华";
                                        color = "geekblue"
                                    } else {
                                        text = "分享";
                                        color = "purple"
                                    }
                                } else if (item.tab == "ask") {
                                    text = "问题";
                                    color = ""
                                } else if (item.tab == "job") {
                                    text = "招聘";
                                    color = "cyan"
                                } else {
                                    text = "测试";
                                    color = "lime"
                                }
                                if (item.top) {
                                    text = "置顶"
                                    color = "magenta"
                                }
                                return (<List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.author.avatar_url} />}
                                        title={<div>
                                            <Tag color={color}>{text}</Tag>
                                            <a href="https://ant.design">{item.title}</a>

                                        </div>}

                                        description={<p>
                                            <a>{item.author.loginname}</a>
                                            发表于：{item.create_at.split("T")[0]}
                                        </p>}

                                    />
                                    <div>
                                        回复：{item.reply_count}
                                        <Divider type="vertical" />
                                        访问：{item.visit_count}
                                    </div>
                                </List.Item>)
                            }}
                        />
                        <Pagination current={current} onChange={this.handlePageChange} defaultCurrent={1} total={100} />
                    </Content>

                </Layout>

            </div>
        )
    }
}

export default connect(state => (state))(Home)