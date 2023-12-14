import Icons from '../Icons/Icons';
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './ContactForm.scss'
const ContactForm = ({ mode }) => {

    const [error, setError] = useState({
        username: '',
        email: '',
        comment: ''
    })

    const [user, setUser] = useState({
        username: '',
        comment: '',
        email: '',
        sent: false,
        isSending: false
    })

    const validations = {
        'email': 'This field should be an email',
        'minlength': 'This field should contain at least 5 characters',
        'required': 'This field is required'
    };

    const hasError = () => error.username !== '' || error.email !== '' || error.comment !== '';

    const formRef = useRef()
    const handleInputChange = (e) => {

        setUser({
            ...user,
            sent: false,
            isSending: false,
            [e.target.name]: e.target.value
        })

        if (hasError()) validation();
    }

    const isEmail = (str) => {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return emailRegex.test(str)
    }

    const validation = () => {

        let e = {
            username: '',
            email: '',
            comment: ''
        };

        if (user.username === '') {
            e.username = validations.required;
        } else if (user.username.length < 5) {
            e.username = validations.minlength
        }

        if (user.email === '') {
            e.email = validations.required
        } else if (!isEmail(user.email)) {
            e.email = validations.email
        }

        if (user.comment === '') {
            e.comment = validations.required
        } else if (user.comment.length < 5) {
            e.comment = validations.minlength
        }
        setError(e);

        return e.username === '' && e.email === '' && e.comment === ''
    }
    const handleSubmit = (e) => {

        e.preventDefault()

        if (validation()) {
            setUser({
                ...user,
                isSending: true
            })
            emailjs.sendForm('service_zdg76oc', 'template_f9yfp82', formRef.current, 'user_D1Qvev04zROsVfVA6TQQ7')
                .then((result) => {
                    if (result.text.toLowerCase() === 'ok') {
                        setUser({
                            ...user,
                            sent: true,
                            isSending: false,
                        })
                    }
                }, (error) => {
                    alert("error conection")
                    console.log(error);
                });
            e.target.reset()
        }
    }
    return (
        <div className="cmp-contact-form">
            <h4>Contact</h4>
            <div className="cmp-contact-form__wrapper">
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="cmp-contact-form--row">
                        <label htmlFor="name" >Name:</label>
                        <input onChange={handleInputChange} id="name" type="text" name="username" />
                        <p className="cmp-contact-form__error">
                            {error.username}
                        </p>
                    </div>
                    <div className="cmp-contact-form--row">
                        <label htmlFor="email" >Email:</label>
                        <input onChange={handleInputChange} id="email" type="email" name="email" />
                        <p className="cmp-contact-form__error">
                            {error.email}
                        </p>
                    </div>
                    <div className="cmp-contact-form--row">
                        <label htmlFor="comment">Comment:</label>
                        <textarea onChange={handleInputChange} id="comment" name="comment"></textarea>
                        <p className="cmp-contact-form__error">
                            {error.comment}
                        </p>
                    </div>
                    <button className={`cmp-contact-form__button ${mode}`} type="submit">Enviar</button>
                    {
                        user.isSending && <span className="cmp-contact-form__sending"></span>
                    }
                    {
                        user.sent && !user.isSending && <span className="cmp-contact-form__success">Sent successful!</span>
                    }
                </form>
                <div className="cmp-contact-form--social">
                    <a href="mailto:barreiromartinj@gmail.com" className="cmp-contact-form--social__link" target="_blank" rel="noreferrer">
                        <Icons name="mail" />
                    </a>
                    <a href="https://github.com/martinjbh" className="cmp-contact-form--social__link" target="_blank" rel="noreferrer">
                        <Icons name="git" />
                    </a>
                    <a href='https://gitlab.powermeter.com.ar/barreiromartinj' className="cmp-contact-form--gitlab" target="_blank" rel="noreferrer">
                        <Icons name="gitlab" />
                    </a>
                    <a href="https://www.linkedin.com/in/barreiro-martin/" className="cmp-contact-form--social__link" target="_blank" rel="noreferrer">
                        <Icons name="linkedin" />
                    </a>

                    <a href='https://www.docdroid.net/A6N6F3R/martin-barreiro-cv-pdf' className="cmp-contact-form--social__link" target="_blank" rel="noreferrer">
                        <Icons name="cv" />

                    </a>




                </div>
            </div>
        </div>
    )
}

export default ContactForm;