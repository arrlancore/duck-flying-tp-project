# Nextjs Tailwind Dashboard Project

A [Next.js](https://nextjs.org/) project with [Tailwind](https://tailwindcss.com/) for styling it


### Prerequisites
- <a href="https://yarnpkg.com/en/">Yarn</a>, follow the installation <a href="https://yarnpkg.com/en/docs/install">guide</a>
- <a href="https://nodejs.org/en/">Node.js</a>

## 🚀 Get Started

- Simply clone the repository using git command.

```bash
git clone git@github.com:arrlancore/duck-flying-tp-project.git
```

- Go to the project directory with command `cd duck-flying-tp-project`
- Run `yarn` command for installation
- Run Development Server:
```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Workspace

Generally you will work on the `pages/`, `components/` & `src/`

- You can start editing the page by modifying `pages/[pageName].tsx`. The page auto-updates as you edit the file.
- When you need to separate the component of the page, you need to place it under `components/`
- And when you need to store some assets, types, utils, or some configuration you can place it under `src/`

## 🚀 Ready for Production?
- You can test the production build from local with commands:
```bash
yarn build
# then
yarn start
```
- Open [http://localhost:3000](http://localhost:3000) to see the results

## 🚀 Using Docker?
1. You have installed Docker on your machine.
1. Build your container with command: `docker build -t webapp-docker:v1 .`
1. Run your container with command: `docker run -p 3000:3000 webapp-docker:v1`

- Open [http://localhost:3000](http://localhost:3000) to see the results

You can view images that you created with command `docker images`.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🚀 Learn More

Please take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) & [Learn Next.js](https://nextjs.org/learn)
- [Tailwind Documentation](https://tailwindcss.com/docs/installation)

