import * as React from 'react';
import {useMappedState, useDispatch} from 'redux-react-hook';

export default function Counter(props) {
    const state = useMappedState(state => state);
    const count = state.count.count;
    const name = state.user.name;
    const age = state.user.age;
    
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <p>已累計 {count} 次</p>
                <p>名稱  {name} </p>
                <p>數字  {age} </p>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
                <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
                <button onClick={()=>dispatch({type:'SET_NAME'})}>SET NAME</button>
                <button onClick={()=>dispatch({type:'RESET_NAME'})}>RESET NAME</button>
                <button onClick={()=>dispatch({type:'SET_AGE'})}>SET AGE</button>
                <button onClick={()=>dispatch({type:'RESET_AGE'})}>RESET AGE</button>
            </div>
        </div>
    );
}