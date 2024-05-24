import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface taskProps{
    content: string;
    deleteTask: (task: string) => void;
    
}


export function Task({content, deleteTask}: taskProps){
    
    function deleteOneTask(){
        deleteTask(content);
    }

    return(
        <div className={styles.task}>
            <div className={styles.caixaDeMarcar}>

            </div>

            <p>{content}</p>

            <div 
            onClick = {deleteOneTask}
            className={styles.trash}>
            <Trash size={24}/>
            </div>
        </div>
    );
}