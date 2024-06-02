import { PlusCircle } from "phosphor-react";
import styles from './TasksComponents.module.css';
import {v4 as uuidv4} from 'uuid';
import { FormEvent, useState } from "react";
import { SemTask } from "./SemTask";
import { Task } from './Task';

interface taskProps{
    id: string,
    text:string,
    concluido: boolean
}

export function TasksComponents(){

    const [task, setTask] = useState<taskProps[]>([]);
    const [newText, setNewText] = useState('');

    function createNewTask(event: FormEvent){
        event.preventDefault();

        const newTask: taskProps = {
            id: uuidv4(),
            text: newText,
            concluido: false
        }

        setTask([...task, newTask]);
        setNewText('');
    }

    function deleteTask(taskForDelete:string){
        const semATaskDeletada = task.filter(task=> task.id !== taskForDelete);
        setTask(semATaskDeletada);
    }

    
    return(
        <div>
             <form onSubmit={createNewTask} className={styles.newTask}>
            
            
                <textarea 
                    name="task"
                    value={newText}
                    onChange={e => setNewText(e.target.value)}
                    placeholder="Adicione uma nova tarefa"
                    className={styles.InputTask}
                    autoComplete="off"
                    required={true}
                    
                />


            
            

                <button  type='submit' className={styles.buttonTask}>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>

            <div className={styles.bodyTask}>
            
                <div className={styles.headerTask}>

                    <span className={styles.criadas}>
                        Tarefas criadas
                        <span className={styles.count}>0</span>
                    </span>

                    <span className={styles.concluidas}>
                        Concluídas
                        <span className={styles.count}>0 de {task.length}</span>
                    </span>

                </div>

                <div>

                </div>
            
                <div className={styles.tasks}>
                    {task.length === 0 ? <SemTask/> : 
                    task.map(task =>{
                        return(
                            <Task content={task.text} id={task.id}deleteTask={deleteTask}/>
                        )
                    })
                }
                </div>
                
            </div>

        </div>
    );
}