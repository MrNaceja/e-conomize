import styles from './style.module.css'

export default function FieldsetInput({title, inputType, widthField, value, onChange}) {

    function onChangeField(event) {
        onChange(event.target.value)
    }

    return (
        <fieldset className={styles.fieldsetInput} style={{width: widthField}}>
            <legend>{title}</legend>
            <input type={inputType} value={value} onChange={onChangeField}/>
        </fieldset>
    )
}