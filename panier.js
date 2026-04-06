const article=JSON.parse(localStorage.getItem('cart'))||[];

const contenue=document.getElementById("panier-artcl");
const prixTotal=document.getElementById("prix-total");

let totale=0

article.forEach(game => {

    const div=document.createElement('div');
    div.className = "border p-4 m-2 rounded";
  div.className ="flex flex-col  jsutify-center items-center gap-4 border p-4 m-2 rounded shadow";
    div.innerHTML=`
     <img src="${game.image}" class="w-auto">
           
    <h2 class="font-semibold">${game.title}</h2>
    
    <h2 class="price  font-bold">${game.price} DH</h2>
   
      <div class=" flex flex-row gap-10">
        <button class="minus font-bold">-</button>
        <h2 class="qnt font-bold">1</h2> 
    <button class="plus font-bold">+</button>
     <button  class=" delet font-bold text-red-700">X</button>
      </div>


      <div class=" flex flex-row gap-10"> 
      
       
      
      </div>
    
    
    
    `;  contenue.append(div);

const plus = div.querySelector(".plus");
const mainus = div.querySelector(".minus");
const efface = div.querySelector(".delet");
const quantity = div.querySelector(".qnt");
const prixElement = div.querySelector(".price");
const prixTotal = document.getElementById("prix-total");
const commande= document.getElementById("commande");

totale += game.price;
plus.addEventListener('click', () => {

    let quantite = Number(quantity.textContent);

    quantite++;
    quantity.textContent = quantite;

    prixElement.textContent = game.price * quantite + " DH";

    totale += game.price;
    prixTotal.textContent = totale + " DH";
});
mainus.addEventListener('click',()=>{

let quantite=Number(quantity.textContent);

 if (quantite > 1) {
           quantite--;
           quantity.textContent=quantite;

    prixElement.textContent=game.price* quantite+ "DH";        
        
  totale -= game.price;
        prixTotal.textContent = totale + " DH";
}


});
efface.addEventListener('click',()=>{

 let quantite = Number(quantity.textContent);
        totale-= game.price * quantite;
        prixTotal.textContent = totale + " DH";
        div.remove(); 


});


  
});

prixTotal.textContent=`${totale} DH`;



function totalPanier(){

let total =0;
const toutlesDiv=contenue.querySelectorAll('.cart-item');

toutlesDiv.forEach(div=>{
const prix=Number(div.querySelector('.price').dataset.price);
const qntit=Number(div.querySelector('.qnt').textContent);
total+=prix*qntit;



}); prixTotal.textContent=total+"DH";

}

commande.addEventListener('click',()=>{

  localStorage.removeItem('cart');
contenue.innerHTML="";

prixTotal.textContent="0 DH";

alert("La commande est bien passée!")

commande.textContent="Y a pas de commande";



});

