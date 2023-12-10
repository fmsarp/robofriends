export default function SearchBox({onSearchChange}) {
    return (
        <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue"
        type='search' 
        placeholder='search robots'
        onChange={(event) => onSearchChange(event.target.value)}
        />
        </div>
    )
}
