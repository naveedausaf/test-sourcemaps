This project shows that sourcemaps are not produced for server actions/server components if you build the app using `npm run build` (that executes `next build`), then start it using `npm run start` (that runs `next start`)as described in [this blog post](https://www.highlight.io/blog/lw5-next-js-server-sourcemaps).

* `npm run build` uses `next build` with `--debug` switch.
* `I have tried running `npm run build` with with `NODE_ENV=development` and without
* Have set `productionBrowserSourceMaps: true,` in `next.config.mjs`

No combination of these seems to - including all of these measures together - generate source maps for the server side function `serverCalculate`.

If I run `npm run dev` instead, then not only do I see detailed stack traces with soruce code on both client- and server-side errors , there is also a nice error reporting UX that shows colour coded source code where error occurred.

![alt text](image.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
