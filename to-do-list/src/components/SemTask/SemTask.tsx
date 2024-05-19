import styles from './SemTask.module.css';
import clip from '../../assents/ClipBoard.svg';
export function SemTask(){
    return(
        <div className={styles.tasks}>
        <img src={clip} alt="clipboard" />
        
        <div>
            <p className={styles.txt1}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.txt2}>Crie tarefas e organize seus itens a fazer</p>
        </div>

    </div>
    );
}