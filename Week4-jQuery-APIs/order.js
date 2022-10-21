

let info_box = document.getElementById("info-msg");

const item_checkboxes = document.querySelectorAll("#item-selection input");

let total_price = 0
for (let this_checkbox of item_checkboxes){
  this_checkbox.onclick = function(){
    info_box.style["display"] = "block";
    
    let this_price = this_checkbox.parentElement.querySelector("span.price").textContent.replace("$","");

    this_checkbox.checked ? total_price += Number(this_price) : total_price -= Number(this_price)
    
    const customer_name = document.getElementById("myname");
    
    info_box.textContent = "Hey " + customer_name.value + "! The total costs is: $" + total_price;
  }
}
