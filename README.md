# nullResponsive

<div align="left">
  <img width="500px" src="https://github.com/Akohjesse/nullResponsive/blob/main/src/assets/logo.png?raw=true">
  <br>
  <h3>For times where you are either lazy to write media queries or you don't have need for a mobile adaptive website</h3> 
  <br>
  
   nullResponsive is a customizable splash screen that replaces your sites view when breakpoints (mobile | desktop) are reached, essentially covering the mess your site is without media queries
   <br>
   <br>
  <img src="https://github.com/Akohjesse/nullResponsive/blob/main/src/assets/screenshot.png?raw=true">
</div>
<br>

## 💾 Installation
```
 $ npm install null-responsive-vue
```
<br>

## 📄 Usage
### Install in your main ts or js file

```jsx
  import nullResponsive from "null-responsive-vue"   // import base css file
  
  import "null-responsive-vue/styles.css"
  
  Vue.use(nullResponsive) // install globally
```
<br>


##  🛠 Config 
Pass in the Config props to the component when you place it in <b>any</b> of your vue files

```vue
  <template>
     <nullResponsive :config="nullConfig"/>
  </template>
   
   <script>
       export default{
          data(){
              return {
                       nullconfig : {
                          inputText: "This is the face of a lazy developer, still working on the mobile view mfjpm🙏",
                          imglink: "https://c.tenor.com/fkPxqJwOVhoAAAAM/qforce-stat.gif",
                          breakpoint: 1000,
                          bg_color: "#e6e6fb",
                          text_color: "#858586",
                      }
               }
         }
   </script>
```
<br>
Or you can pass in the config options when installing in your main ts or js file 

<br>
<br>

```js
   // main.js
   const nullconfig = {
    inputText: "This is the face of a lazy developer, still working on the mobile view mfjpm🙏🏽",
    breakpoint: 1000,
    imgPath: "img.jpeg",
    bg_color: "#e6e6fb",
    text_color: "#858586",
};
   Vue.use(nullResponsive, nullConfig)
```
<br> 

## Props
The props passed determines the splash screen that'd be displayed. Here's a table of all available props 

<br>

| Prop | Description | Type | Default
| --- | --- | --- | --- |
| inputText | Text content on the splash screen, could also include links using `<a><a/>` | *`string`* | none |
| breakpoint | Sets the breakpoint at which the splash screen comes in px up  e.g. `1000` | *`number`* | *`1000`* |
| bg_color | Sets the background color of the splash screen e.g `#e6e6f9` | *`string`* | `#fffff`|
| text_color | Sets the text color of the text content on the splash screen | *`string`* | *`black`*|
| imgPath | Adds a custom image to the content of the splash screen from the *`assets`* folder in the vue app. In usage it looks in the assets folder for the image e.g `imgPath: "splash.png"` | *`string`* | none|
| imglink | To be used when using external images not in your vue app e.g <br> `imglink: "https://res.cloudinary.com/ferventdev/image/upload/.../jesse.svg"` | *`string`* | none|
<br>

## Issues
If you experience any anomaly or bug while using the component, feel free to create an issue on this repo
[issues](https://github.com/Akohjesse/nullResponsive/issues/new/choose)
<br>

## 👷🏽 Contribution Guide

If you see any usecase or feature you'd like to explore & add to it, you can contribute by:

1. Forking this repository.
2. Clone the forked repository to your local machine.
3. Create a new branch with a name like this -feature/name-of-feature.
4. Run `npm` to install dependencies.
5. Write code and then commit changes.
6. Run `npm run build` to compile a build into the dist folder.
7. To test the feature or bug you've coded run ` npm link ` in your nullResponsive cloned root folder
8. On the local project you want to test the features on, run ` npm link null-responsive-vue`.
9. Now navigate back to the terminal on your cloned nullResponsive folder and then run `npm link ../path-to-test-project/node_modules/vue`. Now you can test your changes.
10. After all is done, push to your forked repository and then send a pull request.

<br>

## ⚖️ Licence

MIT (c) [Jesse Akoh](https://akohjesse.com).
