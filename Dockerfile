#Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig*.json ./

RUN PNPM_SPEC=$(node -pe "JSON.parse(fs.readFileSync('./package.json', 'utf8')).packageManager") \
    && npm i -g $PNPM_SPEC \
    && pnpm install --ignore-scripts

COPY ./src/ ./src/

RUN npm run build

#Production stage
FROM node:22-alpine AS production

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN PNPM_SPEC=$(node -pe "JSON.parse(fs.readFileSync('./package.json', 'utf8')).packageManager") \
    && npm i -g $PNPM_SPEC \
    && pnpm install -P --frozen-lockfile --ignore-scripts

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 my_user
USER my_user

COPY --from=build /app/dist ./dist

CMD ["pnpm", "start"]