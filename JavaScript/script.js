
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {

    document.querySelector('#btnPaytm').style.display = 'none';
    document.querySelector('#btnBhim').style.display = 'none';
}


const btnphonepe = document.getElementById('btnPhonepe');
const btngooglepay = document.getElementById('btnGooglepe');
const btnpaytm = document.getElementById('btnPaytm');
const btnbhim = document.getElementById('btnBhim');
const phonenumber = document.getElementById('editableText');
const btnsend = document.getElementById('sendButton')



btnphonepe.addEventListener('click' , function(){
    const url = "http://localhost:8080/PhonePe"; 

    fetch(url)
      .then((response) => {
        console.log(response);

      })
      .catch((error)=>{
        console.log(error);
        console.log("Payment is done by PhonePe")
      })
})

btngooglepay.addEventListener('click' , function(){
    const url = "http://localhost:8080/GooglePay"; 

    fetch(url)
      .then((response) => {
        console.log(response);

      })
      .catch((error)=>{
        console.log(error);
        console.log("Payment is done by Google Pay")
      })
})


btnpaytm.addEventListener('click' , function(){
    const url = "http://localhost:8080/Paytm"; 

    fetch(url)
      .then((response) => {
        console.log(response);

      })
      .catch((error)=>{
        console.log(error);
        console.log("Payment is done by Paytm")
      })
})


btnbhim.addEventListener('click' , function(){
    const url = "http://localhost:8080/BHIM-UPI"; 

    fetch(url)
      .then((response) => {
        console.log(response);

      })
      .catch((error)=>{
        console.log(error);
        console.log("Payment is done by BHIM-UPI")
      })
})



btnsend.addEventListener('click' , function(){

    const url = "http://localhost:8080/send"; 

    let pnumber = phonenumber.value;
    
    const data = {
       amount : 599,
       phone : `${pnumber}`
    };

   
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    
    const request = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
    };

    fetch(url , request)
    .then(res =>{
        return res.json();
    })
    .catch(error=>{
        console.log(error);
        console.log(data);
    })
})