    // Function to calculate the product and update the result field
    function calc(input) {
        var parentDiv = input.parentNode;
        var qty = parseFloat(parentDiv.querySelector('input[name="qty"]').value) || 0;
        var rate = parseFloat(parentDiv.querySelector('input[name="rate"]').value) || 0;
        var amtField = parentDiv.querySelector('input[name="amt"]');
        amtField.className = 'numberInput'
        amtField.value = qty * rate;
    }


// Function to add new item input fields
document.getElementById('create').addEventListener('click', function() {
            var itemsDiv = document.getElementById('items');
            var MainBox = document.getElementById("MainBox");
            MainBox.style.display = "block"
            var newItemDiv = document.createElement('div');
            newItemDiv.className = "item";
            newItemDiv.innerHTML = `
                <div id="serialNumberContainer"><p class="serial" id="num">${nextSerialNumber}</p></div>
                <input type="text" name="message" oninput="message(this)">
                <input type="text">
                <input type="number" name="qty" oninput="calc(this)">
                <input type="number" name="rate" oninput="calc(this)">
                <input name="amt" readonly >
                <button class="del" onclick="deleteItem(this)"><i class="fa-solid fa-x"></i></button>
            `;
            itemsDiv.appendChild(newItemDiv);
});


var sumInputFieldValues = document.getElementById("sumInputFieldValues");
sumInputFieldValues .onclick = function() {
    var inputs = document.getElementsByClassName('numberInput');
    var sum = 0;

    for (var i = 0; i < inputs.length; i++) {
        sum += parseFloat(inputs[i].value) || 0;
    }

    var gstRate = parseFloat(document.getElementById('rate')) || 0;
    var gstAmount = (sum * gstRate) / 100;
    document.getElementById("totalAmount").innerText = gstAmount;
    var add = sum + gstAmount;
    add.toFixed(2)
    document.getElementById("sum").innerText  = add;
    
}



function total(){
    var inputs = document.getElementsByClassName('numberInput');
    var sum = 0;

    for(var i = 0; i < inputs.length; i++){
        sum += parseFloat(inputs[i].value);
    }
    
  
    document.getElementById("totalNum").innerHTML = sum;

}
        
   


   //Creating amount input
    var create = document.getElementById("create");
    create.onclick = function(){
        var AmountInput = document.createElement("input");
        AmountInput.name = "amountInput";
        var input = document.createElement('input');
        input.className = 'numberInput';

    };





    //Printing the Webpage
     document.getElementById("print").onclick = function(){
         document.getElementById("create").style.display = "none";
         document.getElementById("print").style.display = "none";
         print();
         document.getElementById("create").style.display = "block";
         document.getElementById("print").style.display = "block";
     };




  var alerts = document.getElementById("alerts")
   alerts.onclick = function(){

    var sum = document.getElementById("sum").innerHTML;
    var Bill = document.getElementById("BillPaid").value;
    var minus = sum - Bill;
    document.getElementById("remains").innerText =  minus;

}

function delBtn() {
    let delButton = document.querySelectorAll('.del');
    delButton.forEach(() => {
        delButton.style.display = "none"
    });
}


var Bill = parseInt(localStorage.getItem("BillNumber")) || 0;
document.getElementById("BillNumber").innerHTML = Bill;


  document.getElementById("print").onclick = function(){
  delBtn()
 
    Bill++;
    localStorage.setItem("BillNumber", Bill);

    var BillNumber = document.getElementById("BillNumber")
    BillNumber.innerHTML = `${Bill}`;
  

     document.getElementById("shopBtn").style.display = "none"
     document.getElementById("shopNameInput").style.display = "none";
     document.getElementById("mobBtn").style.display = "none"
     document.getElementById("shopNumberInput").style.display = "none"
     document.getElementById("create").style.display = "none";
     document.getElementById("print").style.display = "none";
     document.getElementById("name").style.marginLeft = "1px"
     document.getElementById("MainBox").style.marginLeft = "25px"
     print();
     document.getElementById("MainBox").style.marginLeft = "0px"
     document.getElementById("name").style.marginLeft = "10px"
     document.getElementById("create").style.display = "block";
     document.getElementById("print").style.display = "block";

     document.getElementById("shopBtn").style.display = "inline"
     document.getElementById("shopNameInput").style.display = "inline";
     document.getElementById("mobBtn").style.display = "inline"
     document.getElementById("shopNumberInput").style.display = "inline"


  }



  function delBtn() {
    let delButtons = document.querySelectorAll('.del');
    delButtons.forEach(button => {
        button.style.display = "none";
    });
}



 document.addEventListener('DOMContentLoaded', function(){


    //Get Today's Data
    var today = new Date();

      
    

    //Format the date as YYYY-MM-DD (required format for input type="date")
    var formattedDate = today.toISOString().slice(0, 10);

    //Set the value of the input field
    document.getElementById("currentDate").value = formattedDate;

 })


 function showTime(){
     document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
 }

 showTime();
 setInterval(function(){showTime()},1000)





 let nextSerialNumber = 1;
 create.onclick = function (){
     nextSerialNumber++;
}


function updateSerialNumbers() {
    let serialNumbers = document.querySelectorAll('.serial');
    serialNumbers.forEach((serialNumber, index) => {
        serialNumber.textContent = index + 1;
    });
}

function deleteItem(button) {
    button.parentNode.remove();   
     updateSerialNumbers();
}


  var shopBtn = document.getElementById("shopBtn");
  shopBtn.onclick = function(){
    var shopNameInput = document.getElementById("shopNameInput").value;
    var shopNameP = document.getElementById("shopNameP");
    shopNameP.innerHTML = shopNameInput;

  }


  var MobBtn = document.getElementById("mobBtn");
  MobBtn.onclick = function(){
    var MobNameInput = document.getElementById("shopNumberInput").value;
    var MobileNumber = document.getElementById("MobileNumber");
    MobileNumber.innerHTML = MobNameInput;
   

    if(MobNameInput.length < 10){
        alert("Your mobile number is incorrect")
    }
  }



  var qty = document.getElementById("qty");
  if(qty.innerHTML = ""){
      alert("write something")
  }


