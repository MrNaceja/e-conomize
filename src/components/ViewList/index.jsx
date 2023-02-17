import './style.css'

import List from '../List'
import FieldsetInput from '../FieldsetInput'

export default function ViewList() {
    return (
        <section className='viewList'>
            <div className='inputArea'>
            <div className='inputData'>
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