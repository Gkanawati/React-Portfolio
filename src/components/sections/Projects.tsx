import { Container } from '../common/Container';
import { ProjectCard } from '../projects/ProjectCard';
import { projects } from '../../data/projects';
import { Trans } from 'react-i18next';
import { Section, SectionTitle, ProjectsGrid } from './styles/Projects.styles';

export const Projects = () => {
  return (
    <Section id='projects'>
      <Container>
        <SectionTitle>
          <Trans i18nKey="projects.title" ns="sections">
            My <span>Projects</span>
          </Trans>
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
