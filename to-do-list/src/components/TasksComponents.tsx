import { PlusCircle } from "phosphor-react";
import styles from './TasksComponents.module.css'
import { Task } from "./Task";
export function TasksComponents(){
    return(
        <div>
             <form className={styles.newTask}>
            
            
                <input 
                    name="newTask"
                    placeholder="Adicione uma nova tarefa"
                    className={styles.InputTask}
                    autoComplete="off"
                />


            
            

                <button className={styles.buttonTask}>
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
                        <span className={styles.count}>0 de 5</span>
                    </span>

                </div>
            
                <div className={styles.tasks}>
                    <Task content= 'Levar o theo para passear amanha de  manha'/>  
                </div>
            </div>

        </div>
    );
}