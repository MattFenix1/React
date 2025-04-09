import React, {useState} from 'react';

export const SignUpForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');


    const handleSubmit = (event) => {
        setFirstName('');
        setLastName('');
        setEmail('');
        emailError.textContent = '';
        event.preventDefault();
        setSubmitted(true);
    }
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        var regexFName = /([a-z]{1,})/gi
        if(regexFName.test(setFirstName.value)===true){
            firstNameError.textContent = ''
        }else{
            firstNameError.textContent = 'Please Enter a Valid First Name'
        }
    }

    const handlelastNameChange = (event) => {
        setLastName(event.target.value);
        var regexLName = /([a-z]{1,})/gi
        if(regexLName.test(setLastName.value)===true){
            lastNameError.textContent = ''
        }else{
            lastNameError.textContent = 'Please Enter a Valid Last Name'
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        var regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
        if(regexEmail.test(setEmail.value)===true){
            emailError.textContent = ''
        }else{
            emailError.textContent = 'Please Enter a Valid Email'
        }
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        emailError.textContent = '';
    };

    return (
        <div className="container" onSubmit={handleSubmit} style={{ display: submitted ? 'none' : 'block' }}>
            <label className="form-label">First Name</label>
            <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <span id="firstNameError"></span>
            <br/>
            <label className>Last Name</label>
            <input
                type="text"
                value={lastName}
                onChange={handlelastNameChange}
            />
            <span id="lastNameError"></span>
            <br/>
            <label className="form-label">Email</label>
            <input type="email" value={email} onChange={handleEmailChange}/>
            <span id="emailError"></span>
            <br/>
            <button type="submit "className="button">
                Submit
            </button>
            <button onClick={clearForm} className="button">
                Clear
            </button>
        </div>
    )
};