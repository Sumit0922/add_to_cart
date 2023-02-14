const product = [
    {
        id: 0,
        image: '"C:/Users/Sumit Rahangdale/Downloads/bb-removebg-preview.png"',
        title: 'Samsung S22 Mobile',
        price: 18000,
        quantity: 1,
        TotalQuantity:10,
    },
    {
        id: 1,
        image: '"C:/Users/Sumit Rahangdale/Downloads/bb2-removebg-preview.png"',
        title: 'Air Pods Pro',
        price: 22499,
        quantity: 1,
        TotalQuantity:10,
    },
    {
        id: 2,
        image: '"C:/Users/Sumit Rahangdale/Downloads/bb1-removebg-preview.png"',
        title: 'Sony Headphone',
        price: 23999,
        quantity: 1,
        TotalQuantity:10,
    },
    {
        id: 3,
        image: '"C:/Users/Sumit Rahangdale/Downloads/bb3-removebg-preview.png"',
        title: 'leather Bag',
        price: 7999,
        quantity: 1,
        TotalQuantity:10,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price, quantity, TotalQuantity} = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹: ${price}.00</h2>` +
        `<h3>Quantity: ${TotalQuantity}.00</h3>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')
// array push
var cart = [];
function addtocart(a) {
  
    var res = cart.find((item) => item.id === product[a].id)
    if (res) { 
        alert("This Product are already added in Cart Area");
       /// this below code for the adding Quantity on cart area if we click add to cart again;
    //    var index = cart.findIndex((item) => item.id === res.id);
    //     cart[index].quantity = cart[index].quantity + 1;
    //     displaycart();
    //     product[a].TotalQuantity = product[a].TotalQuantity - 1;
    //      displayproduct();
             

    }
    else {
        cart.push({ ...categories[a] });
        displaycart();
         product[a].TotalQuantity = product[a].TotalQuantity - 1;
         displayproduct();
        }
    } 


function delElement(id) {
    
    var index= cart.findIndex((item) => item.id===id)
    var raw =product.findIndex((item) => item.id === id)
    product[raw].TotalQuantity = product[raw].TotalQuantity + cart[index].quantity;//check
    displayproduct();
    cart.splice(index,1);
    displaycart();

   
}


// increment button
function incrementQuantity(id) {
    var res = cart.find((item) => item.id ===id)
    if (res) {
        var index = cart.findIndex((item) => item.id === res.id);
        var raw =product.findIndex((item) => item.id === id)
        if(product[raw].TotalQuantity > 0 ){
        cart[index].quantity = cart[index].quantity + 1;
        }
        displaycart();
        // for Quantity minus
        var que = product.find((item) => item.id ===id)
       if (que) {
        var index = product.findIndex((item) => item.id === que.id);
         // condition for the Total Quanity
        if( product[index].TotalQuantity>0){
        product[index].TotalQuantity = product[index].TotalQuantity - 1;
        }
        displayproduct();
       }
}
}



//decrement
function decrementQuantity(id) {
    
   
    var res = cart.find((item) => item.id ===id)
    if (res) {
        var index = cart.findIndex((item) => item.id === res.id);
        if(cart[index].quantity>1){
        cart[index].quantity = cart[index].quantity- (1);
        }
        displaycart();
        //for Quantity add
        var que = product.find((item) => item.id ===id)
        if (que) {
         var index = product.findIndex((item) => item.id === que.id);
         // condition for the Total Quanity
         if( product[index].TotalQuantity<9){
         product[index].TotalQuantity = product[index].TotalQuantity +1;
         }
         displayproduct();
        }
        
}
}
    

//end up
function displayproduct(){
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price, quantity, TotalQuantity} = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹: ${price}.00</h2>` +
        `<h3>Quantity: ${TotalQuantity}.00</h3>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

}



function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹:" + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items, index) => {
            var { image, title, price,sum, quantity, id } = items;
            sum =(quantity * price);
            total = total +(quantity * price);

            document.getElementById("total").innerHTML = "₹:" + total + ".00";
            document.getElementById("count").innerHTML = cart.length;
            if (cart.length === "") {
                alert("Add Value")

            }
            else {
                let messageButton = document.querySelector('#message-button');
                let messageAlert = document.querySelector('#message-alert');
                let messageText = document.querySelector('#message-text');

                messageButton.addEventListener('click', function () {
                    messageAlert.style.display = 'flex';
                    messageText.textContent = "Thanks For The Shopping";
                    setTimeout(function () {
                        messageAlert.style.display = 'none';
                    }, 2000); // Display message for 3 seconds (3000 milliseconds)
                });
            }
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹: ${price}.00</h2>` +
                `<h2 style='font-size: 15px;'>₹: ${sum}.00</h2>` +
               "<i class='fa-solid fa-minus' onclick='decrementQuantity(" + (id) + ")'></i>"+
                `<p>${quantity}</p>` +
                "<i class='fa-solid fa-plus' onclick='incrementQuantity(" + (id) + ")'></i>"+
                "<i class='fa-solid fa-trash' onclick='delElement(" + (id) + ")'></i></div>"

            );

        }).join('');
    }
}
// for the log out the page go to login page with deleting the local storage
function LogOut(){
    localStorage.clear();
    window.location.href = ("C:/Users/Sumit Rahangdale/OneDrive/Desktop/intern/shopping.html");

}

