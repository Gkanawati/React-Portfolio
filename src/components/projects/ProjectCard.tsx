import { GithubLogo, Globe } from '@phosphor-icons/react';
import type { Project } from '../../types';
import {
  CardWrapper,
  ImageWrapper,
  ProjectImage,
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

const DEFAULT_IMAGE = 'https://via.placeholder.com/200';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const imageUrl = project.image || DEFAULT_IMAGE;
  const hasImage = !!project.image;

  return (
    <CardWrapper>
      <ImageWrapper $hasImage={hasImage}>
        {hasImage ? (
          <ProjectImage src={imageUrl} alt={project.title} />
        ) : (
          project.title
        )}
      </ImageWrapper>

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
