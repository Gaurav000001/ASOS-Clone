let UpArr = JSON.parse(localStorage.getItem("user-data"))||[];

document.querySelector("form").addEventListener("submit", loginFunction);

function loginFunction(event){
    event.preventDefault();
    let check = false;

    let email = document.querySelector("input[type='email']").value;
    let pass = document.querySelector("input[type='password']").value;

    UpArr.forEach((item,index)=>{
        if(email==item.email && pass==item.pass) check = true;
    })

    if(check) alert("LogIn Successfull!");
    else alert("Email or Password is incorrect!");
}