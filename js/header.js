var a = document.getElementById('hidden-nav');
var b = document.getElementById('hidden-cart');
function toggleNav() {
    if(a.style.width === '0%'){
        a.style.width = '100%';
    }else{
        a.style.width = '0%';
    }
}

function openCart() {
    b.style.display = 'block';
    a.style.width = '0%';
}
function closeCart() {
    b.style.display = 'none';
}