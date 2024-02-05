# Turbo Esbuild Monorepo Starter Template

PNPM based monorepo preconfigured with eslint, Jest, esbuild and Typescript

## Template Structure

```yaml
packages:
  - "services/**"
  - "packages/**"
  - "tools/**"
```

- `Services` is used to build and deploy services. See `services/example`
- `Packages` is used to build and deploy packages or components to use in your services

- `Tools` is used to host development and build tools esbuild, jest, eslint & prettier

### Adding services or packages

- Adding a package
  Fron the root of your project, execute `cp -frp package-template packages/The_name_of_your_package`
- Adding a service
  Fron the root of your project, execute `cp -frp package-template services/The_name_of_your_package`

#### Available Scripts

- `pnpm build`: Builds all services and packages. To bypass turbo cache, use `pnpm build --force`
- `pnpm dev`: Starts nodemon in all packages and services
- `pnpm test`: Start test suites
- `pnpm start`:Starts all packages and components in production mode
- `pnpm prod`: Creates a production _only_ deployments for your services and deployments. This must be followed by `pnpm install` in the root directory of the service or component.
- `pnpm lint-all`: Start eslint on all projects within the monorepo
- `pnpm format`: Start prettier
- `pnpm lint-format`: Start linting and formatting on all projects within the monorepo
- `pnpm lint-format:fix`: Apply linting and format fixing on all projects in the monorepo
- `pnpm format:fix`: Apply prettier formatingfix on all projects in the monorepo

## Tools used to build this starter template

- [PNPM](https://pnpm.io)
- [Esbuild](https://github.com/evanw/esbuild)
- [esbuild-node-tsc](https://github.com/a7ul/esbuild-node-tsc)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Swc](https://swc.rs/)
- [Swc/Jest](https://swc.rs/docs/usage/jest)
- [husky](https://typicode.github.io/husky/get-started.html)
