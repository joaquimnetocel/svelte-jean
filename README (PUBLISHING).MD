# svelte-jean

## DEVELOPMENT

ONCE YOU'VE CREATED A PROJECT AND INSTALLED DEPENDENCIES WITH `npm install` (OR `pnpm install` OR `yarn`), START A DEVELOPMENT SERVER:

```bash
npm run dev
```

## BUILDING

TO BUILD THE PACKAGE:

```bash
npm run package
```

TO CREATE A PRODUCTION VERSION OF YOUR SHOWCASE APP:

```bash
npm run build
```

YOU CAN PREVIEW THE PRODUCTION BUILD WITH `npm run preview`.

> TO DEPLOY YOUR APP, YOU MAY NEED TO INSTALL AN [ADAPTER](https://kit.svelte.dev/docs/adapters) FOR YOUR TARGET ENVIRONMENT.

## PUBLISHING TO NPM

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```

## CREATING A `.tar.gz` FILE FROM NPM PUBLISHED PACKAGE

```bash
npm pack svelte-jean
```

## GENERATING A _.tar.gz_ FILE WITHOUT PUBLISHING TO NPM

```bash
npm run package-tar-gz
```

* USE [7ZIP](https://www.7-zip.org/) TO CREATE A `svelte-jean.tar` FILE FROM _package_ FOLDER.
* USE [7ZIP](https://www.7-zip.org/) TO CREATE A  `svelte.jean.tar.gz` FILE FROM THE `.tar` FILE.
