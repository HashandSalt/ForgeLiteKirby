# Forge Lite

A slightly enhanced version of Kirby Plainkit using Laraval Mix to build the source.

## Running

* Map a local test domain to the `public folder`
* Set the name of the domain in `webpack.mix.js`
* run `yarn install -D && yarn start`

## Other tasks

Contains extra tasks in `package.json` for optimising images and deploying the project. Read that file for more info. The image optimisation tasks require ImageOptim CLI and SVGO installed locally.

For deploys, amend the paths and server details in the `deploy` bash script in the project root. Trigger it via the scripts in `package.json`.

More detailed readme coming soon.
