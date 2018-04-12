# Etui Development

## Set Up

### Etui

- clone the repository: `git clone https://github.com/martianfield/etui.git`
- install dependencies: `npm install`
- build it: `npm run build`
- create a symlink in the global folder: `npm link` (so that our test project can link to it, see https://docs.npmjs.com/cli/link)


### Test Project

The test project best resides in a folder at the same level as the Etui's folder, eg:
    - <parent folder>
        - `etui`
        - `etui-test`

1. clone the test-project repository or create your own test project using create-react-app (best make the )
    - clone : `git clone https://github.com/martianfield/etui-test.git`
    - create: `create-react-app etui-test`
2. link to our test project (inside the test-project folder): `npm link etui`


## Development Cycle

Run `npm start` in two different Terminals (one in the etui folder and the other in the test-project folder)


## Publishing

Run `npm publish`

## Notes & Attributions

- Project setup followed https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce
