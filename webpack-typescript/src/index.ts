const age:number = 100;
console.log(age);
function compute(data:number){
    return data*10;
}
console.log(compute(10));

const obj={
    level1:{
        level2:{
            level3:'level 3...'
        }
    }
};

function consoleMe(obj:any){
    console.log(obj);
    console.log(obj?.level1?.level2?.level3);
}
consoleMe(obj);