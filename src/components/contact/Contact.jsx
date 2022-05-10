import { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const appServiceId = process.env.REACT_APP_SERVICE_ID 
  const appTemplateId = process.env.REACT_APP_TEMPLATE_ID
  const appPublicKey = process.env.REACT_APP_PUBLIC_KEY

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(appServiceId, appTemplateId, form.current, appPublicKey)
      .then((result) => {
        alert('Mensaje enviado correctamente')
        console.log(result.text);
      }, (error) => {
        alert('Hubo un problemas. Intentelo nuevamente.')
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mario.luijhy@gmail.com</h5>
            <a href='mailto:mario.luijhy@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Mario Nabil</h5>
            <a href='https://m.me/AL.MaRio.NaBiL' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+51944365169</h5>
            <a href='https://api.whatsapp.com/send?phone=51944365169' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"  name="email" placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact