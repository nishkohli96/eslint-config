<p align="center">
  <img
    src="https://github.com/nishkohli96/eslint-config/blob/9a62a22ad6d2158051b3dcde8d02263448fa80e5/apps/eslint-config-docs/static/img/logo-transparent.png"
    alt="brand-logo"
    width="200"
  />
</p>

# nish1896-eslint-config

**A set of developer-friendly [eslint](https://eslint.org/), [stylistic](https://eslint.style/), [typescript](https://www.typescriptlang.org/) and [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) configuration rules to help you and fellow developers follow the industry-recommended coding practices for easier readability, maintenance and productivity !**

Compatible with eslint `v10` and above! For ESLint 9 use `@nish1896/eslint-flat-config@latest-v3`, and for ESLint **v8** use `@nish1896/eslint-config`.

This monorepo contains the source code for [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) as well as its [docs](https://nish1896-eslint-config.vercel.app/) 📖. Also included are example apps for [Node.js](https://nodejs.org/en), [Next.js](https://nextjs.org/) and [Vite](https://vite.dev/) to experiment with new and existing rules.

## Setup

```bash
sh scripts/setup.sh
```

Runs the `setup.sh` in the **scripts** folder which:

- Checks for `pnpm`, enabling it via `corepack` if missing
- Installs all the dependencies and devDependencies in the `node_modules` folder
- Generate a tarball of the **eslint-flat-config** in the `packages` folder
- Workspaces in `examples` consume the local [eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) package via `workspace:*`
