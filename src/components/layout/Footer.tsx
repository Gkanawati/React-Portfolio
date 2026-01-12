import { GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { useTranslation, Trans } from 'react-i18next';
import {
  FooterWrapper,
  FooterContent,
  SocialLinks,
  SocialLink,
  Copyright,
  Badge,
} from './styles/Footer.styles';

export const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <SocialLinks>
            <SocialLink
              href='https://github.com/gkanawati'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <GithubLogo size={24} weight='duotone' />
            </SocialLink>
            <SocialLink
              href='https://www.linkedin.com/in/gabrielkanawati/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <LinkedinLogo size={24} weight='duotone' />
            </SocialLink>
            <SocialLink
              href='mailto:gabrielkanawati3@gmail.com'
              aria-label='Email'
            >
              <Envelope size={24} weight='duotone' />
            </SocialLink>
          </SocialLinks>

          <Copyright>
            {t('footer.copyright', { year: currentYear })}
          </Copyright>

          <Badge>
            <Trans i18nKey="footer.builtWith" ns="common">
              Built with <span>React</span> + <span>TypeScript</span>
            </Trans>
          </Badge>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};
