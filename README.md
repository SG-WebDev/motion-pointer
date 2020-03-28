# motion-pointer

Small custom mouse cursor CSS &amp; JS library for fancy UX.

## How to import

If you use tools which can load your CSS & JS from node_modules e.g (webpack) you can import output `dist` file like that:

```js 
import 'motion-pointer/dist/index.css';
import 'motion-pointer/dist/index.js';
```
Else you can add `dist` files form package directly to your project and link it in HTML like that:
```html
<link rel="stylesheet" href="path_to_file/index.css">
...
<script src="path_to_file/index.js"></script>
```
## How to modify

If you want to change params of cursor or improve functionality then you can to that by change files in `src` and compile then by run npm scripts like:

```bash
npm run dev
npm run watch
```
Appearance params files is in `/src/scss/_params.scss`
Params you can set there:

```scss
$color: #d0a264; // outline cursor color in hex
$size: 30px; // height and width outline cursor in px
$transparency: 70; // value of init transparency, scope 0-99
$hoverTransparency: 30; //value of hover transparency, scope 0-99
```

## How to use

If you want to initialize hovering on some elements on your site (its optional) you can create array of this elements and pass it as parameter of init function:
```html
<script>
    /* Typo rule of adding elements
    * class: ".className"
    * id: "#idName"
    * tag: "tagName"
    * elementWithSpecificAttribute: "[attributeName]"
    * */
    const hoverElements = [
        "a",
        "[href]",
        "[onclick]",
        "#hoverTest",
    ];
    motionPointerInit(hoverElements);
</script>
```
Else you can just init function without parameters:
```html
<script>
     motionPointerInit();
</script>
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
Created by [SG-WebDev](https://github.com/SG-WebDev)