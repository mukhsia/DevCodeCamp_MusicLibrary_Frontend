import TextField from '../TextField/TextField';

const SearchField = ({ searchFilter, onChange }) => {
    return (
        <form>
            <TextField
                label='Search:'
                value={searchFilter}
                onChange={onChange}
            />
        </form>
    );
};

export default SearchField;
