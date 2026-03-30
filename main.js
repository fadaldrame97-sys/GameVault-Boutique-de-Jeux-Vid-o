let cart = JSON.parse(localStorage.getItem('cart')) || [];
// afficher les cards

const gameCards=document.getElementById('gameContainer');

games.forEach(game=>{
    const card=document.createElement("div");
    card.className= "bg-white rounded-lg shadow-md overflow-hidden m-2";
    card.innerHTML=`
    <img src="${game.image}" class="w-full h-48 object-cover">
     <div class="p-4">
            <h2 class="font-bold text-lg">${game.title}</h2>
            <p class="text-gray-600">${game.price} DH</p>

            <button class=" add bg-yellow-500 border border-black text-white px-4 py-2 mt-2 rounded">
                Ajouter au panier
            </button>
        </div>
    
    `;
     gameCards.appendChild(card);


     const button= document.querySelector('.add');
     button.addEventListener('click',()=>{
    cart.push(game);
    localStorage.setItem('cart',JSON.stringify(cart));
     });   alert(`${game.title}ajouté au panier`)

});

