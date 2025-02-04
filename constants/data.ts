export const menuItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#services', label: 'Skills' },
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
      'A dynamic real estate platform with smooth animations and an intuitive property browsing experience. Built with Next.js 14, Framer Motion for animations, and MongoDB for property data storage. Features include property search, filtering, interactive maps, and a responsive image gallery with modern UI components.',
    image: '/images/real-estate.png',
    link: 'https://realstate-app-mauve.vercel.app/',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'MongoDB',
      'Framer Motion',
      'Tailwind CSS',
    ],
  },
];
