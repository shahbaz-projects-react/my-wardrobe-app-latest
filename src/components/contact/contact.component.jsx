import React from 'react'
import { ContactContainer, ContactInfo } from './contact.styles'
import { ReactComponent as Email } from '../../assets/email.svg'
import TitleUpdater from '../dynamic-title/dynamic-title.component'

const Contact = () => {
  return (
    <ContactContainer>
      <TitleUpdater title="Contact" />
      <ContactInfo>
        <a href="mailto:shahbazgk13@gmail.com?subject=mail">
          <Email style={{ margin: '0 0.3rem', width: '1rem' }} />
          Let's connect, drop a mail!
        </a>
      </ContactInfo>
    </ContactContainer>
  )
}

export default Contact
