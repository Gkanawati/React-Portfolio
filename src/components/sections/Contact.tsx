import { GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import {
  Section,
  SectionTitle,
  Subtitle,
  ContactCard,
  ContactMethods,
  ContactMethod,
  IconWrapper,
  ContactLink,
  ContactLabel,
} from './styles/Contact.styles';

export const Contact = () => {
  return (
    <Section id='contact'>
      <Container>
        <SectionTitle>
          Get In <span>Touch</span>
        </SectionTitle>
        <Subtitle>
          Feel free to reach out for collaborations or just to connect!
        </Subtitle>

        <ContactCard>
          <ContactMethods>
            <ContactMethod>
              <IconWrapper>
                <Envelope size={32} weight='duotone' />
              </IconWrapper>
              <ContactLabel>Email</ContactLabel>
              <ContactLink href='mailto:gabrielkanawati3@gmail.com'>
                gabrielkanawati3@gmail.com
              </ContactLink>
            </ContactMethod>

            <ContactMethod>
              <IconWrapper>
                <GithubLogo size={32} weight='duotone' />
              </IconWrapper>
              <ContactLabel>GitHub</ContactLabel>
              <ContactLink
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/gkanawati
              </ContactLink>
            </ContactMethod>

            <ContactMethod>
              <IconWrapper>
                <LinkedinLogo size={32} weight='duotone' />
              </IconWrapper>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactLink
                href='https://www.linkedin.com/in/gabrielkanawati/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/yourprofile
              </ContactLink>
            </ContactMethod>
          </ContactMethods>
        </ContactCard>
      </Container>
    </Section>
  );
};
