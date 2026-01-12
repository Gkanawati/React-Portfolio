import { Container } from '../common/Container';
import { ProjectCard } from '../projects/ProjectCard';
import type { Project } from '../../types';
import { Section, SectionTitle, ProjectsGrid } from './styles/Projects.styles';

const DEFAULT_PROJECT_IMAGE =
  'https://avatars.githubusercontent.com/u/87530595?v=4';

const placeholderProjects: Project[] = [
  {
    id: '1',
    title: 'Ignite Shop - E-commerce Platform',
    description:
      '🛒 🤑 O Ignite Shop é uma aplicação de e-commerce desenvolvida com Next.js, utilizando SSG, SSR e integração com o Stripe para processamentos de pagamentos e exibição de produtos.',
    image: 'https://avatars.githubusercontent.com/u/87530595?v=4',
    tags: ['React', 'Next.js', 'Stitches', 'Stripe', 'Next SEO', 'TypeScript'],
    demoUrl: 'https://ignite-shop-gk.vercel.app',
    codeUrl: 'https://github.com/Gkanawati/ignite-shop-gk',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team workspaces, and project tracking.',
    image: DEFAULT_PROJECT_IMAGE,
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description:
      'Modern portfolio website with dark mode, smooth animations, and responsive design for showcasing projects.',
    image: DEFAULT_PROJECT_IMAGE,
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
