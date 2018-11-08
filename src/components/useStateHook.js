import React, { useState } from 'react';

const UseStateHook = (props) => {

    // 可以直接代初始值
    const [count, setCount] = useState(10);

    // 也可以帶function 去做判斷
    // const [count, setCount] = useState(() => {
    //     return 10;
    // });

    return (
        <div>
            <div>
                <h3>new hook</h3>
                <p>count: {count}</p>
                <hr />
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    + 1
                </button>
                <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                    - 1
                </button>
            </div>
        </div>
    );
};

export default UseStateHook;
