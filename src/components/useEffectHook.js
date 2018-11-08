import React, { useState, useEffect } from 'react';

const UseEffectHook = (props) => {
    const [count, setCount] = useState(() => {
        return 10;
    });

    const [name, setName] = useState(() => {
        return 'yoyo';
    });


    // useEffect，方法有使用到一定會執行didmount

    // 1.沒有帶參數，就都會執行didUpdate
    // useEffect(() => {
    //     document.title = `click ${count} times ${name}`;
    // })

    // 2.didUpdate只會執行有設定的參數
    // useEffect((e) => {
    //     document.title = `click ${count} times ${name}`;
    // }, [count])

    
    // 3.空陣列didUpdate都不會執行
    // useEffect(() => {
    //     document.title = `click ${count} times ${name}`;
    // }, [])

    return (
        <div>
            <div>
                <h3>useEffect</h3>
                <span>like componentDidMount & componentDidUpdate.</span>
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
                <hr/>
                <input type="text" onChange={(e) => setName(e.target.value)} defaultValue={name} />
            </div>
        </div>
    );
};

export default UseEffectHook;
