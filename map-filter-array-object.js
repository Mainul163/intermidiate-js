
// find the array object name 

const student=[
    {name:"mainul",id:1,phone:016},


        {name:"abir",id:2,phone:017},

    {name:"himu",id:3,phone:019},

    {name:"shujon",id:4,phone:010}
]
  const total=[]
for(let i=0;i<student.length;i++){
    const result=student[i];

    total.push(result.name);
}
console.log(total);


// find the array object name using map

const student=[
    {name:"mainul",id:1,phone:016},


        {name:"abir",id:2,phone:017},

    {name:"himu",id:3,phone:019},

    {name:"shujon",id:4,phone:010}
]

 const result=student.map(x=>x.name);
 console.log(result);

// above id number 3
const student=[
    {name:"mainul",id:1,phone:016},


        {name:"abir",id:2,phone:017},

    {name:"himu",id:3,phone:019},

    {name:"shujon",id:4,phone:010}
]

const result= student.filter(x=>x.id>3);
console.log(result);

