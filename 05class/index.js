// let num1=19;

// if(num1>18){
//     console.log("yes num1 is greater");
// }

// let num1=100
// let num2=200
// let num3=30
// if(num1>num2&&num1>num3){
//     console.log("num1");
// }else if(num2>num3&&num2>num1){
//     console.log("num2");
// }else{
//     console.log("num3");
// }


// let num1=10
// let num2=20
// let num3=30

// if (num1<num2&&num1<num3){
//     console.log("num1")
// }else if(num2<num3){
//     console.log("num2")
// }else {
//     console.log("num3")
// }

// let age=18
// if(age>=18){
//     console.log("she can vote")
// }
// else{
//     console.log("she can vote")
// }


// let Dyear=2003
// let Dmonth=4
// let Ddate=5

// let date=new Date()
// console.log()

















// let num1="2";

// switch(num1){
//     case "1":
//         console.log("one")
//         break
//     case '2':
//         console.log("two")
//         break;
//     default:
//         console.log("default")       
// }

// let num1=200;
// let i=1;

// while(i<11){
//     console.log(num1 +"*"+i+"="+num1*i);
//     i++;
// }

// let num1=300;
// let i=1;
// do{
//     console.log('${num1}*${i}=${num1*i}');
//     i+=1;
// }while(i<11);

// let str="ritu sharma";

// for(let i=str.length;i>=0;i--){
//     console.log(str[i]);
// }

// let str="ritu sharma";
// let rev="";

// for(let i=str.length;i>=0;i--){
//     console.log(str[i]);
//     rev+=str[i]
// }
// console.log(rev);


// let str=[{"name":"hello","age":},{"name":"ritu"}]

// const result=str.map((item,index)=>{
//     console.log(item["name"])
//     console.log(item["age"]||100)
// })


// let obj=[
// 	{
// 		color: "red",
// 		value: "#f00"
// 	},
// 	{
// 		color: "green",
// 		value: "#0f0"
// 	},
// 	{
// 		color: "blue",
// 		value: "#00f"
// 	},
// 	{
// 		color: "cyan",
// 		value: "#0ff"
// 	},
// 	{
// 		color: "magenta",
// 		value: "#f0f"
// 	},
// 	{
// 		color: "yellow",
// 		value: "#ff0"
// 	},
// 	{
// 		color: "black",
// 		value: "#000"
// 	}
// ]
// const result=obj.map((item ,index)=>{
//     console.log(item["color"]);
//     console.log(item["value"]);
// })

// let str=[
//     { "id": "1001", "type": "Regular" },
//     { "id": "1002", "type": "Chocolate" },
//     { "id": "1003", "type": "Blueberry" },
//     { "id": "1004", "type": "Devil's Food" }
// ]

// const result=str.map((item, index) =>
// {
//     console.log(str[0]);
//     console.log(str[1]);
// })

// let arr=[[1,2,3],[4,5,6]]
// const result=arr.map((item,index)=>{
//     item.map((i)=>{
//         console.log(i)
//     })
// })

// let arr=[[[1,2,3],[4,5,6]]]
// const result=arr.map((item, index)=>{
//     item.map((i)=>{
//         i.map((j)=>{
//             console.log(j)
//         })
//     })
// })


let arr = [[[1,2,3,4],[5,6,7,8],[9,10,11,12]]]

arr.map((item)=>{
    item.map((i)=>{
        i.map((j)=>{
            console.log(j)
        })
    })
})