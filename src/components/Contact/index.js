import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const title = "Contact me"
    const titleArray = Array.from({length: title.length}, (_, i) => title[i])

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_tqkg90e',
                'template_tntgezk',
                refForm.current,
                'RIUhKogpdm5VtlyU9'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert(('Failed to send the message, please try again'))
                }
            )
    }

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>                    
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={titleArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Whether it's an opportunity, or you just want to talk. Send over your request and/or question, don't hesitate to contact me using the form below. I'll respond as soon as I can.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="text" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input  placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" require></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Wayne Nguyen,
                    <br/>
                    Barrie,
                    <br/>
                    Ontario, Canada.
                    <br/>
                    <span>quang.ndm91@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.393964, -79.692846]} zoom = {13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.393964, -79.692846]}>
                            <Popup>Hello from Barrie :) </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Contact