let favArr = JSON.parse(localStorage.getItem("Fav-Item"))||[];
displayFav(favArr);





function displayFav(Data){
    document.querySelector(".container").innerHTML = null;

    if(favArr.length == 0){
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let span = document.createElement("span");
        let h1 = document.createElement("h1");
        let div2 = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let a = document.createElement("a");

        div.setAttribute("class","FavEmpty");
        span.setAttribute("class","material-symbols-outlined")
        span.textContent = "favorite";
        h1.textContent = "You have no Saved Items";
        p1.textContent = "Sign in to sync your Saved Items";
        p2.textContent = "across all your devices.";
        a.textContent = "SIGN IN";
        a.setAttribute("href","./LogIn.html");

        div2.append(p1,p2);
        div1.append(span,h1,div2,a);
        div.append(div1);
        document.querySelector(".container").append(div);
    }
    else{
        let div = document.createElement("div");
        div.setAttribute("class","favFull");

        favArr.forEach((item,index)=>{

            let div1 = document.createElement("div");
            let image = document.createElement("img");
            let span = document.createElement("span");
            span.addEventListener("click",function(){
                deleteelement(item,index);
            })
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");

            span.textContent = "delete";
            span.setAttribute("class","material-symbols-outlined");
            image.setAttribute("src",item.image);
            p1.textContent = item.des;
            p2.textContent = "£"+item.price;
            p3.textContent = "Perfect";

    
            /*select div*/
            let div3 = document.createElement("div");
            let select = document.createElement("select");
            let option1 = document.createElement("option");
            let option2 = document.createElement("option");
            let option3 = document.createElement("option");
            let option4 = document.createElement("option");
            let option5 = document.createElement("option");
            let option6 = document.createElement("option");
            let option7 = document.createElement("option");
            let option8 = document.createElement("option");

            select.setAttribute("aria-label","Size");
            option1.textContent = "Select size";
            option1.setAttribute("value"," ");
            option2.textContent = "2XS - Chest 34";
            option2.setAttribute("value","111")
            option3.textContent = "XS - Chest 36";
            option3.setAttribute("value","222")
            option4.textContent = "S - Chest 38";
            option4.setAttribute("value","333")
            option5.textContent = "M - Chest 40";
            option5.setAttribute("value","444")
            option6.textContent = "L - Chest 42";
            option6.setAttribute("value","555")
            option7.textContent = "XL - Chest 44 - Out of stock";
            option7.setAttribute("value","666")
            option8.textContent = "2XL - Chest 46-48 - Out of stock";
            option8.setAttribute("value","666")

            select.append(option1,option2,option3,option4,option5,option6,option7,option8);
            div3.append(select);

            let buttonbag = document.createElement("button");
            buttonbag.textContent = "MOVE TO BAG";
            buttonbag.setAttribute("class","buttonbag");

            div1.append(image,span,p1,p2,p3,div3,buttonbag);
            div.append(div1);

            select.addEventListener("change",function(){
                buttonbag.style.backgroundColor = "white";
                buttonbag.style.color = "black";
                buttonbag.style.border = "2px solid green";
                buttonbag.style.cursor = "pointer";
                    
                buttonbag.addEventListener("click",function(){
                    
                    let cartArr = JSON.parse(localStorage.getItem("Cart-Item"))||[];

                    let status = true;

                    for(let i=0;i<cartArr.length;i++){
                        if(cartArr[i].des == item.des) status=false;
                    }

                    if(status){
                        /*adding to cartArr*/
                        cartArr.push({...item, perfect: "perfect"})
                        localStorage.setItem("Cart-Item",JSON.stringify(cartArr));
    
                        /*deleting from favArr*/
                        favArr.splice(index,1);
                        localStorage.setItem("Fav-Item",JSON.stringify(favArr));
                        displayFav(favArr);
                    }
                    else{
                        alert("Item is already in the Cart");
                    }
                })
            })
        })
        
        document.querySelector(".container").append(div);
    }
}




/* <div class="favFull">
    <div>
        <img>
            <button></button>
        </img>
        <p></p>  des
        <p></p>  price
        <p></p>  perfect
        <div>
            <select aria-label="Size">
                <option value="">Select size</option>
                <option value="202523002">2XS - Chest 34</option>
                <option value="202523006">XS - Chest 36</option>
                <option value="202523007">S - Chest 38</option>
                <option value="202523001">M - Chest 40</option>
                <option value="202523005">L - Chest 42</option>
                <option value="202523000">XL - Chest 44 - Out of stock</option>
                <option value="202523004">2XL - Chest 46-48 - Out of stock</option>
            </select>
            <span class="indicator__5B7Y"></span>
        </div>
        <button class="buttonbag">Move to bag</button>
    </div>
</div> */

        // <div class="FavEmpty">
        //     <div>
        //         <span class="material-symbols-outlined">
        //             favorite
        //         </span>
        //         <h1>You have no Saved Items</h1>
        //         <div>
        //             <p>Sign in to sync your Saved Items</p> 
        //             <p>across all your devices.</p>
        //         </div>
        //         <a href="./LogIn.html">SIGN IN</a>
        //     </div>
        // </div>


    function deleteelement(item,index){

        favArr.splice(index,1);
        localStorage.setItem("Fav-Item",JSON.stringify(favArr))
        displayFav(favArr);
    }
