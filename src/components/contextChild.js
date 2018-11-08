import React, { Component } from 'react';
import AppContext from './contextObj';

export default class ContextChild extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <AppContext.Consumer>
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
            </AppContext.Consumer>
        );
    }
}
