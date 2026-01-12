import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { useTranslation } from 'react-i18next';
import {
  Section,
  Content,
  Greeting,
  Title,
  Subtitle,
  ButtonGroup,
} from './styles/Hero.styles';

export const Hero = () => {
  const { t } = useTranslation('sections');

  return (
    <Section id='home'>
      <Container>
        <Content>
          <Greeting>{t('hero.greeting')}</Greeting>
          <Title>{t('hero.name')}</Title>
          <Subtitle>{t('hero.subtitle')}</Subtitle>
          <ButtonGroup>
            <Button as='a' href='#projects'>
              {t('buttons.viewProjects', { ns: 'common' })}
            </Button>
            <Button as='a' href='#contact' $variant='outline'>
              {t('buttons.contactMe', { ns: 'common' })}
            </Button>
          </ButtonGroup>
        </Content>
      </Container>
    </Section>
  );
};
