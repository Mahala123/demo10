// var items = document.getElementsByClassName("list-group-item");
// items[0].style.fontWeight = "bold";
// items[1].style.fontWeight = "bold";
// items[2].style.fontWeight = "bold";
// items[3].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";
// var items1 = document.getElementsByClassName("list-item1");
// items1[0].style.fontWeight = "bold";
// //var items1 = document.getElementsByTagName("li");
// //items[1].style.fontWeight = "bold";
// items1[0].style.backgroundColor = "green";
var itemList = document.getElementById("items");
var filterList=document.getElementById("filter");
itemList.addEventListener("click", removeItem);
//removeItem
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
filterList.addEventListener("keyUp",filterItems)
function filterItem()
{
  var text=e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li')
  Array.form(items).forEach(function(item))
  {
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
      itemList.style.display='block'  
    }
    else
    {
      item.style.display='none'

    }
  }
}
