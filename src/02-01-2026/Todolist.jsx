import React,{Component} from "react";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={todos:[],inputvalue:""}


    }
    addToDoList=()=>{
        if(this.state.inputvalue.trim()=="") return;
        const newentry ={
            id:Date.now(),
            text:this.state.inputvalue,
            Completed:false,
        
        };
        this.setState((prevState)=>({
            todos:[newentry,...prevState.todos],

        }));
    };
    oninputchange=(e)=>{
        this.setState({inputvalue:e.target.value});

    };
    deletetodo=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.filter((y)=>y.id !==id),
        }));
    };
    updatetask=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.map((x)=>
            x.id===id?{...x,completed:!x.completed}:x
        ),
        }));
    };
   
    render(){
        const{todos,inputvalue}=this.state;
        return (<>
            <input type="text" value={inputvalue} onChange={this.oninputchange}/>
            <br/>
            <br />
            <button onClick={this.addToDoList}>Add</button>
            <br />
            <ul>

                {todos.map((x)=>(
                    <li key={x.id}>
                        <input type="checkbox" value={x.completed}/>
                        {x.text}
                        {x.completed ? "Completed":"Not completed"}
                        <button onClick={()=>this.deletetodo(x.id)}>Delete</button>
                        </li>
                ))}
            </ul>

        </>)
    }
}
export default TodoList;