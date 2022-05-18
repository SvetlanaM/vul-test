import React from 'react';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

function Todo({ todo, index, markTodo, removeTodo }) {
	var m = require('moment');
	moment().format('MMM Do YY');
	m.locale('be');
	m().format('D                               MMN MMMM');
	return (
		<div className='todo'>
			<span
				style={{ textDecoration: todo.isDone ? 'line-through' : '' }}
				className='span-s'>
				<div
					id='messageText'
					className='div-2'
					dangerouslySetInnerHTML={{ __html: todo.text }}
				/>
				<div className='div-2'>{todo.text}</div>
			</span>
			<div>
				<Button variant='outline-danger' onClick={() => removeTodo(index)}>
					✕
				</Button>
			</div>
		</div>
	);
}

function FormTodo({ addTodo }) {
	const [value, setValue] = React.useState('');
	const [pass, setPassValue] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label>
					<b>Add Pass</b>
				</Form.Label>
				<Form.Control
					type='password'
					className='password'
					value={pass}
					id='pass'
					onChange={(e) => setPassValue(e.target.value)}
					placeholder='Add password'
				/>
				<Form.Control
					type='text'
					className='input'
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder='Add new todo'
				/>
			</Form.Group>
			<Button variant='primary mt-3 mb-3' type='submit'>
				Submit
			</Button>
		</Form>
	);
}

function App() {
	const [todos, setTodos] = React.useState([
		{
			text: 'This is a sampe todo',
			isDone: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const markTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className='app'>
			<div className='container'>
				<h1 className='text-center mb-4'>Todo List</h1>
				<FormTodo addTodo={addTodo} />
				<div>
					{todos.map((todo, index) => (
						<Card key={index}>
							<Card.Body>
								<Todo
									key={index}
									index={index}
									todo={todo}
									markTodo={markTodo}
									removeTodo={removeTodo}
								/>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
