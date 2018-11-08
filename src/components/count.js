import React, { Component } from 'react';

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    setCount = (count) => {
        this.setState((prevState, props) => ({
            count: prevState.count + count
        }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <div>
                    <h3>old</h3>
                    <p>count: {count}</p>
                    <hr />
                    <button
                        onClick={() => {
                            this.setCount(1);
                        }}
                    >
                        + 1
                    </button>
                    <button
                        onClick={() => {
                            this.setCount(-1);
                        }}
                    >
                        - 1
                    </button>
                </div>
            </div>
        );
    }
}
