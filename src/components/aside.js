import { NewBlog } from "./newBlog.js";

export const Aside = (data,links) =>{
let markUp=document.getElementById("aside");

    let postLinks=document.createElement("div");
    postLinks.textContent="Related Links";
    postLinks.className="related-links";
   
    let blogLinks=document.createElement("div");
    blogLinks.style.borderTop="1px solid grey";
    blogLinks.style.marginTop="2vh";


    
       links.forEach(link => {
       let linkElement=document.createElement("p");
       linkElement.id=link.id;
       linkElement.textContent=link.title;
       linkElement.style.fontSize="1.5rem";
       linkElement.style.marginTop="1vh";
       linkElement.className="personalLink";
       
       linkElement.addEventListener('click', event => {
        NewBlog(data, linkElement.id);
    })
      blogLinks.appendChild(linkElement);  
      
    });
    
    postLinks.appendChild(blogLinks);
    markUp.appendChild(postLinks);
}