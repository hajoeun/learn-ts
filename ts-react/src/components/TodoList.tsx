import * as React from 'react';
import TodoItem from './TodoItem';

interface ITodoItemData {
    id: number;
    text: string;
    done: boolean;
}

interface IState {
    input: string;
    todoItems: ITodoItemData[];
}

class TodoList extends React.Component<{}, IState> {
    public id: number = 0;
    public state: IState = {
        input: '',
        todoItems: []
    };

    public onToggle = (id: number): void => {
        const { todoItems } = this.state;
        const idx: number = todoItems.findIndex((todo: ITodoItemData) => todo.id === id);
        const selectedItem: ITodoItemData = todoItems[idx];
        const nextItems: ITodoItemData[] = [ ...todoItems ];

        const nextItem: ITodoItemData = {
            ...selectedItem,
            done: !selectedItem.done
        };

        nextItems[idx] = nextItem;

        this.setState({
            todoItems: nextItems
        });
    };

    public onRemove = (id: number): void => {
        this.setState(({ todoItems }) => ({
            todoItems: todoItems.filter(todo => todo.id !== id)
        }));
    };

    public onChange = (e: React.FormEvent<HTMLInputElement>): void => {
      const { value } = e.currentTarget;
      this.setState({
          input: value
      })
    };

    public onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState(({ todoItems, input }) => ({
            input: '',
            todoItems: [...todoItems, { id: this.id++, text: input, done: false }]
        }));
    };

    public render() {
        const { onSubmit, onChange, onToggle, onRemove } = this;
        const { input, todoItems } = this.state;
        const onToggleTodo = (todo: ITodoItemData) => () => onToggle(todo.id);
        const onRemoveTodo = (todo: ITodoItemData) => () => onRemove(todo.id);
        const todoItemList = todoItems.map(
            (todo: ITodoItemData) => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={onToggleTodo(todo)}
                    onRemove={onRemoveTodo(todo)}
                    text={todo.text}
                />
            )
        );
        return (
            <div>
                <h1>What Todo?</h1>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={input}/>
                    <button type="submit">[Add]</button>
                </form>
                <ul>
                    {todoItemList}
                </ul>
            </div>
        )
    }
}

export default TodoList;
