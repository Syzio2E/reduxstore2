import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)

  const increaseHandler=()=>{
    dispatch(counterActions.increase(10))
  }

  const incrementHandler =()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const incrementbytwoHandler=()=>{
    dispatch(counterActions.incrementbytwo())
  }
  const dercrementbytwoHandler=()=>{
    dispatch(counterActions.decrementbytwo(2))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>-- {counter} --</div>}
      <div>
      <button onClick={increaseHandler}>IncrementBy5</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementbytwoHandler}>IncrementByTwo</button>
      <button onClick={dercrementbytwoHandler}>decrementByTwo</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
