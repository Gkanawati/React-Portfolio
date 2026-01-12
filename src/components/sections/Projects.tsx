import { Container } from '../common/Container';
import { ProjectCard } from '../projects/ProjectCard';
import { projects } from '../../data/projects';
import { Section, SectionTitle, ProjectsGrid } from './styles/Projects.styles';

export const Projects = () => {
  return (
    <Section id='projects'>
      <Container>
        <SectionTitle>
          My <span>Projects</span>
        </SectionTitle>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};
