import { Container } from '../common/Container';
import { Navigation } from './Navigation';
import { ThemeToggle } from '../theme/ThemeToggle';
import { LanguageToggle } from '../language/LanguageToggle';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import {
  HeaderWrapper,
  HeaderContent,
  RightSection,
  ToggleGroup,
  SocialLinks,
  SocialLink,
} from './styles/Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <RightSection>
            <Navigation />
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
            </SocialLinks>
            <ToggleGroup>
              <LanguageToggle />
              <ThemeToggle />
            </ToggleGroup>
          </RightSection>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
