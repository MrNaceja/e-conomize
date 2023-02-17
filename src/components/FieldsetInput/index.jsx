import './style.css'

export default function FieldsetInput({title, inputType, widthField}) {
    return (
        <fieldset className='fieldsetInput' style={{width: widthField}}>
            <legend>{title}</legend>
            <input type={inputType}/>
        </fieldset>
    )
}