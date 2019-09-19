import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <div style={{height: 70}} />
                <Layout.Footer >
                    <div className="footer">
                        京ICP备08102442号-1 2007-2018 MIAOV.COM 版权所有
                    </div>
                </Layout.Footer>

            </div>
        )
    }
}