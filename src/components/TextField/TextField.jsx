const TextField = ({ label, value, onChange }) => {
    return (
        <div className='mb-2'>
            <label>{label}</label>
            <input value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};

export default TextField;
