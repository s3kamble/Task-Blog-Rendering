import {Content} from "./components/content.js"
let dataUrl="https://s3kamble.github.io/webpage-rendering-data/blogData.json";



fetch(dataUrl)
.then((response)=>{
    return response.json();
})
.then((data)=>{
   Content(data);
       
})
.catch((error)=>{
   throw new Error("Error :",error);
})


