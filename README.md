# Introducing Identicons

An Open Source icon system for Identity language by [Auth0](https://auth0.com). A royalty-free, free-to-use icons and clipart representing fundamental identity concepts. Use them in presentations, specifications and documentation. For more details, read the [announcement blog post](https://auth0.com/blog/introducing-auth0-identicons-identity-icons).

## Sponsor

|||
|-|-|
|![auth0 logo](https://user-images.githubusercontent.com/83319/31722733-de95bbde-b3ea-11e7-96bf-4f4e8f915588.png)|If you want to quickly add secure token-based authentication to your projects, feel free to check Auth0's documentation and free plan at [auth0.com/developers](https://auth0.com/developers?utm_source=GHsponsor&utm_medium=GHsponsor&utm_campaign=identicons&utm_content=auth)|

## How to Use Them?

You can download the whole set of icons or just the icons that you need from the [identicons.dev](https://identicons.dev) site.

## Do You Want to Contribute with Icons?

Awesome! To contribute you have to make a pull request with the following data:

1. Add an icon in two versions, monochrome and greyscale. In turn, have an SVG and PNG for each version, using the `.svg` and `.png` extensions respectively. Each version of the icon has to be in its own corresponding folder: `./static/icons/mono` or `./static/icons/grey`. When building the icons, you must consider the following specifications:

- Icon colors.
  - You can use two colors per icon for each version.
    - Monochrome: `#D0CEFF`, `A5A0FF` and `#635DFF`.
    - Greyscale: `#C4C4C4`, `9B9D9F` and `#65676E`.
- All icons must have a transparent background.
- The `.png` icons size has to be `816x816` pixels.
- **The filename must be the same for all versions**.

2. Once you add the icons, create a new key in the `./base/iconSet.js` file. The key looks like this:

```bash
icon#: {
  image: "icon-name",
  name: "Icon Name"
}
```

So you have to:

- Check the **key number** of the last icon listed and add yours right below it with the corresponding next key number, `icon#`.
- Add the **image file name** (without the file extension) as the value of the `image` property.
- Lastly, add the **icon name** that you think appropriately expresses what the icon represents as the value of the `name` property.

This is an example of what an icon key looks like:

```bash
icon27: {
  image: "icon-user-db",
  name: "User Data Base"
}
```

Thanks for contributing!
