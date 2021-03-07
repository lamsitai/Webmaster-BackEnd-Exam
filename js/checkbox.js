const items =[{
        name:'Skin 1',
        price: '50',
        quantity:'1'
        },
        {
        name:'Skin 2',
        price: '60',
        quantity:'1'
        },
        {
        name:'Skin 3',
        price: '70',
        quantity:'1'
        },
]
let $ = document.getElementById;
const  SHIPPING =2
function  render(){
    let subTotal =0;
    items.forEach(item =>{
        subTotal += item.quantity +item.price
    })
    const total = subTotal +SHIPPING;


    $('#sub-total').innerText= `$${subTotal.toFixed(2)}`
    $('#shipping').innerText= `$${SHIPPING}`
    $('#total').innerText= `$${total.toFixed(2)}`
}
render();