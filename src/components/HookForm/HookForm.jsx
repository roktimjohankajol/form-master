import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState('Hokk');
    const handleSubmit = e => {
        console.log('Get hook data', name);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange}  type="text" name="name" placeholder="Name" /><br />
                <input  type="email" defaultValue={'test@gmail.com'} name="email" id="" placeholder="Email"/><br />
                <input  type="password" name="password" id="" placeholder="Password"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;