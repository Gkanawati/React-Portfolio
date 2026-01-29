import { Container } from '../common/Container';
import { useTranslation, Trans } from 'react-i18next';
import {
  Section,
  SectionTitle,
  Content,
  Bio,
  BioText,
  SkillsCard,
  SkillsTitle,
  LineSeparator,
  SkillsGrid,
  SkillItem,
} from './styles/About.styles';

const backendSkills = [
  'Java',
  'Spring Boot',
  'Node.js',
  'PostgreSQL',
  'RabbitMQ',
  'Ruby on Rails',
  'CakePHP',
];

const frontendSkills = [
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Figma',
  'Storybook',
  'Tailwind CSS',
  'Material-UI',
  'Shadcn UI',
  'WordPress',
];

const cloudDevOpsSkills = ['AWS SQS', 'AWS S3', 'API Gateway', 'Docker', 'Git'];

export const About = () => {
  const { t } = useTranslation('sections');

  return (
    <Section id='about'>
      <Container>
        <SectionTitle>
          <Trans i18nKey='about.title' ns='sections'>
            About <span>Me</span>
          </Trans>
        </SectionTitle>

        <Content>
          <Bio>
            <BioText>{t('about.bio')}</BioText>
          </Bio>

          <SkillsCard>
            <SkillsTitle>{t('about.skillsTitle')}</SkillsTitle>
            <LineSeparator />
            <SkillsTitle>{t('about.backend')}</SkillsTitle>
            <SkillsGrid>
              {backendSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
            <br />
            <SkillsTitle>{t('about.frontend')}</SkillsTitle>
            <SkillsGrid>
              {frontendSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
            <br />
            <SkillsTitle>{t('about.cloudDevops')}</SkillsTitle>
            <SkillsGrid>
              {cloudDevOpsSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
          </SkillsCard>
        </Content>
      </Container>
    </Section>
  );
};
