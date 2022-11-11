let ProductArr = [

    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/nike-blazer-mid-77-jumbo-trainers-in-white-and-black/24280232-1-white?$n_320w$&wid=317&fit=constrain",
      "des":"Nike Blazer Mid '77 Jumbo trainers in white and black",
      "price":"£99.95"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    {
      "image":"https://images.asos-media.com/products/topman-borg-jacket-in-rust/200229300-1-brown?$n_320w$&wid=317&fit=constrain",
      "des":"Topman borg jacket in rust",
      "price":"£69.00"
    },
    
    
    ];

displayItems(ProductArr);

function displayItems(Data){
    document.getElementById("container").innerHTML = null;

    Data.forEach((item,index)=>{
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = item.image;

        let p = document.createElement("p");
        p.textContent = item.des;

        let div1 = document.createElement("div");

        let p1 = document.createElement("p");
        p1.textContent = item.price;

        let btn = document.createElement("img");
        btn.src = "https://cdn-icons-png.flaticon.com/512/2031/2031035.png";
        btn.addEventListener("click",function(){
            clicked(item,index);
        });

        div1.append(p1,btn);
        div.append(image,p,div1);
        document.getElementById("container").append(div);

    })
}

let favArr = JSON.parse(localStorage.getItem("Fav-Item"))||[];

function clicked(item,index){

    let image = document.querySelector(`#container>div:nth-child(${index+1})>div>img`);
   
    image.src = "https://cdn-icons-png.flaticon.com/512/2030/2030957.png";

    let status = true;
    favArr.forEach((element,index)=>{
        if(item.image == element.image) status = false;
    })

    if(status){
        favArr.push(item);
        localStorage.setItem("Fav-Item",JSON.stringify(favArr));
    }

    image.addEventListener("click",function(){
      
      favArr.splice(index,1);
      localStorage.setItem("Fav-Item",JSON.stringify(favArr));

        anotherclick(item,index);
    })
}

function anotherclick(item,index){
    let image = document.querySelector(`#container>div:nth-child(${index+1})>div>img`);
    image.src = "https://cdn-icons-png.flaticon.com/512/2031/2031035.png";
}
