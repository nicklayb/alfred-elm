# alfred-elm

> Alfred workflow to browse Elm's documentation

![alt text](demo.gif)


## Install

```
$ npm i -g alfred-elm
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

### `elmc`

Same as `elm` but with `elm/core` package pre-selected

### `elm`

Browse Elm packages, find a package by typing the name.

If you recently browse packages, these are shown by default instead of all the packages

- On **Enter** press: Browse the selected package modules
- On **Cmd+Enter** press: Open package documentation page URL

### Browsing modules

- On **Enter** press: Browse selected module functions
- On **Cmd+Enter** press: Open module documentation page URL

### Browsing functions

- On **Enter** press: Open function documentation page URL


## Recents

By default, everytime you lookup a package, these are cached so you can quickly come back later on by simply typing `elm`. You can clear this cache by running `elmr`.

## License

MIT © [Nicolas Boisvert](http://nboisvert.com)
