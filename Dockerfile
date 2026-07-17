# ---------- Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copie package + npmrc local
COPY package.json package-lock.json .npmrc ./

# Install deps (prod + dev pour build)
RUN npm install

# Copie du code
COPY . .

# Build TypeScript
RUN npm run build

# ---------- Runner ----------
FROM node:20-alpine AS runner

WORKDIR /app

# Copie uniquement le build et les node_modules du builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json package-lock.json ./

# Pas d'installation ici → lib privée déjà installée
# Pas de .npmrc → token non présent dans l'image finale

EXPOSE 3000

CMD ["node", "dist/index.js"]
