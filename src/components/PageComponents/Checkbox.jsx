const Checkbox = ({
    value,
    onChange,
    name,
    placeholderText,
}) => {

    return(

        <>
            <label className="inline-flex items-center gap-2">

                <input 
                    type="checkbox" 
                    className="peer sr-only"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <span
                className="size-4 rounded-full border-2 border-gray-500
                        grid place-items-center transition
                    peer-checked:bg-white peer-checked:border-blue-600 peer-checked:border-5"
                >
                    
                </span>
                <span className="text-sm text-black select-none">{placeholderText}</span>
            </label>
        </>
    )
}

export default Checkbox