

export default function SearchBox({ value, onSearch }) {
    return (
        
        <div>
            <label htmlFor="searchInput">Find contacts by name</label>
            <input type="text" name="searchInput" id="searchInput"
            value={value} onChange={(event) => onSearch(event.target.value)}
            />
        </div>
    
)
}