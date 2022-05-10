import Resume from '../../assets/CV - Mario Nabil Apaza León.pdf'

const CTA = () => {
    return(
        <div className = 'cta'>
            <a href={Resume} download="CV - Mario Nabil Apaza León" className="btn">Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA