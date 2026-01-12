import { GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { useTranslation, Trans } from 'react-i18next';
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
  const { t } = useTranslation('sections');

  return (
    <Section id='contact'>
      <Container>
        <SectionTitle>
          <Trans i18nKey="contact.title" ns="sections">
            Get In <span>Touch</span>
          </Trans>
        </SectionTitle>
        <Subtitle>{t('contact.subtitle')}</Subtitle>

        <ContactCard>
          <ContactMethods>
            <ContactMethod>
              <IconWrapper>
                <Envelope size={32} weight='duotone' />
              </IconWrapper>
              <ContactLabel>{t('contact.email')}</ContactLabel>
              <ContactLink href='mailto:gabrielkanawati3@gmail.com'>
                gabrielkanawati3@gmail.com
              </ContactLink>
            </ContactMethod>

            <ContactMethod>
              <IconWrapper>
                <GithubLogo size={32} weight='duotone' />
              </IconWrapper>
              <ContactLabel>{t('contact.github')}</ContactLabel>
              <ContactLink
                href='https://github.com/gkanawati'
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
              <ContactLabel>{t('contact.linkedin')}</ContactLabel>
              <ContactLink
                href='https://www.linkedin.com/in/gabrielkanawati/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/gabrielkanawati
              </ContactLink>
            </ContactMethod>
          </ContactMethods>
        </ContactCard>
      </Container>
    </Section>
  );
};
