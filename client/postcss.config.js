import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const plugins = {
  tailwindcss: {},
  autoprefixer: {},
  ...(process.env.VITE_NODE_ENV === "production" ? { cssnano: {} } : {}),
};
