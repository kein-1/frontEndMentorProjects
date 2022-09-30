import "./styles.css";
import { useState } from "react";
import { v4 } from "uuid";
import sun from './images/icon-sun.svg'
import moon from './images/icon-moon.svg'
import cross from './images/icon-cross.svg'



const Navheader = ({theme,setTheme,icon}) => {

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}
	return (
		<nav className="nav-header">
			<h1 className="title font-light"> TODO </h1>
			<img className="icon" src={icon} alt="" onClick={changeTheme}/>
		</nav>
	);
};

//Task
const Task = ({ task, id, status, delTask , changeStatus, font}) => {
	
	if (status === "completed"){
			return (
				<>
			<li className={`font-${font} li-checked`}>
				<div className="sub-li-cont" id={id}>
				<label className="custom-radio">
					<input type="radio" value={id}  id={id} onChange={changeStatus}/>
					<span className="checked-box-active"></span>
					</label>
					{task}
				</div>
				<img id={id} onClick={delTask} className="icon-cross" src={cross} alt="" />
			</li>
		</>
			)
	}
	else{
		
		return (
			<>
			<li className={`font-${font}`}>
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
		)
	}
}


//Tasks is an array
const DisplayTasks = ({ tasks, setTasks,theme }) => {
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

		
		//Get the elment with this ID. the ID is assigned above. Then we add a 
		//li-checked class to it so it has a line through it
		// document.getElementById(`${id}`).classList.toggle("li-checked")
	}
	const font = theme === "light" ? "light" : "dark"
	return (
		<>
			{tasks.map((element) => (
				<Task
					key={element.id}
					{...element}
					delTask={() => delTask(element.id)}
					changeStatus={() => changeStatus(element.id)}
					font={font}
				/>
			))}
		</>
	);
};

//Form

const Form = ({ tasks, setTasks, theme, fontTheme, font, background }) => {
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
			<form className={`input-cont ${background}-cont`} onSubmit={addTask}>
					<input className={`input-text font-${font} input-${background}`} onChange={updateTask} placeholder="Create a new todo"/>
			</form>
		</>
	);
};


const FilterButtons = ({tasks,setTasks, setShowAll, setShowActive, setShowCompleted,font}) => {



	const clearCompleted = () => {
		setTasks(tasks.filter(element => element.status === "active"))
	}

	const showAllFunction = () => {
		setShowAll(true)
		setShowActive(false)
		setShowCompleted(false)
	}

	const showActiveFunction = () => {
		setShowAll(false)
		setShowActive(true)
		setShowCompleted(false)
	}

	const showCompletedFunction = () => {
		setShowAll(false)
		setShowActive(false)
		setShowCompleted(true)
	}

	const temp = tasks.filter(element=>element.status==="active")
	

	return (
		
		<div className={`font-${font} buttons-bottom-cont`}>
			<p>{temp.length} items left</p>
		
			<div className="buttons-bottom-cont-small">
				<button className="filter-buttons" onClick={showAllFunction}>All</button>
				<button className="filter-buttons" onClick={showActiveFunction}>Active</button>
				<button className="filter-buttons" onClick={showCompletedFunction}>Completed</button>
			</div>

			<button className="filter-buttons" onClick={clearCompleted}>Clear Completed</button>

		</div>


	)



}

export default function App() {

	const [tasks, setTasks] = useState([]);
	const [showAll, setShowAll] = useState(false)
	const [showActive, setShowActive] = useState(false)
	const [showCompleted, setShowCompleted] = useState(false)
	const [theme, setTheme] = useState("light")
	
	// This is very important here. We are actually using a local variable and showing active/compelted
	// by tracking a state. When a button is clicked, the state changes and hence this gets re-rendered
	// by doing this, we aren't affecting our main "tasks" library and rather we are just showing 
	// a modified version 
	
	const noteToShow = 
		showActive ? tasks.filter(element => element.status === "active") :
		showCompleted ? tasks.filter(element => element.status === "completed"):
		showAll ? tasks.filter(element => element) :
		tasks

	console.log(showAll, showActive, showCompleted)
	console.log(noteToShow)
	

	if (theme === "light"){
		return (
			<div className="App light-background">
				<div className="background-light"></div>
				<div className="main-container">
					<Navheader theme={theme} setTheme={setTheme} icon={moon}/>
					<Form tasks={tasks} setTasks={setTasks} font="dark" background="light"/>
					<div className="tasks-cont-light font-dark">
						<DisplayTasks tasks={noteToShow} setTasks={setTasks} theme="dark"/>
						<FilterButtons tasks={tasks} setTasks={setTasks}    
						setShowAll={setShowAll}
						setShowActive={setShowActive}
						setShowCompleted={setShowCompleted}
						font="dark"
						
						
						/>
					</div>
				</div>
			</div>
		);
	}
	else{
		return (
		<div className="App dark-background">
			<div className="background-dark"></div>
			<div className="main-container">
				<Navheader theme={theme} setTheme={setTheme} icon={sun}/>
				<Form tasks={tasks} setTasks={setTasks} font="light" background="dark"/>
				<div className="tasks-cont-dark font-light">
					<DisplayTasks tasks={noteToShow} setTasks={setTasks} theme="light"/>
					<FilterButtons tasks={tasks} setTasks={setTasks}    
					setShowAll={setShowAll}
					setShowActive={setShowActive}
					setShowCompleted={setShowCompleted}
					font="light"
					/>
				</div>
			</div>
		</div>
	);
	}
	
}
