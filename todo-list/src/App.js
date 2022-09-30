import "./styles.css";
import { useState } from "react";
import { v4 } from "uuid";
import sun from './images/icon-sun.svg'
import cross from './images/icon-cross.svg'



const Navheader = () => {
	return (
		<nav className="nav-header">
			<h1 className="title font-light"> TODO </h1>
			<img className="icon" src={sun} alt="" />
		</nav>
	);
};

//Task
const Task = ({ task, id, delTask , changeStatus}) => {
	return (
		<>
			<li className="font-light">
				<div className="sub-li-cont" id={id}>
				<label className="custom-radio">
					<input type="radio" value={id}  id={id} onChange={changeStatus}/>
					<span className="checked-box"></span>
					</label>
					{task}
				</div>
				<img id={id} onClick={delTask} className="icon-cross" src={cross} alt="" />
			</li>
		</>
	);
};

//Tasks is an array
const DisplayTasks = ({ tasks, setTasks }) => {
	//Use filter. So basically each time the button is clicked, the button fires
	//the function we passed in. Each button will have this function
	//The function takes in the current associated element's id as a parameter
	//the array of tasks is passed with every function

	//Filter is used so we "delete" the element and make a new array. Remember in react we always
	//want to create a new object rather than modifying the existing state of one
	const delTask = (id) => {
		const newTasks = tasks.filter((element) => element.id !== id);
		setTasks(newTasks);
	};

	//To change the status, we find the current element with the id. Remember:
	//every item has this change-status function. 
	//We find the element, copy it, then change its status value
	//We then must create a new array since in react we never modify original state
	//When we made new array, we use map. We find the matching element through ID and replace it
	//with the newly created element whos status has changed 
	const changeStatus = (id) => {
		const temp = tasks;
		const item = tasks.find(element => element.id === id)
		const newItem = {...item, status: "completed"}
		setTasks(tasks.map(element => element.id === id? newItem : element))

		document.getElementById(`${id}`).classList.toggle("li-checked")
	}
	console.log(tasks)
	return (
		<div className="tasks-cont">
			{tasks.map((element) => (
				<Task
					key={element.id}
					task={element.task}
					id={element.id}
					delTask={() => delTask(element.id)}
					changeStatus={() => changeStatus(element.id)}
				/>
			))}
		</div>
	);
};

//Form

const Form = ({ tasks, setTasks }) => {
	const [taskName, setTaskName] = useState("");

	const addTask = (e) => {
		e.preventDefault();
		const newTask = {
			id: v4(),
			task: taskName,
			status: "active"
		};
		setTasks(tasks.concat(newTask));
		setTaskName("");
	};

	const updateTask = (e) => setTaskName(e.target.value);

	return (
		<>
			<form className="input-cont" onSubmit={addTask}>
					
					<input className="input-text font-light" value={taskName} onChange={updateTask} placeholder="Create a new todo"/>

			</form>
		</>
	);
};

export default function App() {
	const [tasks, setTasks] = useState([]);

	return (
		<div className="App">
			<div className="background"></div>
			<div className="main-container">
				<Navheader />
				<Form tasks={tasks} setTasks={setTasks} />
				<DisplayTasks tasks={tasks} setTasks={setTasks} />
			</div>
		</div>
	);
}
