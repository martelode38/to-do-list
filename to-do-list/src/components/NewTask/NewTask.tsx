import styles from './NewTask.module.css';
import {PlusCircle} from 'phosphor-react';

export function NewTask(){
    return(
        <div className={styles.newTask}>
            
            
            <input 
                name="newTask"
                placeholder="Adicione uma nova tarefa"
                className={styles.input}
            />


            
            

            <button className={styles.buttonTask}>
                Criar
                <PlusCircle size={20}/>
            </button>
        </div>
    );
}