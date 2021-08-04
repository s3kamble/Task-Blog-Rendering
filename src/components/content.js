import { Aside } from "./aside.js";


export const Content = (data,id="2rvqpdbpka3n3fhd")=>{
let markUp=document.getElementById("content");

 let markUpDiv=document.createElement("div");
 markUpDiv.className="markUp-div";

 let mainContentDiv=document.createElement("div");
 mainContentDiv.className="main-Content";
 
 let postId= data.find(post => post.id === id);
 
 let postTitle=document.createElement("h2");
 postTitle.textContent= postId.title;
 postTitle.style.fontSize="2rem";
 
 let postImage=document.createElement("img");
 postImage.src=postId.imageUrl;
postImage.className="blog-image";

 let postContent=document.createElement("p");
 postContent.textContent=postId.content;
 postContent.className="blog-description";

 mainContentDiv.appendChild(postTitle);
 mainContentDiv.appendChild(postImage);
 mainContentDiv.appendChild(postContent);
 
 
 markUpDiv.appendChild(mainContentDiv);
 Aside(data,postId.links);
 markUp.appendChild(markUpDiv);
}