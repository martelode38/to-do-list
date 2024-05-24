import { PlusCircle } from "phosphor-react";
import styles from './TasksComponents.module.css'
import { Task } from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";
import { SemTask } from "./SemTask";
export function TasksComponents(){
    
    const [task, setTask] = useState<string[]>([]);

    const [newTask, setNewTask] = useState('');

    function createNewTask(event: FormEvent){
        event.preventDefault();

        setTask([...task, newTask]);
        setNewTask('');

    }

    function newTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function deleteTask(taskToDelete: string){
        const oneTaskToDelete = task.filter(task =>{
            return task != taskToDelete;
        })
        setTask(oneTaskToDelete); 
    }



    return(
        <div>
             <form onSubmit={createNewTask} className={styles.newTask}>
            
            
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
                        <span className={styles.count}>0 de {task.length}</span>
                    </span>

                </div>
            
                <div className={styles.tasks}>
                    {task.length === 0 ? <SemTask/> : 
                    task.map(task =>{
                        return(
                            <Task content={task} deleteTask = {deleteTask}/>
                        )
                    })
                }
                </div>
            </div>

        </div>
    );
}