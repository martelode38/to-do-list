import { Trash } from 'phosphor-react';
import styles from './TaskComponent.module.css';
export function TaskComponent(){
    return(
        <div className={styles.task}>
            <div className={styles.caixaDeMarcar}>

            </div>

            <p>Levar o theo para passear na praia de iracema de caiaquinho eu ir atras de donas de dogs e ele atras das dogs</p>

            <Trash size={24}/>
        </div>
    );
}