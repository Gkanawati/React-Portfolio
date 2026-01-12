import { Container } from '../common/Container';
import { ProjectCard } from '../projects/ProjectCard';
import type { Project } from '../../types';
import { Section, SectionTitle, ProjectsGrid } from './styles/Projects.styles';

const placeholderProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description:
      'A full-featured online shopping platform with cart management, payment integration, and user authentication.',
    image: '',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team workspaces, and project tracking.',
    image: '',
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description:
      'Modern portfolio website with dark mode, smooth animations, and responsive design for showcasing projects.',
    image: '',
    tags: ['React', 'TypeScript', 'Styled Components', 'Vite'],
    codeUrl: 'https://github.com',
  },
];

export const Projects = () => {
  return (
    <Section id='projects'>
      <Container>
        <SectionTitle>
          My <span>Projects</span>
        </SectionTitle>

        <ProjectsGrid>
          {placeholderProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};
