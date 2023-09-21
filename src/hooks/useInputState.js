import { useState } from "react"

const useInputState = (deafultValue='') => {

    const [value, setValue] = useState(deafultValue);

    const handleChange = e=> {
        setValue(e.target.value);
    }

    return [value, handleChange];
}
export default useInputState;