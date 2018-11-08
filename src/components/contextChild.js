import React, { Component } from 'react';
import { Consumer } from './contextObj';

export default class ContextChild extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Consumer>
                {(yoyo) => {
                    console.log(yoyo);
                    return (
                        <div>
                            <h5>
                                contextChild - {yoyo.name}：{yoyo.age}
                            </h5>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
