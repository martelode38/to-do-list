import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface taskProps{
    content: string;
    
}
export function Task({content}: taskProps){
    return(
        <div className={styles.task}>
            <div className={styles.caixaDeMarcar}>

            </div>

            <p>{content}</p>

            <div className={styles.trash}>
            <Trash size={24}/>
            </div>
        </div>
    );
}