// import React, { PureComponent } from 'react';
import React, { memo } from 'react';

// rcc - class
// rsi - function

// Class -> PureComponent
// 함수 -> memo()

const HabitAppForm = memo((props) => {
	// 함수안에서는 this 생략
	const formRef = React.createRef();
	const inputRef = React.createRef();

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		const name = inputRef.current.value;
		name && props.onAdd(name);
		formRef.current.reset();
	};
	return (
		<form className="add-form" onSubmit={onSubmit} ref={formRef}>
			<input type="text" className="add-input" placeholder="please type here" ref={inputRef} />
			<button className="add-button">Add</button>
		</form>
	);
});

export default HabitAppForm;

// PureComponent 최상위에 있는 데이터가 변화하지 않으면 re-render() 하지 않는다.
// class HabitAppForm extends PureComponent {
// 	formRef = React.createRef();
// 	inputRef = React.createRef();

// 	onSubmit = (e) => {
// 		e.preventDefault();
// 		console.log(this.inputRef.current.value);
// 		const name = this.inputRef.current.value;
// 		name && this.props.onAdd(name);
// 		// this.inputRef.current.value = '';
// 		this.formRef.current.reset();
// 	};

// 	render() {
// 		return (
// 			<form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
// 				<input
// 					type="text"
// 					className="add-input"
// 					placeholder="please type here"
// 					ref={this.inputRef}
// 				/>
// 				<button className="add-button">Add</button>
// 			</form>
// 		);
// 	}
// }

// export default HabitAppForm;
