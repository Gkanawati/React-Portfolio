import { Container } from '../common/Container';
import {
  Section,
  SectionTitle,
  Content,
  Bio,
  BioText,
  SkillsCard,
  SkillsTitle,
  SkillsGrid,
  SkillItem,
} from './styles/About.styles';

const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'JavaScript',
  'Git',
  'Styled Components',
  'REST APIs',
  'MongoDB',
];

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
            <SkillsGrid>
              {skills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
          </SkillsCard>
        </Content>
      </Container>
    </Section>
  );
};
