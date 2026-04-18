import { Container } from '../common/Container';
import { Trans, useTranslation } from 'react-i18next';
import {
  Section,
  SectionTitle,
  TimelineContainer,
  Timeline,
  TimelineItem,
  Year,
  Dot,
  Content,
  Company,
  Role,
  Description,
} from './styles/Experiences.styles';

interface Experience {
  year: string;
  company: string;
  role: string;
  period: string;
  descriptionKey: string;
}

const experiencesData: Experience[] = [
  {
    year: '2026',
    company: 'UBS',
    role: 'experiences.ubs.role',
    period: 'experiences.ubs.period',
    descriptionKey: 'experiences.ubs.description',
  },
  {
    year: '2025',
    company: 'CashMe',
    role: 'experiences.cashme.role',
    period: 'experiences.cashme.period',
    descriptionKey: 'experiences.cashme.description',
  },
  {
    year: '2024',
    company: 'Sempher Solutions',
    role: 'experiences.sempher.role',
    period: 'experiences.sempher.period',
    descriptionKey: 'experiences.sempher.description',
  },
  {
    year: '2023',
    company: 'HubControl',
    role: 'experiences.hubcontrol.role',
    period: 'experiences.hubcontrol.period',
    descriptionKey: 'experiences.hubcontrol.description',
  },
  {
    year: '2021',
    company: 'Wi7h',
    role: 'experiences.wi7h.role',
    period: 'experiences.wi7h.period',
    descriptionKey: 'experiences.wi7h.description',
  },
];

export const Experiences = () => {
  const { t } = useTranslation('sections');

  return (
    <Section id='experiences'>
      <Container>
        <SectionTitle>
          <Trans i18nKey="experiences.title" ns="sections">
            My <span>Experience</span>
          </Trans>
        </SectionTitle>

        <TimelineContainer>
          <Timeline>
            {experiencesData.map((exp, index) => (
              <TimelineItem key={index}>
                <Year>{exp.year}</Year>
                <Dot />
                <Content>
                  <Company>{exp.company}</Company>
                  <Role>{t(exp.role)}</Role>
                  <Description>{t(exp.descriptionKey)}</Description>
                </Content>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineContainer>
      </Container>
    </Section>
  );
};
