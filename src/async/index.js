

const doSomethingAsyng=async()=>{
    const something= await doSomeTimeAsync();
    console.log(something);

}



const anotherFunction=async ()=>{
    try{
        const something=await doSomeTimeAsync();
        console.log('holi');
    }catch(error){
        console.log(error)

    }
}

console.log('Before');
doSomethingAsyng();
console.log('After');