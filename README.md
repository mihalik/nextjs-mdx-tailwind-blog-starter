# Next.js + MDX + Tailwind blog starter

### Overview

Based on my [standard starting config](https://github.com/mihalik/nextjs-mdx-tailwind-starter) but includes a bunch of blog-specific stuff, including RSS feed generation (pattern taken from [the Next.js site](https://github.com/zeit/next-site)).

Still mostly just blending a bunch of Next.js examples into a cohesive, production-ready bundle with a focus on static deployments (I use Firebase Hosting for most of my deployments).

### What's included?

- [Next.js](https://nextjs.org) with scripts for `npm run export`.
- [MDX](https://mdxjs.com) for a weird content/component hybrid that is actually super-awesome.
- [next-seo](https://github.com/garmeeh/next-seo) for setting all the meta tags in MDX.
- [Tailwind CSS](https://tailwindcss.com/) and all the plugins for Next.js to make it work. This includes [purgecss](https://www.purgecss.com) to only ship the CSS used.
- [eslint-config-unobtrusive](https://github.com/suchipi/eslint-config-unobtrusive) because I let prettier handle all my formatting but want to catch stupid coding mistakes.
- Some basic examples for listing/displaying blog posts
- RSS feed generation

### Usage

- Clone this repo
- `npm run dev`
  - Edit `/components/page.js` or `/components/page.css` to edit the base page styles
  - Edit `index.mdx` or add your own pages
  - Add blog posts to `/pages/blog`. The `meta` variable must be present with at least `title`, `layout`, `link` variables
- `npm run export` to get the static versions in the `out` directory

### Potential Concerns

- `purgecss` and `cssnano` only run on the production build and this could cause production-only problems if there are issues with those packages. But, since the css output is cached as the files are changed, new selectors are not picked up as files are edited in local dev mode. So the dev mode experience is broken if `purgecss` is enabled.
- MDX has a habit of wrapping all your lines with `<p>` tags. So, using some elements (`<h1>`, etc) inside MDX will cause React `validateDOMNesting` warnings. This is an MDX issue rather issue with this project.
- Need to move `mdPlugins` to `remarkPlugins` before MDX 2.0
- RSS feed generation only happens in production builds. It can't be tested locally in the browser.
- It might be nice to have a CLI to generate new blog posts to appropriately prefill all the `meta` tags.
- The current solution for multiple layouts with `/components/layout.js` could use some improvement.
