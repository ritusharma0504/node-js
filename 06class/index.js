     //function hello(){
    //     console.log('my first function');
    // }
    
    // hello()
    
    // function ritu(a,b=0){
    //     console.log(a,b)
    // }
    
    // ritu("hello",21)
    // ritu("hello1")
    // ritu(21)
    
    //function ritu1(....)
    
    
    
    
    //function ritu2(b,...a){
      //  console.log(b,a)
    //}
    
    //ritu2("hello",21,true)
    
    // function ritu3(...a){
    //     console.log(a[0][0])
    //     console.log(a[0][1])
    //     console.log(a[1]["name"])
    //     console.log(a[1]["age"])
    // }
    // let age=21
    // let name ="hello"
    // let obj={name,age}
    // let arr=[name,age]
    // ritu3(arr,obj)
    
    // function ritu4(){
    //     console.log('hello')
    //     //return {name:'hello',age:20}
    //     //return (["hello",20,true])
    //     let arr1=["hello",23,true]
    //     let arr2=["helloo",24,true]
    //     //return [arr1,arr2]
    //     return {arr1,arr2}
    // }
    
    // let fun=ritu4()
    //console.log("fun",fun)
    
    // function ritu5(){
    //     try{
    //         return hello
    //     }
    //     catch(error){
    //         return {"errormessage":error.message}
    //     }
    // }
    
    // let fun1=ritu5()
    // if(fun1["errormessage"]){
    //     console.log("code mistake")
    // }
    // else{
    //     console.log(fun1)
    // }
    
    // let ritu6= (i)=>{
    //     return i
    // }
    // let obj={name:'hello',age:21}
    // console.log(ritu6(obj))
    
    
    // let obj={name:"hello",age:21}
    // let ritu7=()=>{
    //     console.log(obj)
    // }
    
    // ritu7()
    
    let ritu8=()=>{
        return "fun num 8"
    }
    let ritu7=()=>{
        name1=ritu8()
        name2=ritu8()
        return{name1,name2}
    }
    let fun4=ritu7()
    console.log(fun4)