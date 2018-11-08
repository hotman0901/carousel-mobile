import React, { Component } from 'react';
import { Consumer } from './contextObj';

export default class ContextChild extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        // Consumer的children是一个函数，函数的参数为Provider的value对象
        return (
            <Consumer>
                {
                    (o) => {
                        console.log(o)
                        
                        return (
                            <div>{o.name}  {o.age}</div>
                        )
                    }
                }
            </Consumer>
        )
    }
}
