// 동적으로 변경되는 값을 state(상태)라고 한다. 이 state 관리를 useState로 한다.
import React, {useState} from "react";

const Counter = () => {
    // num : 초기값으로 시작해 셋터함수로 인해 기본값을 갖는 변수
    // setNumber : num 변수에 대한 셋터함수
    const [num, setNumber] = useState(0); // const num = 0;

    const increase = () => {
        setNumber(num + 1); // num = num + 1
    }
    
    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;
