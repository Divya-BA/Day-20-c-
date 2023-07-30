var h1=document.createElement("h1");
h1.setAttribute("class","head");
h1.innerHTML="CryptoCurrency";
document.body.append(h1);
var res=fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=");
res.then((data)=>data.json()).then((data1)=>//console.log(data1.coins));
{
    for(var i=0;i<data1.coins.length;i++)
    {
        var div=document.createElement("div");
        div.innerHTML=`<div class="card border-primary mb-3" >
        <h1 class="h">${data1.coins[i].name}</h1>
        <img src="${data1.coins[i].icon}" class="card-img-top" alt="...">
        <div class="card-body text-success">
          <p class="card-text">Symbol:${data1.coins[i].symbol}</p>
          <p class="card-text">Rank:${data1.coins[i].rank}</p>
          <p class="card-text">Price:${data1.coins[i].price}</p>
          <p class="card-text">TotalSupply:${data1.coins[i].totalSupply}</p>
          
          <a href="${data1.coins[i].twitterUrl}" target="_blank"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
          <a href="${data1.coins[i].websiteUrl}" target="_blank" class="badge badge-warning">Visit ${data1.coins[i].name} Website</a>
        </div>
      </div>`;
        document.body.append(div);



        
    }

})