import { Content } from "./content.js";

export const NewBlog = (data, id) => {
    if( data) {
                let foundData=data.find((data)=>{
                      return data.id===id;
                });
              document.getElementById("content").textContent=" ";
              document.getElementById("aside").textContent=" ";

              Content(data,foundData.id);
          
            }
            else{
              throw new Error("No data found");
            }
               
}
