import React, { useEffect, useState } from "react";

const click = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Giá trị: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
        </div>
    );
};
export default click;
