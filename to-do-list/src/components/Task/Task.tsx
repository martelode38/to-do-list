import { SemTask } from '../SemTask/SemTask'
import { TaskComponent } from '../TaskComponent/TaskComponent';
import styles from './Task.module.css';


export function Task(){
    return(
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
                
                
                <TaskComponent/>
                <TaskComponent/>
                <TaskComponent/>
                <TaskComponent/>
           </div>
        </div>
    );
}