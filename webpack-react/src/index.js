import "./styles/style.css"
const sampleObject = {
    data:['hi','hello'],
    optional:false
}
let a = () =>{
    let newObj={...sampleObject,newContent:'hi'}
    console.log(newObj,sampleObject);
}
a();