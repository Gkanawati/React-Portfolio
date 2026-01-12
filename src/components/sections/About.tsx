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
  'CakePHP',
  'Next.js',
  'Ruby on Rails',
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
              Full stack developer passionate about creating elegant solutions
              to complex problems. With experience in modern web technologies, I
              focus on building scalable, user-friendly applications that make a
              difference. When I'm not coding, you'll find me exploring new
              technologies and contributing to open-source projects.
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
