<p align="center">
  <img
    src="https://github.com/nishkohli96/eslint-config/blob/9a62a22ad6d2158051b3dcde8d02263448fa80e5/apps/eslint-config-docs/static/img/logo-transparent.png"
    alt="brand-logo"
    width="200"
  />
</p>

# nish1896-eslint-config

**A set of developer-friendly [eslint](https://eslint.org/), [stylistic](https://eslint.style/), [typescript](https://www.typescriptlang.org/) and [accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) configuration rules to help you and fellow developers follow the industry-recommended coding practices for easier readability, maintenance and productivity !**

Compatible with eslint `v8` and `v9`!

This monorepo contains the source code for [@nish1896/eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config), [@nish1896/eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) as well as the common [docs](https://nish1896-eslint-config.vercel.app/) 📖 shared by these two packages. Also included are example apps for [Node.js](https://nodejs.org/en), [React](https://react.dev/), [Vite](https://vite.dev/) and [Next.js](https://nextjs.org/) with to experiment with new and existing rules.

## Setup

```bash
sh scripts/setup.sh
```

Runs the `setup.sh` in the **scripts** folder which:

- Checks or installs `yarn` globally
- Installs all the dependencies and devDependencies in the `node_modules` folder
- Generate a tarball of both the **eslint-configs** in the `packages` folder
- Links [eslint-config](https://www.npmjs.com/package/@nish1896/eslint-config) to all the workspaces in `examples/eslint-v8` folder
- Links [eslint-flat-config](https://www.npmjs.com/package/@nish1896/eslint-flat-config) to all the workspaces in `examples/eslint-v9` folder
