import * as React from 'react';

interface IProps {
    text: string;
    done: boolean;
    onToggle(): void;
    onRemove(): void;
}

class TodoItem extends React.Component<IProps> {
    public render() {
        const { text, done, onToggle, onRemove } = this.props;
        return (
            <li>
                <b
                    onClick={onToggle}
                    style={{ textDecoration: done ? 'line-through' : 'none' }}
                >
                    {text}
                </b>
                <span style={{ marginLeft: '8px' }} onClick={onRemove}>[Delete]</span>
            </li>
        )
    }

}

export default TodoItem;
