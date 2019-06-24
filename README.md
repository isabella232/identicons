
# [identicons](https://identiverse.dev/)

> An Open Source Identity Icons System.



### Introducing Identicons

> Auth0 is releasing a set of royalty-free, free-to-use icons and clipart representing fundamental identity concepts and artifacts frequently used to describe topologies and solutions in presentations, specifications and documentation. Please read more [here](https://auth0.com/blog/)

&nbsp;
&nbsp;

#### How to use them?

> You can download the set of icons or just the icons that you need from the [Identicons](https://identicons.dev) website.

&nbsp;
&nbsp;

### Do you want to contribute with icons?

Great!! That will be very usefull for you and other urser that need security icons.
To contribute with icons you have to make a pull request with the :

1. Add the icon in their two versions (Dark and Light) in their respectives folders `./static/icons/dark` or `./static/icons/light`. The **file name** must be the same in both cases.

2. Once added the icons you will have to create a new key in `./base/iconSet.js`.
The key looks something like this:

```  
icon#: {
  image: "icon-name",
  name: "Icon Name"
}
```
So you have to see the last **Icon Number** and add the next. Add the **image file name** (without the file extension) into the `image:`, and lastly add the **Icon Name** that you think correct.

That's it!!!
Thanks for contribute!

&nbsp;
&nbsp;
