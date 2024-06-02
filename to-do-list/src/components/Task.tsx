import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';
import vector from '../assents/Vector.svg';

interface taskProps{
    content: string;
    id: string;
    deleteTask: (id:string) => void;
    
}
export function Task({content, id, deleteTask}: taskProps){
    const [click, setClick] = useState(false);
    
    
    function botaoConcluir(){
        setClick(!click); 
    }

    function deleteOneTask(){
        deleteTask(id);
    }

    return(
        <div className={styles.task}>
            
            <div
            className={click != true ? styles['caixaDeMarcar'] : styles['caixaDeMarcarOn']}
            onClick={botaoConcluir}
            >
                <img src={vector} alt="vector" />
            </div>

            <p key={id}>{content}</p>

            <div onClick = {deleteOneTask} className={styles.trash}>
            <Trash size={24}/>
            </div>
        </div>
    );
}