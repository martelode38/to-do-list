import { PlusCircle } from "phosphor-react";
import styles from './TasksComponents.module.css'
import { Task } from "./Task";
import { useState } from "react";
import { SemTask } from "./SemTask";
export function TasksComponents(){
    
    const [task, setTask] = useState([]);

    const [newTask, setNewTask] = useState('');

    function creatNewTask(){
        event.preventDefault;

        event.target.task.value;

        setTask([...task, setNewTask]);
        setNewTask('');

    }

    function newTaskChange(){
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }


    return(
        <div>
             <form onSubmit={creatNewTask} className={styles.newTask}>
            
            
                <textarea 
                    name="task"
                    value={newTask}
                    onChange={newTaskChange}
                    placeholder="Adicione uma nova tarefa"
                    className={styles.InputTask}
                    autoComplete="off"
                    required={true}
                />


            
            

                <button  type='submit' disabled = {newTask.length === 0} className={styles.buttonTask}>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>

            <div className={styles.bodyTask}>
            
                <div className={styles.headerTask}>

                    <span className={styles.criadas}>
                        Tarefas criadas
                        <span className={styles.count}>{task.length}</span>
                    </span>

                    <span className={styles.concluidas}>
                        Concluídas
                        <span className={styles.count}>0 de 5</span>
                    </span>

                </div>
            
                <div className={styles.tasks}>
                    {task.length === 0 ? <SemTask/> : 
                    task.map(task =>{
                        return(
                            <Task content={task}/>
                        )
                    })
                }
                </div>
            </div>

        </div>
    );
}