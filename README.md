# Koalafy 🐨

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![build status](https://gitlab.com/koalafy/landing-page/badges/master/pipeline.svg)](https://gitlab.com/koalafy/landing-page)

The landing page.

## Stacks

- [React](https://yarn.pm/react)
- [React DOM](https://yarn.pm/react-dom)
- [Next.js](https://yarn.pm/next)
- [Prettier](https://yarn.pm/prettier)
- [Yarn](https://yarnpkg.com)

## Development

To prevent conflict in module resolution, make sure to use [Yarn](https://yarnpkg.com)
so `yarn.lock` won't conflict with `package-lock.json`.

- Clone repo: `git clone git@gitlab.com:koalafy/landing-page.git`
- Install dependencies: `yarn`
- Start development server: `yarn dev`

And using stable Node.js version is highly recommended.

## Production

This site should be deployed as static website, in order to generate is as
a static website, run this following command:

```bash
yarn export
```

If `.next` directory is not exists, you need to build it first:

```bash
yarn build
```

The build (generated) directory will lives with name `out`. We can deploy it to PaaS like
Netlify & Zeit Now or to our own infra.

## License

```
The MIT License (MIT)

Copyright (c) 2020 Koalafy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.

```
