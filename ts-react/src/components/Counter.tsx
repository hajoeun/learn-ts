import * as React from 'react';

interface IState {
    counter: number;
}

class Counter extends React.Component<{}, IState> {
    public state: IState = {
        counter: 0
    };

    public onIncrement = (): number => {
        this.setState(({ counter }) => ({ counter: counter + 1 }));
        return this.state.counter;
    };
    public onDecrement = (): number => {
        this.setState(({ counter }) => ({ counter: counter - 1 }));
        return this.state.counter;
    };

    public render() {
        const { onIncrement, onDecrement } = this;
        return (
          <div>
              <h1>카운터</h1>
              <h3>{this.state.counter}</h3>
              <button onClick={onIncrement}>+</button>
              <button onClick={onDecrement}>-</button>
          </div>
        );
    }
}

export default Counter;
