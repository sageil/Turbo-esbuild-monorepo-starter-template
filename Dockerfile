# Builder image
FROM node:20.11.0-alpine3.19 AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build
# Repeat the following step for every service you want to deploy
RUN pnpm deploy -F @services/example --prod /prod/example-prod/
# Production image
FROM builder AS prod
COPY --from=builder /prod/example-prod/ /prod/example-prod/
WORKDIR /prod/example-prod/
EXPOSE 3000
CMD [ "pnpm", "start" ]