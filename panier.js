const article=JSON.parse(localStorage.getItem('cart'))||[];

const contenue=document.getElementById("panier-artcl");

cart.forEach(game => {

    const div=document.createElement('div');

    div.innerHTML=`
    
    <h2>${game.tilte}</h2>
    <h2>${game.price}</h2>
    
    
    
    `;  contenue.append(div);
    
});