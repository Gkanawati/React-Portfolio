import { GithubLogo, Globe } from '@phosphor-icons/react';
import type { Project } from '../../types';
import {
  CardWrapper,
  ImageWrapper,
  CardContent,
  Title,
  Description,
  Tags,
  Tag,
  Links,
  Link,
} from './styles/ProjectCard.styles';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <CardWrapper>
      <ImageWrapper>{project.title}</ImageWrapper>

      <CardContent>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        <Tags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>

        <Links>
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Globe size={16} weight='duotone' />
              Demo
            </Link>
          )}
          {project.codeUrl && (
            <Link
              href={project.codeUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubLogo size={16} weight='duotone' />
              Code
            </Link>
          )}
        </Links>
      </CardContent>
    </CardWrapper>
  );
};
