const cartBtn = document.getElementById("cart-btn-img");
const cartContainer = document.getElementById("cart");

const productsList = document.getElementById("products-list-container");
const products = document.querySelectorAll("product");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");



// function toggleCart(e) {
//     if (e.target == cartBtn) {
//         cartContainer.classList.add('open');
//         cartContainer.classList.remove('hide');
//     } else if (e.target !== cartContainer) {
//         cartContainer.classList.add('hide');
//         cartContainer.classList.remove('open');
//     }
// }


function toggleCart(e) {
    if (e.target == cartBtn) {
        cartContainer.classList.toggle('open');
    }
    const productsArray = [...productsList.getElementsByClassName('product')];
    productsArray.forEach((product, index) => {
        if (index > 2) {
            product.classList.add('hide');
        }
    });

    // else {
    //     cartContainer.classList.add('close');
    //     cartContainer.classList.remove('open');
    // }
}

// function moveUp(e) {
//     console.log(productsList.height);
// }

// function moveDown(e) {
//     console.log(e.target.querySelectorAll('.products'));
// }

// function moveItems(e) {

//     if(e.target == btnUp) {
//         console.log(productsList.offsetHeight);
//         productsList.animate({
//             scrollTop: '+=132'
//         }, 100);
//     } else if (e.target == btnDown) {
//         productsList.animate({
//              transform: 'translateY(0px)',
//              transform: 'translateY(-200px)'
//         }, 5100);
//     }
// }

function moveItems(e) {
    const productsArray = [...productsList.getElementsByClassName('product')];
    productsArray.forEach((product, index) => {
        if (e.target == btnDown) {
            product.classList.remove('hide');
            index++;
            console.log(product, index);
            if (index < 2) {
                product.classList.add('hide');

            } else {
                product.classList.remove('hide');
            }

        } else if (e.target == btnUp) {
            product.classList.remove('hide');
            index--;
            console.log(product, index);
            if (index > 1) {
                product.classList.add('hide');
            } else {
                product.classList.remove('hide');
            }
        }
    });
}

cartBtn.addEventListener('click', toggleCart);;
cartContainer.addEventListener('click', moveItems);
