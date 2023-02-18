import styles from './style.module.css'

export default function FieldsetInput({title, inputType, widthField}) {
    return (
        <fieldset className={styles.fieldsetInput} style={{width: widthField}}>
            <legend>{title}</legend>
            <input type={inputType}/>
        </fieldset>
    )
}