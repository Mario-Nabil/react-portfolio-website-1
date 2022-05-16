import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/mario-nabil-al-developer/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Nabilapaza" target="_blank"><FaGithub /></a>
            <a href="https://www.facebook.com/AL.MaRio.NaBiL/" target="_blank"><FaFacebookF /></a>
        </div>
    )
}

export default HeaderSocials