import { Container } from '../common/Container';
import { Button } from '../common/Button';
import {
  Section,
  Content,
  Greeting,
  Title,
  Subtitle,
  ButtonGroup,
} from './styles/Hero.styles';

export const Hero = () => {
  return (
    <Section id='home'>
      <Container>
        <Content>
          <Greeting>Hi, I'm</Greeting>
          <Title>Gabriel Kanawati</Title>
          <Subtitle>
            Full Stack Developer passionate about creating beautiful and
            functional web experiences
          </Subtitle>
          <ButtonGroup>
            <Button as='a' href='#projects'>
              View Projects
            </Button>
            <Button as='a' href='#contact' $variant='outline'>
              Contact Me
            </Button>
          </ButtonGroup>
        </Content>
      </Container>
    </Section>
  );
};
