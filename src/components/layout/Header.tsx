import { Container } from '../common/Container';
import { Navigation } from './Navigation';
import { ThemeToggle } from '../theme/ThemeToggle';
import { LanguageToggle } from '../language/LanguageToggle';
import {
  HeaderWrapper,
  HeaderContent,
  RightSection,
  ToggleGroup,
} from './styles/Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <RightSection>
            <Navigation />
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
