# nullResponsive

<div align="left">
  <img width="500px" src="https://github.com/Akohjesse/nullResponsive/blob/main/src/assets/logo.png?raw=true">
  <br>
  <h3>For times where you are either lazy to write media queries or you don't have a need for a mobile adaptive website</h3> 
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
  import nullResponsive from "null-responsive-vue".   // import base css file
  
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


