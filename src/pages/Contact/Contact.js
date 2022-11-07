import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.css';
import Contacts from '../../components/Contacts/Contacts';

export default function Contact() {
    const form = useRef();
    const btn = useRef();
    const txt = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        btn.current.value = 'Sending...';

        emailjs.sendForm('service_py0y8m5', 'template_9pui0pr', form.current, 'vlBIp4rWsmgaeod8Z')
            .then((_result) => {
                btn.current.value = 'Sent!';
                btn.current.style.backgroundColor = 'green';
                reset_style();
            }, (_error) => {
                btn.current.value = 'Failed!';
                btn.current.style.backgroundColor = 'red';
                reset_style(false);
            });
    };

    const reset_style = (clear_txt = true) => {
        window.setTimeout(() => {
            btn.current.style = null;
            btn.current.value = 'Send';
            if (clear_txt) txt.current.value = '';
        }, 1000);
    }

    return (
        <div className={styles.container}>
            <h2>
                My Presence on the Internet -
            </h2>
            <Contacts />

            <div className={styles.separator}>
                <hr style={{float: 'left'}}/>
                OR
                <hr style={{float: 'right'}}/>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label>Send Message Directly!</label> 
                <br />
                <textarea ref={txt} name="message" placeholder="Feel free to send any messages! Don't foget to metion your name and contact" /><br />
                <input type="submit" value="Send" ref={btn} />
            </form>
        </div>

    );
}