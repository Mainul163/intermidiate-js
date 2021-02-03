
// (Normal array square)
const numbers=[12,4,6,8,3,7,10];
    const fakarray=[];
for(let i=0;i<numbers.length;i++){

     const element=numbers[i];
     const result=element*element;
      fakarray.push(result);

}
console.log(fakarray);

// add map and find the only array element

const numbers=[12,4,6,9,3];
numbers.map(function(element){
    console.log(element);
})

// find the aray index

const numbers=[12,4,6,9,3];
numbers.map(function(element,index){
    console.log(element,index);
})

// find the full array

const numbers=[12,4,6,9,3];
numbers.map(function(element,index,array){
    console.log(array);
})

// using map for array squre

const numbers=[12,4,6,9,3];
const result= numbers.map(elements=>elements*elements);
console.log(result);

// using map-filter

const numbers=[12,4,6,9,3];
const result= numbers.filter(x=> x>5 )
console.log(result);