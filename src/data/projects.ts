import type { Project } from '../types';
import fswBarberCover from '../assets/images/fsw-barber-cover.png';
import igniteShopCover from '../assets/images/ignite-shop-cover.png';
import igniteCallCover from '../assets/images/ignite-call-cover.png';
import coffeeDeliveryCover from '../assets/images/coffee-delivery-cover.png';
import anunxCover from '../assets/images/anunx-cover.png';
import waiterAppCover from '../assets/images/waiter-app-cover.png';
import nlwCopaCover from '../assets/images/nlw-copa-cover.png';
import heyGruposCover from '../assets/images/heygrupos-cover.png';
import devBlogCover from '../assets/images/devblog-cover.jpg';
import githubBlogCover from '../assets/images/github-blog-cover.png';
import foodExplorerCover from '../assets/images/food-explorer-cover.png';
import devPostCover from '../assets/images/devpost-cover.png';
import igniteUiStorybookCover from '../assets/images/ignite-ui-storybook-cover.png';

export const projects: Project[] = [
  {
    id: '13',
    title: 'Ignite UI Storybook',
    description: 'descriptions.ignite-ui-storybook',
    image: igniteUiStorybookCover,
    tags: ['React', 'TypeScript', 'Storybook', 'Turborepo', 'Monorepo'],
    demoUrl: 'https://gkanawati.github.io/ignite-ui-storybook',
    codeUrl: 'https://github.com/Gkanawati/ignite-ui-storybook',
    npmUrl: 'https://www.npmjs.com/package/@ignite-ui-gk/react',
  },
  {
    id: '1',
    title: 'FSW Barber',
    description: 'descriptions.fsw-barber',
    image: fswBarberCover,
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS', 'shadcn/ui'],
    demoUrl: 'https://fsw-barber-gkanawati.vercel.app',
    codeUrl: 'https://github.com/Gkanawati/fsw-barber',
  },
  {
    id: '2',
    title: 'Ignite Shop',
    description: 'descriptions.ignite-shop',
    image: igniteShopCover,
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Stitches', 'Radix UI'],
    demoUrl: 'https://ignite-shop-gk.vercel.app',
    codeUrl: 'https://github.com/Gkanawati/ignite-shop-gk',
  },
  {
    id: '3',
    title: 'Ignite Call',
    description: 'descriptions.ignite-call',
    image: igniteCallCover,
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Google APIs', 'React Hook Form'],
    demoUrl: 'https://ignite-call-gk.vercel.app',
    codeUrl: 'https://github.com/Gkanawati/ignite-call-gk',
  },
  {
    id: '4',
    title: 'Coffee Delivery',
    description: 'descriptions.coffee-delivery',
    image: coffeeDeliveryCover,
    tags: ['React', 'TypeScript', 'Styled Components', 'React Hook Form'],
    demoUrl: 'https://coffe-delivery-gk.netlify.app',
    codeUrl: 'https://github.com/Gkanawati/Coffee-Delivery',
  },
  {
    id: '5',
    title: 'Anunx',
    description: 'descriptions.anunx',
    image: anunxCover,
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'Material-UI', 'Cloudinary'],
    demoUrl: 'https://anunx-gk.vercel.app',
    codeUrl: 'https://github.com/Gkanawati/Anunx',
  },
  {
    id: '6',
    title: 'Waiter App',
    description: 'descriptions.waiter-app',
    image: waiterAppCover,
    tags: ['TypeScript', 'Node.js', 'MongoDB', 'React', 'Express'],
    codeUrl: 'https://github.com/Gkanawati/Waiter-App',
  },
  {
    id: '7',
    title: 'Food Explorer',
    description: 'descriptions.food-explorer',
    image: foodExplorerCover,
    tags: ['Next.js', 'JavaScript', 'Node.js', 'MongoDB'],
    demoUrl: 'https://food-explorer-gk.netlify.app/',
    codeUrl: 'https://github.com/Gkanawati/Food-Explorer-Frontend',
  },
  {
    id: '8',
    title: 'NLW Copa',
    description: 'descriptions.nlw-copa',
    image: nlwCopaCover,
    tags: ['TypeScript', 'React', 'Node.js', 'Prisma'],
    codeUrl: 'https://github.com/Gkanawati/NLW-copa',
  },
  {
    id: '9',
    title: 'HeyGrupos',
    description: 'descriptions.heygrupos',
    image: heyGruposCover,
    tags: ['JavaScript', 'React Native', 'Firebase', 'Real-time'],
    codeUrl: 'https://github.com/Gkanawati/HeyGrupos',
  },
  {
    id: '10',
    title: 'DevBlog',
    description: 'descriptions.devblog',
    image: devBlogCover,
    tags: ['React Native', 'TypeScript', 'Strapi', 'CMS'],
    codeUrl: 'https://github.com/Gkanawati/DevBlog',
  },
  {
    id: '11',
    title: 'Github Blog',
    description: 'descriptions.github-blog',
    image: githubBlogCover,
    tags: ['TypeScript', 'React', 'GitHub API', 'Styled Components'],
    codeUrl: 'https://github.com/Gkanawati/Github-Blog',
  },

  {
    id: '12',
    title: 'DevPost',
    description: 'descriptions.devpost',
    image: devPostCover,
    tags: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    codeUrl: 'https://github.com/Gkanawati/DevPost',
  },
];
