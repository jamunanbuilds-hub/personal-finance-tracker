let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(type){

let desc = document.getElementById("desc").value;
let amount = document.getElementById("amount").value;

if(desc=="" || amount==""){
alert("Enter details");
return;
}

let transaction={
desc:desc,
amount:Number(amount),
type:type
};

transactions.push(transaction);

localStorage.setItem("transactions",JSON.stringify(transactions));

showTransactions();
}

function showTransactions(){

let list = document.getElementById("list");
list.innerHTML="";

let balance=0;

transactions.forEach(t => {

let li=document.createElement("li");

li.innerText = t.desc + " - " + t.amount;

li.classList.add(t.type);

list.appendChild(li);

if(t.type==="income"){
balance += t.amount;
}else{
balance -= t.amount;
}

});

document.getElementById("balance").innerText="Balance: "+balance;

}

showTransactions();