if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}
function ready(){
  var buttonDanger = document.getElementsByClassName("btn-danger")
  for(i=0;i<buttonDanger.length;i++)
  {
    var button = buttonDanger[i]
    button.addEventListener('click', removeCartItem)
  }
  var quantityInputs = document.getElementsByClassName('number')
  for(i=0;i<quantityInputs.length;i++)
  {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  var addtoCartButton = document.getElementsByClassName("btn")
  for(i=0;i<addtoCartButton.length;i++)
  {
    var button = addtoCartButton[i]
    button.addEventListener('click', addtoCartclicked)
  }
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function purchaseClicked()
{
  alert('Thank You for your purchase')
  var cartItems = document.getElementsByClassName('select-row')[0]
  while(cartItems.hasChildNodes())
  {
    cartItems.removeChild(cartItems.firstChild)
  }
 updateCartTotal()
}
function quantityChanged(event)
{
  var input = event.target
  if (isNaN(input.value) || input.value<=0)
  {
    input.value = 1
  }
  updateCartTotal()
}
function addtoCartclicked(event)
{
  var button = event.target
  var shopItem = button.parentElement
  var title = shopItem.getElementsByClassName('title')[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText.replace('20.99', '')
  var image = shopItem.getElementsByClassName('shop-image')[0].src
  console.log(image);
  addItemtoCart(title, price, image)
  updateCartTotal()
}
function addItemtoCart(title, price, image)
{
  var cartRow = document.createElement('div')
  cartRow.classList.add('select-div')
  var cartItems = document.getElementsByClassName('select-row')[0]
  var cartRowContent = `
  <div class="select">
    <div class="box">
      <img src="${image}" alt="">
      <h3>${title}</h3>
      <div class="price">${price}</span></div>
      <input class="number btn" type="number" name="quantity" id="sBox" value="1">
      <button class="btn-danger btn  item-1" id="item-1">Remove</button>
    </div>
</div>`
  cartRow.innerHTML = cartRowContent
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
  cartRow.getElementsByClassName('number')[0].addEventListener('change', quantityChanged)
}
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('select-row')[0]
  var cartRows = cartItemContainer.getElementsByClassName('select')
  total = 0
  for(i=0; i<cartRows.length;i++)
  {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('price')[0]
    var quantityElement = cartRow.getElementsByClassName('number')[0]
    var price = parseFloat(priceElement.innerHTML.replace('$', ' '))
    var quantity = quantityElement.value
    total = total + (price * quantity)

  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('total')[0].innerHTML = '$' + total
}