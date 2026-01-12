import { Container } from '../common/Container';
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
  'WordPress',
  'Figma',
];

const cloudDevOpsSkills = ['AWS SQS', 'AWS S3', 'API Gateway', 'Docker', 'Git'];

export const About = () => {
  return (
    <Section id='about'>
      <Container>
        <SectionTitle>
          About <span>Me</span>
        </SectionTitle>

        <Content>
          <Bio>
            <BioText>
              Full-stack developer specializing in backend development, currently working at CashMe with microservices, payment APIs, and banking integrations. Passionate about building scalable, user-friendly applications using modern technologies. I believe in "Never Stop Learning" and constantly explore new tools and frameworks to deliver elegant solutions to complex problems. When I'm not coding, you'll find me contributing to open-source projects and sharing knowledge with the developer community.
            </BioText>
          </Bio>

          <SkillsCard>
            <SkillsTitle>Skills & Technologies</SkillsTitle>
            <LineSeparator />
            <SkillsTitle>Backend</SkillsTitle>
            <SkillsGrid>
              {backendSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
            <br />
            <SkillsTitle>Frontend</SkillsTitle>
            <SkillsGrid>
              {frontendSkills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
            <br />
            <SkillsTitle>Cloud & DevOps</SkillsTitle>
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
