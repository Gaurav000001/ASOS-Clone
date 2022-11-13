/* <div class="cartEmpty">
    <div>
        <span class="material-symbols-outlined">
            work
        </span>
        <h1>Your bag is empty</h1>
        <div>
        <p>Items remain in your bag for 60 minutes, and then they’re moved to your Saved Items.</p>
        </div>
        <div>
            <p>Sign in to see your bag</p>
            <p>and get shopping!</p>
        </div>
        <a href="./LogIn.html">SIGN IN</a>
    </div>
</div> */

let cartArr = JSON.parse(localStorage.getItem("Cart-Item"))||[];
displayCart(cartArr);


function displayCart(Data){
    document.querySelector(".container").innerHTML = null;

    if(cartArr.length == 0){
        let div = document.createElement("div");
        div.setAttribute("class","cartEmpty");

        let div1 = document.createElement("div");

        let span = document.createElement("span");
        span.setAttribute("class","material-symbols-outlined");
        span.textContent = "work";

        let h1 = document.createElement("h1");
        h1.textContent = "Your bag is empty";

        let div2 = document.createElement("div");
        let p = document.createElement("p");
        p.textContent = "Items remain in your bag for 60 minutes, and then they’re moved to your Saved Items.";
        div2.append(p);

        let div3 = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        div3.append(p1,p2);

        let a = document.createElement("a");
        a.textContent = "SIGN IN";
        a.setAttribute("href","./LogIn.html");

        div1.append(span,h1,div2,div3,a);
        div.append(div1);
        document.querySelector(".container").append(div);
    }
    else{

        let div = document.createElement("div");
        div.setAttribute("class","cartFull");

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("id","first");

        let div3 = document.createElement("div");
        let div3_h1 = document.createElement("h1");
        div3_h1.textContent = "MY BAG";
        let div3_p = document.createElement("p");
        div3_p.textContent = "Items are reserved for 60 minutes";
        div3.append(div3_h1, div3_p);

        let div4_in = document.createElement("div");
        div4_in.setAttribute("class","product_here");

        

        let div7 = document.createElement("div");
        let div7_span1 = document.createElement("span");
        div7_span1.textContent = "SUB-TOTAL";
        let div7_span2 = document.createElement("span");
        div7_span2.textContent = "£"+cartArr.reduce((a,b)=>{
            return a + Number(b.price);
        },0);

        div7.append(div7_span1, div7_span2);

        let div8 = document.createElement("div");
        let div8_image = document.createElement("img");
        div8_image.src = "https://cdn-icons-png.flaticon.com/512/2769/2769339.png";
        let div9 = document.createElement("div");
        let div9_h2 = document.createElement("h2");
        div9_h2.textContent = "FREE* STANDARD DELIVERY";
        let div9_p = document.createElement("p");
        div9_p.textContent = "Faster delivery option available to most countries.";
        let div9_a = document.createElement("a");
        div9_a.href = "#";
        div9_a.textContent = "More Info";
        div9.append(div9_h2, div9_p, div9_a);
        div8.append(div8_image, div9);

        div2.append(div3, div4_in, div7, div8);

        let div10 = document.createElement("div");
        let div10_h1 = document.createElement("h1");
        div10_h1.textContent = "TOTAL";

        let div11 = document.createElement("div");
        let div11_h2 = document.createElement("h2");
        div11_h2.textContent = "Sub-total";
        let div11_p = document.createElement("p");
        div11_p.textContent = "£"+cartArr.reduce((a,b)=>{
            return a + Number(b.price);
        },0);

        div11.append(div11_h2, div11_p);

        let div12 = document.createElement("div");
        let div12_h2 = document.createElement("h2");
        div12_h2.textContent = "Delivery";
        let div12_image = document.createElement("img");
        div12_image.src = "https://cdn-icons-png.flaticon.com/512/545/545674.png";
        div12.append(div12_h2, div12_image);

        let div10_select = document.createElement("select");
        let div10_select_option1 = document.createElement("option");
        div10_select_option1.textContent = "Standard Delivery (Free)";
        let div10_select_option2 = document.createElement("option");
        div10_select_option2.textContent = "Express Delivery (£22.50)";
        div10_select.append(div10_select_option1, div10_select_option2);

        let div10_a = document.createElement("a");
        div10_a.textContent = "CHECKOUT";
        div10_a.href = "#";

        let div10_h3 = document.createElement("h3");
        div10_h3.textContent = "WE ACCEPT:";
        let div10_image = document.createElement("img");
        div10_image.src = "https://assets.asosservices.com/asos-finance/images/marketing/single.png";
        let div10_p = document.createElement("p");
        div10_p.textContent = "Got a discount code? Add it in the next step.";

        div10.append(div10_h1, div11, div12, div10_select, div10_a, div10_h3, div10_image, div10_p);

        div1.append(div2, div10);
        div.append(div1);
        document.querySelector(".container").append(div);


        cartArr.forEach((item,index)=>{
            let div4 = document.createElement("div");
            let proimage = document.createElement("img");
            proimage.src = item.image;

            let div5 = document.createElement("div");
            let div5_p1 = document.createElement("p");
            div5_p1.textContent = "£"+item.price;
            let div5_p2 = document.createElement("p");
            div5_p2.textContent = item.des;

            let div6 = document.createElement("div");
            let div6_span = document.createElement("span");
            div6_span.textContent = "Perfect";
            let div6_select1 = document.createElement("select");
            let div6_select1_option = document.createElement('option');
            div6_select1_option.textContent = "W32 L32";
            div6_select1.append(div6_select1_option);
            let div6_select2 = document.createElement("select");
            let div6_select2_option = document.createElement("option");
            div6_select2_option.textContent = "Qty 1";
            div6_select2.append(div6_select2_option);
            div6.append(div6_span, div6_select1, div6_select2);

            let div5_btn = document.createElement("button");
            div5_btn.textContent = "Save for later";
            div5_btn.addEventListener("click",function(){

                let favArr = JSON.parse(localStorage.getItem("Fav-Item"))||[];

                favArr.push(item);
                localStorage.setItem("Fav-Item",JSON.stringify(favArr));

                cartArr.splice(index,1);
                localStorage.setItem("Cart-Item",JSON.stringify(cartArr));
                displayCart(cartArr);
            })
            div5.append(div5_p1, div5_p2, div6, div5_btn);

            let deleteitem = document.createElement("span");
            deleteitem.textContent = "close";
            deleteitem.setAttribute("class","material-symbols-outlined");
            deleteitem.addEventListener("click",function(){

                cartArr.splice(index,1);
                localStorage.setItem("Cart-Item",JSON.stringify(cartArr));
                displayCart(cartArr);
            })

            div4.append(proimage, div5, deleteitem);
            document.querySelector(".product_here").append(div4);
        })
        
    }
}




