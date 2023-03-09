import './input.css'
import Button from '../Button/Button.jsx'

const input = () => {
    return (
        <div className='searchbar'>
            <input type="text" className='input' placeholder='hola' />
            <Button/>
        </div>
    )
}

export default input