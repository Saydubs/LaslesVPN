const inputMonth = document.getElementById("inputMonth");
const standartPlan = document.getElementById("standartPlan");
const premiumPlan = document.getElementById("premiumPlan");
const result = document.getElementById("result");
let month;
let amount;
let proMonth;
let plan;

function calculate(){
    if(standartPlan.checked){
        month=Number(inputMonth.value);
        discount(month,9);
 }
    else if(premiumPlan.checked){
        month=Number(inputMonth.value);
        discount(month,12);
    }
    else{
        result.textContent = "Choose your plan";
    }
}

function discount(month,plan){
    if(month<=3){
        amount=month*plan;
        proMonth=Math.round(amount/month);
        return result.textContent = amount+" Euro " +`$${proMonth}/mo.`;
    }
    else if(month>3 && month<=6){
        amount=Math.round((month*plan)*0.9);
        proMonth=Math.round(amount/month);
        return result.textContent = amount+" Euro " +`$${proMonth}/mo.`;
   
    }
    else if(month>6 && month<=9){
        amount=Math.round((month*plan)*0.8);
        proMonth=Math.round(amount/month);
        return result.textContent = amount+" Euro " +`$${proMonth}/mo.`;
    }
    else if(month>9 && month<=12){
        amount=Math.round((month*plan)*0.7);
        proMonth=Math.round(amount/month);
        return  result.textContent = amount+" Euro " +`$${proMonth}/mo.`;
    }
}