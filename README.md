
# [Identicons](https://identiverse.dev/)

> An Open Source Identity Icons System.



### Introducing Identicons

> Auth0 is releasing a set of royalty-free, free-to-use icons and clipart representing fundamental identity concepts and artifacts frequently used to describe topologies and solutions in presentations, specifications and documentation. Please read more [here](https://auth0.com/blog/).

&nbsp;
&nbsp;

### How to use them?

> You can download the set of icons or just the icons that you need from the [Identicons](https://identicons.dev) website.

&nbsp;
&nbsp;

### Do you want to contribute with icons?

Great!! That will be very usefull for you and other urser that need security icons.
To contribute you have to make a pull request with following data:

1. Add the icon in their two versions(Dark and Light) and two formats each one `.svg` and `.png`. They have to go in their respectives folders `./static/icons/dark` or `./static/icons/light`. For the build of the icons you have to consider the following specifications:

  - Icon colors:
    You can use two colors per icon in each case.
    - Light: `#000000` and `#eb5424`.
    - Dark: `#ffffff` and `#eb5424`.
  
  - All the icons must to have transparent background.
  - The `.png` icons size have to be 400x400 pixels.
  -  **The file name must be the same all cases**.

&nbsp;
&nbsp;

2. Once added the icons you will have to create a new key in `./base/iconSet.js`.
The key looks something like this:

  ```  
  icon#: {
    image: "icon-name",
    name: "Icon Name"
  }
  ```

  So you have to:
  - Check the **Last Icon Number** and add the next in `icon#`.
  - Add the **Image File Name**(without the file extension) into the `image:`.
  - and lastly, add the **Icon Name** that you think correct into the `name:`.

&nbsp;
&nbsp;

That's it!
Thanks for contribute!