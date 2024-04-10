import css from './SearchBox.module.css'

export default function SearchBox({ value, onSearch }) {
    return (
        
        <div className={css.searchBox}>
            <label className={css.searchLabel} htmlFor="searchInput">Find contacts by name</label>
            <input className={css.searchInput} type="text" name="searchInput" id="searchInput"
            value={value} onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    
)
}