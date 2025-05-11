FROM node:20

WORKDIR /app

# COPY only what’s needed to calculate the layer’s cache
COPY package.json package-lock.json ./

# During active development you usually want dev‑deps too,
# so use `npm install` instead of `npm ci --omit=prod`
RUN npm install

# Now copy the actual source
COPY . .

# Make Vite listen on all interfaces so you can hit it from the host
ENV PORT=5173
CMD [ "npm", "run", "dev", "--", "--host" ]
