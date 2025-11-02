## PR instructions
* Title format: `[<project_name>] <Title>`
* Always run `pnpm lint` and `pnpm test` before committing.
* Include a short note on any rules/UX changes and a GIF/screenshot when UI is affected.
* If you touched assets/build, attach a bundle size diff (e.g., `pnpm build` + report) and confirm performance budget still holds.

## change history rule
* Title format: `/docs/history/<rfc_file_name>-hist.md`
* Summarize change log for RFC.

## RFC(Request for comments) check rule
* Check whether the request violates governance.
* If you believe the RFC breaks the architecture, please do not request RFC stop and feedback.

## Project Envirement
* Base : Vite(v.7) + React + TanStack
* State Manager : zustand
* Design Component : primereact(version 10.9.7)

## Dev environment tips
* Use `pnpm dlx turbo run where <project_name>` to jump to a package instead of scanning with `ls`.
* Run `pnpm install --filter <project_name>` to add the package to your workspace so Vite, ESLint, and TypeScript can see it.
* Use `pnpm create vite@latest <project_name> -- --template react-ts` to spin up a new React + Vite package with TypeScript checks ready.
* Check the `name` field inside each package's `package.json` to confirm the right name—skip the top-level one.
* Set engines to Node.js **>=18** in `package.json`; prefer Node for CI unless Bun is explicitly required.
* Add core deps per package needs: `primereact`, `tailwind`, `zustand`, `vitest`, `@playwright/test`.

## Coding Style
* TypeScript + ESLint (Flat Config) + Prettier
* Shared config in packages/config
* tsconfig base path aliases: @ui/*, @theme/*, @utils/*
* Design mood : Mobile frendly responsive web UI/UX with `Styled Mode`. to use `primereact/resources/themes/lara-light-cyan/theme.css`. Compose `card-based layout` 
### Component principles
* Use PrimeReact wrappers only
* Separate state logic into custom hooks
* Accessibility first (aria, keyboard support)
### PrimeReact
* Theme management: maintain CSS/SASS themes in packages/theme
* UI wrapper: wrap PrimeReact components in packages/ui to enforce design tokens

## Testing instructions
* Find the CI plan in the `.github/workflows` folder.
* Run `pnpm turbo run test --filter <project_name>` to run every check defined for that package.
* From the package root you can just call `pnpm test`. The commit should pass all tests before you merge.
* To focus on one step, add the Vitest pattern: `pnpm vitest run -t "<test name>"`.
* Fix any test or type errors until the whole suite is green.
* After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.
* Add or update tests for the code you change, even if nobody asked.
