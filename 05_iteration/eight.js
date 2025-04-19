
const myNum = [1,2,3]

// const mytotal = myNum.reduce( function(acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

const mytotal = myNum.reduce( (acc, curval) => acc+ curval, 0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 9999
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "data scinces",
        price: 12999
    },
]

const price = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(price);
