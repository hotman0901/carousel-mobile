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
                {(o) => {
                    console.log(o);
                    return (
                        <div>
                            <h5>
                                contextChild - {o.name}：{o.age}
                            </h5>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
