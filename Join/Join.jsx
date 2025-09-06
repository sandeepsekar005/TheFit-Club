import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
template_hifsvig
        emailjs.sendForm('service_15ho5mq', 'template_jh8edqp', form.current, {
            publicKey: 'cBCdHYLNERg6TS8ew',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="Join" id="joinus">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US ?</span>
                </div>

            </div>
            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your email address' />
                    <button className='btn btn-j'>Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join