import React, { Component } from 'react';
import { Provider } from './contextObj';
import ContextMidd from './contextMidd';

export default class ContextParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yoyo: {
                name: 'benny',
                age: 10
            }
        };
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     return false;
    // };

    handleAge = () => {
        this.setState((prevState, props) => ({
            yoyo: {
                name: 'benny',
                age: prevState.yoyo.age + 1
            }
        }));
    };

    render() {
        // Provider通过value来传递数据
        const { yoyo } = this.state;
        return (
            <Provider value={yoyo}>
                <h3>contextApi</h3>
                <ContextMidd />
                <hr />
                <button
                    onClick={() => {
                        this.handleAge();
                    }}
                >
                    + 1
                </button>
            </Provider>
        );
    }
}
