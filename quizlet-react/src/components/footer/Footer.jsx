import React from 'react'
import AuthorContainer from './AuthorContainer'
import ContactContainer from './ContactContainer'

export default function Footer() {
  return (
    <footer>
        <hr />
        <div className="footer-data">
            <AuthorContainer />
            <ContactContainer />
        </div>
    </footer>
  )
}
