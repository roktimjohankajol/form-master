import { useEffect, useRef } from "react";

const RefForm = () => {

    const  nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value); 
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(()=>{
        nameRef.current.focus();
    },[]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Name" /><br />
                <input ref={emailRef} type="email" defaultValue={'test@gmail.com'} name="email" id="" placeholder="Email"/><br />
                <input ref={passwordRef} type="password" name="password" id="" placeholder="Password"/><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;