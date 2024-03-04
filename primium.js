const mobiles = [
    {name: 'samsung', price : 20000 , camera : '12mp',color: 'black'},
    {name: 'Xoami', price : 18000 , camera : '12mp',color: 'black'},
    {name: 'Oppo', price : 30000 , camera : '12mp',color: 'black'},
    {name: 'Iphone', price : 100000 , camera : '12mp',color: 'black'},
    {name: 'Walton', price : 31000 , camera : '12mp',color: 'black'},
    {name: 'HTC', price : 27000 , camera : '12mp',color: 'black'},
]


function getPremiumPhone(phones){
    // console.log(phones);
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}
const elite_class = getPremiumPhone(mobiles);
console.log("Cheapest Phone is : ",elite_class);