/* <div class="cartFull">    div
    <div>                 div1
        <div id="first">  div2
            <div>         div3
                <h1>MY BAG</h1>
                <p>Items are reserved for 60 minutes</p>
            </div>
            <div>         ----div4----
                <img src="" alt="">
                <div>               div5
                    <p>price</p>
                    <p>des</p>
                    <div>           div6
                        <span>Perfect</span>
                        <select name="" id="">
                            <option value="">W32 L32</option>
                        </select>
                        <select name="" id="">
                            <option value="">Qty 1</option>
                        </select>
                    </div>
                    <button>Save for later</button>
                </div>
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
            <div>       -----div7-----
                <p>SUB-TOTAL</p>
                <p>total price</p>
            </div>
            <div>        -----div8-----
                <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="">
                <div>        """""div9
                    <h2>FREE* STANDARD DELIVERY</h2>
                    <p>Faster delivery option available to most countries.</p>
                    <a href="#">More Info</a>
                </div>
            </div>
        </div>
        <div id="second">       ---div10----
            <h1>TOTAL</h1>
            <div>                   div11
                <h2>Sub-total</h2>
                <p>totalprice</p>
            </div>
            <div>                   div12
                <h2>Delivery</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/545/545674.png" alt="">
            </div>
            <select name="" id="">
                <option value="">Standard Delivery (Free)</option>
                <option value="">Express Delivery (£22.50)</option>
            </select>
            <h3>WE ACCEPT:</h3>
            <img src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="">
            <p>Got a discount code? Add it in the next step.</p>
        </div>
    </div>
</div> */