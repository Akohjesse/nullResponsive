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
<br>

##  🛠 Config 
As a highly customizable package, you'd have to pass in the Config props to the component when you place it in <b>any</b> of your vue files

```vue
  <template>
     <nullResponsive :config="nullConfig"/>
  </template>
   
   <script>
       export default{
          data(){
              return {
                       nullconfig : {
                          inputText: "Mafejo pa mi 🙏🏽",
                          imgPath: "logo.png",
                          breakpoint: 1000,
                          bg_color: "lavender",
                          text_color: "grey",
                      }
               }
         }
   </script>
```

