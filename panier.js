const article=JSON.parse(localStorage.getItem('cart'))||[];

const contenue=document.getElementById("panier-artcl");
const prixTotal=document.getElementById("prix-total");

let totale=0;

article.forEach(game => {

    const div=document.createElement('div');
    div.className = "border p-4 m-2 rounded";
  div.className ="flex flex-col  jsutify-center items-center gap-4 border p-4 m-2 rounded shadow";
    div.innerHTML=`
     <img src="${game.image}" class="w-40">
           
    <h2>${game.title}</h2>
    
    <h2>${game.price}</h2>
   
      <div class=" flex flex-row gap-10">
        <button id="mainus">-</button>
        <h2>1</h2> 
    <button id="plus">+</button>
     <button id="delet" class="text-red-700">X</button>
      </div>


      <div class=" flex flex-row gap-10"> 
      
       
      
      </div>
    
    
    
    `;  contenue.append(div);
    

    totale+=game.price;
});

prixTotal.textContent=`${totale} DH`;

const plus=document.getElementById("puls");
const mainus=document.getElementById("mainus");
const delet=document.getElementById("delet");


plus.addEventListener('click',()=>{



});
