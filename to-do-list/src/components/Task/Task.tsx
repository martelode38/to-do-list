import styles from './Task.module.css';
import clip from '../../assents/ClipBoard.svg';

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
                    <span className={styles.count}>0</span>
                </span>

            </div>

            <div className={styles.tasks}>
                <img src={clip} alt="clipboard" />
                
                <div>
                    <p className={styles.txt1}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.txt2}>Crie tarefas e organize seus itens a fazer</p>
                </div>

            </div>
        </div>
    );
}