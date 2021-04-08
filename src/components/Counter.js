import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyle = makeStyles({

    counterSection: {
        border: '1px solid #ddd',
        borderRadius: 30,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
    }
})
const Counter = () => {
    const { counterSection } = useStyle()
    const [count, setCount] = useState(1);
    return (
        <div className={counterSection}>
            <Button onClick={() => setCount(count > 0 ? count - 1 : 0)} ><RemoveIcon /></Button>
            <span style={{ fontSize: 20 }}>{count}</span>
            <Button onClick={() => setCount(count + 1)}> <AddIcon color="secondary" /></Button>
        </div>
    );
};

export default Counter;