function add(a,...b){
    if(a=="max")
    {console.log(Math.max(...b))}
    else if(a=="min")
    {console.log(Math.min(...b))}
    else if(a=="avg"){
        let sum=0;
        for(let i=0;i<b.length;i++)
            sum=sum+b[i]
        let avg=sum/b.length
        console.log(avg)
    }
    else
    {console.log("error")}
}
add("max",1,2,4,8,3,678)
add("min",45,35,122)
add("avg",2,3,5,7,48)
add("error",67,70)