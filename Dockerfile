# base image
FROM node:20.11.0-alpine3.19 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

## builder image
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build -F @services/example
## ADDED
RUN pnpm deploy -F @services/example --prod exampleservice
## final image
FROM node:20.11.0-alpine3.19 as prod
RUN apk update
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 user
WORKDIR /usr/app
COPY --from=build /app/exampleservice /usr/app
USER user
EXPOSE 3000
CMD [ "node", "./dist/index.cjs" ]
