import styles from './style.module.css'

import List          from '../List'
import FieldsetInput from '../FieldsetInput'

export default function ViewList() {
    return (
        <section className={styles.viewList}>
            <div className={styles.inputArea}>
            <div className={styles.inputData}>
                <FieldsetInput 
                    title='nome'
                    inputType='text'
                    widthField='60%'
                />
                <FieldsetInput 
                    title='valor'
                    inputType='number'
                    widthField='40%'
                />
            </div>
            <button>+</button>
            </div>
            <List/>
        </section>
    )
}