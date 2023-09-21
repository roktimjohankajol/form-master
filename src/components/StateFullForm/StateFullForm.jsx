import { useState } from "react";

const StateFullForm = () => {

    const [email, setEmail] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div>
            <h2>State Full Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Type Text" /><br />
                <input
                onChange={handleEmailChange}
                type="email" name="email" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFullForm;