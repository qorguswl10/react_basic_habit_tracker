import React, { PureComponent } from 'react';

class Habit extends PureComponent {
	componentDidMount() {
		console.log(`habit : ${this.props.habit.name} mounted`);
	}
	componentWillUnmount() {
		console.log(`habit : ${this.props.habit.name} will unmount`);
	}

	// 단순히 props로 전달된 콜백함수들을 호출하고,
	// 또 props로 전달받은 각각의 데이터를 다시 인자로 전달해준다.
	handleIncrement = () => {
		this.props.onIncrement(this.props.habit);
	};

	handleDecrement = () => {
		this.props.onDecrement(this.props.habit);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		console.log(this.props.habit);
		const habitName = this.props.habit.name;
		const { name, count } = this.props.habit;
		return (
			<>
				<li className="habit">
					<span className="habit-name">{name}</span>
					<span className="habit-count">{count}</span>
					<button className="habit-button habit-increase" onClick={this.handleIncrement}>
						<i className="fas fa-plus-square"></i>
					</button>
					<button className="habit-button habit-decrease" onClick={this.handleDecrement}>
						<i className="fas fa-minus-square"></i>
					</button>
					<button className="habit-button habit-delete" onClick={this.handleDelete}>
						<i className="fas fa-trash"></i>
					</button>
				</li>
			</>
		);
	}
}

export default Habit;
