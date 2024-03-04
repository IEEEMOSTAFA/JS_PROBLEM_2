const mobiles = [
    {name: 'samsung', price : 20000 , camera : '12mp',color: 'black'},
    {name: 'Xoami', price : 18000 , camera : '12mp',color: 'black'},
    {name: 'Oppo', price : 30000 , camera : '12mp',color: 'black'},
    {name: 'Iphone', price : 100000 , camera : '12mp',color: 'black'},
    {name: 'Walton', price : 31000 , camera : '12mp',color: 'black'},
    {name: 'HTC', price : 27000 , camera : '12mp',color: 'black'},
]


function getCheapestPhone(phones){
    // console.log(phones);
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}
const cheap = getCheapestPhone(mobiles);
console.log("Cheapest Phone is : ",cheap);

