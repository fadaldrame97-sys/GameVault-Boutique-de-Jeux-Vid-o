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
    
    <h2 class="price">${game.price}</h2>
   
      <div class=" flex flex-row gap-10">
        <button class="minus">-</button>
        <h2 class="qnt">1</h2> 
    <button class="plus">+</button>
     <button class="delet" class="text-red-700">X</button>
      </div>


      <div class=" flex flex-row gap-10"> 
      
       
      
      </div>
    
    
    
    `;  contenue.append(div);

const plus = div.querySelector(".plus");
const mainus = div.querySelector(".minus");
const efface = div.querySelector(".delet");
const quantity = div.querySelector(".qnt");
const prixElement = div.querySelector(".price");


plus.addEventListener('click',()=>{

    
quantity.textContent++;

prixElement.textContent=game.price*quantity.textContent+ "DH";

});


mainus.addEventListener('click',()=>{

 if (quantity.textContent > 1) {
            quantity.textContent--;
        }

});



    

    totale+=game.price;
});

prixTotal.textContent=`${totale} DH`;

