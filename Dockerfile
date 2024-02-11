# Builder image
FROM node:20.11.0-alpine3.19 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app



FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build -F @services/example

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --ignore-scripts --frozen-lockfile
FROM node:20.11.0-alpine3.19 as prod
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 user
WORKDIR /usr/app
COPY --from=prod-deps /app/node_modules /usr/app/node_modules
COPY --from=build /app/services/example/package.json /usr/app/package.json
COPY --from=build /app/services/example/dist /usr/app/dist
USER user
EXPOSE 3000
CMD [ "node", "./dist/index.cjs" ]
