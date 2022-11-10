let UpArr = JSON.parse(localStorage.getItem("user-data"))||[];

document.querySelector("form").addEventListener("submit",joinFunction);

function joinFunction(event){
    event.preventDefault();
    let userStatus = true;

    let UpEmail = document.querySelector("input[type='email']").value;
    UpArr.forEach((item,index)=>{
        if(item.email==UpEmail) userStatus = false;
    })

    if(userStatus){
        let email = UpEmail;
        let pass = document.querySelector("input[type='password']").value;

        let obj = {
            email,
            pass
        }
        UpArr.push(obj);

        localStorage.setItem("user-data",JSON.stringify(UpArr));
        
    }
    else{
        alert(UpEmail+" Already Exists, Please try to login");
    }
}