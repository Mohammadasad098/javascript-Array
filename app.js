// const fruits =['apple' , 'banana' , 'watermelon' , 'grapes' , 'peach' , 'papaya' , 'pineapple']
// fruits.splice(1 , 3 , 'mango')


// console.log(fruits);


//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof

// const shop = ['Apple', 'Banana',  'Orange', 'Mango', 'Grape', 'Strawberry']
// console.log(shop.includes('dafdsfdsfd'));
// console.log(shop.indexOf('fsdkjfhsdjkfh'));





const cities = ['karachi' , 'islamabad' , 'multan' , 'lahore' , 'peshawar' , 'pindi' , 'bhawalpur'] 
const input = document.querySelector('#input')
const h2 = document.querySelector('h2')
function getcities() {
    // console.log(input.value);
    if(cities.includes(input.value)){
        console.log('City of Pakistan');
        h2.innerHTML = `${input.value} is the city of Pakistan`
    }else{
        console.log('Not the City of Pakistan');
        h2.innerHTML = `${input.value} is not the city of Pakistan`

    }
    input.value = ''
   

    
}