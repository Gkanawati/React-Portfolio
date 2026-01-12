import { Container } from '../common/Container';
import { Navigation } from './Navigation';
import { ThemeToggle } from '../theme/ThemeToggle';
import {
  HeaderWrapper,
  HeaderContent,
  RightSection,
} from './styles/Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <RightSection>
            <Navigation />
            <ThemeToggle />
          </RightSection>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};
