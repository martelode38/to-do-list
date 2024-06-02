import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface taskProps{
    content: string;
    id: string;
    deleteTask: (id:string) => void;
}
export function Task({content, id, deleteTask}: taskProps){

    function deleteOneTask(){
        deleteTask(id);
    }
    return(
        <div className={styles.task}>
            <div className={styles.caixaDeMarcar}>

            </div>

            <p key={id}>{content}</p>

            <div onClick = {deleteOneTask} className={styles.trash}>
            <Trash size={24}/>
            </div>
        </div>
    );
}