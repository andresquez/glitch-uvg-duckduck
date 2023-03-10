import './searchBar.css'
import Button from '../Button/Button.jsx'

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input type="text" className='input' placeholder='hola' />
            <Button/>
        </div>
    )
}

export default SearchBar