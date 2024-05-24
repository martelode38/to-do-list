import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';
import vector from '../assents/Vector.svg';

interface taskProps{
    content: string;
    deleteTask: (task: string) => void;

}


export function Task({content, deleteTask}: taskProps){
    
    const [click, setClick] = useState(false);
    
    
    function botaoConcluir(){
        setClick(!click); 
    }

    function deleteOneTask(){
        deleteTask(content);
    }



    return(
        <div className={styles.task}>
            
            <div
            className={click != true ? styles['caixaDeMarcar'] : styles['caixaDeMarcarOn']}
            onClick={botaoConcluir}
            >
                <img src={vector} alt="vector" />
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