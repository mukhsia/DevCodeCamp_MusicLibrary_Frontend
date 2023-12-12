const TextField = ({ label, value, onChange, hideLabel = false }) => {
    if (!hideLabel) {
        return (
            <div className='mb-2'>
                <label className='form-label'>{label}</label>
                <input
                    className='form-control'
                    value={value}
                    placeholder={label}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    } else {
        return (
            <div className='mb-2'>
                <input
                    className='form-control'
                    value={value}
                    placeholder={label}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        );
    }
};

export default TextField;
