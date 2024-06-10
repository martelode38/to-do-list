import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';
import vector from '../assents/Vector.svg';

interface taskProps{
    content: string;
    id: string;
    deleteTask: (id:string) => void;
    concluirTask: (id:string, checked:boolean)=> void;
}
export function Task({content, id, deleteTask, concluirTask }: taskProps){
    const [click, setClick] = useState(false);
    
    
    function botaoConcluir(){
        concluirTask(id, !click);
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

            <p
             className={click != true ? styles['p1'] : styles['p2']}
            key={id}>{content}</p>

            <div onClick = {deleteOneTask} className={styles.trash}>
            <Trash size={24}/>
            </div>
        </div>
    );
}