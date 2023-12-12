import TextField from '../TextField/TextField';

const SearchField = ({ searchFilter, onChange }) => {
    return (
        <form>
            <TextField
                label='Search...'
                value={searchFilter}
                onChange={onChange}
                hideLabel={true}
            />
        </form>
    );
};

export default SearchField;
