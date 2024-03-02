import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Looking for collaboration? 
            <br className="sm:block hidden" /> 
            Let's collab!
        </p>
        <Link to="/contact" className="btn">
            Contact Me
        </Link>
    </section>
  )
}

export default CTA