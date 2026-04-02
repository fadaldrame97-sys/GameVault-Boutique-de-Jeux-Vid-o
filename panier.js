const article=JSON.parse(localStorage.getItem('cart'))||[];

const contenue=document.getElementById("panier-artcl");

article.forEach(game => {

    const div=document.createElement('div');
    div.className = "border p-4 m-2 rounded";
  div.className ="flex flex-col  jsutify-center items-center gap-4 border p-4 m-2 rounded shadow";
    div.innerHTML=`
      <img " src="${game.image}"
           
    <h2>${game.title}</h2>
    <h2>${game.price}</h2>
   
      <div class=" flex flex-row gap-10">
        <h2>-</h2>
        <h2>1</h2> 
    <h2>+</h2>
      </div>


      <div class=" flex flex-row gap-10"> 
      
       <h1>le prix total </h1>
      
      </div>
    
    
    
    `;  contenue.append(div);
    
});