import React, { Component } from 'react';
import ContextChild from './contextChild';

export default class ContextMidd extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="class-name">
                <h4>contextMidd</h4>
                <ContextChild />
            </div>
        );
    }
}
