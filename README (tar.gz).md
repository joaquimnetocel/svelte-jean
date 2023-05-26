# GENERATING A _.tar.gz_ FILE WITHOUT PUBLISHING TO NPM

* INSTALL NPX AS A GLOBAL DEPENDENCY (YOU HAVE TO DO IT ONLY ONCE):

  ```bash
  npm install -g npx # INSTALL NPX AS A GLOBAL DEPENDENCY
  ```

* BUILD THE PACKAGE AND CREATE THE package FOLDER

```bash
npm run package-tar-gz
```

* USE [7ZIP](https://www.7-zip.org/) TO CREATE A `svelte-jean.tar` FILE FROM _package_ FOLDER.
* USE [7ZIP](https://www.7-zip.org/) TO CREATE A  `svelte.jean.tar.gz` FILE FROM THE `.tar` FILE.

[BACK](./README.md)
