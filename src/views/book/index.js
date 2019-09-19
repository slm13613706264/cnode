import React, { Component } from 'react';
import { Card } from 'antd';
import './index.css';
import data from './data';
export default class App extends Component {
    render() {

        return (
            <div>
                {data.map((item, index) => {
                    
                    return (
                        <Card
                            key={index}
                            title={item.title} >
                            <p>{item.content}</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    )
                })}
            </div>
        )
    }
}