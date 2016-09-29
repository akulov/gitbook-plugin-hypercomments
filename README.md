# HyperComments widget for GitBook

This is a plugin for GitBook since version 2.3.0.

It integrates a [HyperComments](https://www.hypercomments.com/) widget into you book.

![Image](https://github.com/akulov/gitbook-plugin-hypercomments/raw/master/preview.png)

## Usage

Add the plugin to your book's configuration `book.json` and set `wid` required option.

`wid` - HyperComments widget identificator (you create a `wid` for HyperComments by adding a new website on the [HyperComments](https://www.hypercomments.com/) website)

```js
{
    "plugins": [
        "hypercomments"
    ],
    "pluginsConfig": {
        "hypercomments": {
            "wid": XXXXX
        }
    }
}
```

`lang` - set widget language for all books languages. Additional option. By defaults - current book language.

Аfter configuring `book.json`, run `gitbook install` to install all added plugins.

## Links

This plugin on [github.com](https://github.com/akulov/gitbook-plugin-hypercomments), [plugins.gitbook.com](https://plugins.gitbook.com/plugin/hypercomments), [npmjs.com](https://www.npmjs.com/package/gitbook-plugin-hypercomments)