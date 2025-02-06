export const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'My Work' },
];

export const projects = [
  {
    title: 'Full-Stack Wishlist Web Application',
    description:
      'A modern wishlist application built with Next.js 14 App Router, featuring a clean and intuitive interface. Built with Supabase for real-time database functionality and Tailwind CSS for responsive styling. Features include real-time updates, wishlist management, and a mobile-friendly design.',
    image: '/images/wish-app.png',
    link: 'https://wish-app-eta.vercel.app/',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Shadcn UI',
    ],
  },
  {
    title: 'Full-Stack Expense Tracking Application',
    description:
      'A comprehensive expense tracking application featuring user authentication, real-time updates, and interactive data visualization. Built with Next.js 14, PostgreSQL with Neon DB for data storage, and Chart.js for data visualization. Includes features like expense categorization, budget tracking, and detailed financial reports.',
    image: '/images/expense-tracker.png',
    link: 'https://expense-tracker-jnsn.vercel.app/',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'NeonDB',
      'Drizzle ORM',
      'Chart.js',
      'Shadcn UI',
    ],
  },
  {
    title: 'Modern Real Estate Web Platform',
    description:
      'A modern real estate platform showcasing responsive design and smooth animations. Built with Next.js 14 and Framer Motion for seamless user interactions. Features include property listings with filtering capabilities, an intuitive user interface, and a responsive image gallery. Demonstrates front-end development skills with a focus on modern design.',
    image: '/images/real-estate.png',
    link: 'https://realstate-app-mauve.vercel.app/',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Shadcn UI',
    ],
  },
];
