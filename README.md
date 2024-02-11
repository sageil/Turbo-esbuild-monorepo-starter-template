# Turbo Esbuild Monorepo Starter Template

PNPM based monorepo preconfigured with docker, eslint, Jest, esbuild and Typescript

***Windows Users Only:***
I have *only* tested this on Windows 10 with WSL2. Please create an [issue](https://github.com/sageil/Turbo-esbuild-monorepo-starter-template/issues) if you encounter any problems using the template.
## Getting Started

- Install `pnpm` using `npm install -g pnpm` 
- Clone the template `git clone https://github.com/sageil/turbo-esbuild-monorepo-template`
- Run `pnpm install`

### Template Structure

```yaml
packages:
  - "services/**"
  - "packages/**"
  - "apps/**"
  - "tools/**"
```

- `Services` is used to build and deploy services. See `services/example`
- `Packages` is used to build and deploy packages or components to use in your services
- `Apps` is used to build and deploy browser based apps
- `Tools` is used to host development and build tools esbuild, jest, eslint & prettier

### Adding services or packages

- *Adding a package*
  From the root of your project, execute `cp -frp package-template packages/The_name_of_your_package`
- *Adding a service*
  From the root of your project, execute `cp -frp service-template services/The_name_of_your_service`
  - *Adding an App*
  From the root of your project, execute `cp -frp app-template apps/The_name_of_your_app`

*Note*: Please change the name property in your project's `package.json` to reflect the new project name

### Available PNPM Scripts

- `pnpm build`: Builds all services and packages. To bypass turbo cache, use `pnpm build --force`
- `pnpm dev`: Starts nodemon in all packages and services
- `pnpm test`: Start test suites in all projects within the monorepo
- `pnpm start`:Starts all packages and components in production mode
- `pnpm prod`: Creates a production ***only*** deployments for your services and components. This must be followed by `pnpm install` in the root directory of the service or component.
- `pnpm lint-all`: Start eslint on all projects within the monorepo
- `pnpm format-all`: Start prettier in all projects within the monorepo
- `pnpm lint-format`: Start linting and formatting on all projects within the monorepo
- `pnpm lint-format:fix`: Apply linting and formating fixing on all projects within the monorepo
- `pnpm format:fix`: Apply prettier formating and applying prettier fixes on all projects within the monorepo
- `pnpm docs-all`: Start typedoc on all projects within the monorepo in directory called `docs` in the root of your monorepo

### Using taskfile to build your services using docker

Before using the taskfile to build your services, make sure you have installed [docker](https://docs.docker.com),and [Taskfile](https://taskfile.dev) in your environment.

#### Running Tasks

- `task docker`: Used to build the docker image and run the container
- `task --watch docker`: Used to build, deploy and watch your project for changes in docker.
- `tasl --watch docker --force`: Used to force build, deploy and watch your project for changes in docker.

### Viewing the generated documentation
 - Execute `pnpm viewdocs` in the root of your monorepo to view the generated documentation in your default browser(http://127.0.0.1:57208/docs).
<p align="center">
  <img  src="assets/docs.png?raw=true">
</p>


### Git hooks

- **commit-msg**: used to validate commit messages using conventional commits
- **pre-commit**: used to run lint staged files
- **post-merge**: used to run pnpm -install and pnpm test-
- **post-checkout**: used to run pnpm install && pnpm lint-staged

### ToDo

- [x] Add & configure husky
- [x] Add Typedocs
- [x] Add Prettier
- [x] Add Jets
- [x] Add eslint
- [x] Add esbuild with type checking
- [x] Add Development option with watch mode
- [x] Add Docker
- [x] Add taskfile
- [ ] Complete browser based apps configuration

### Tools used to build this starter template

- [PNPM](https://pnpm.io)
- [Esbuild](https://github.com/evanw/esbuild)
- [esbuild-node-tsc](https://github.com/a7ul/esbuild-node-tsc)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [Prettier](https://prettier.io/)
- [Swc](https://swc.rs/)
- [Swc/Jest](https://swc.rs/docs/usage/jest)
- [husky](https://typicode.github.io/husky/get-started.html)
- [Typedoc](https://typedoc.org/)
- [Taskfile](https://taskfile.dev)
- [Docker](https://www.docker.com)
- [Turbo](https://turbo.build)
