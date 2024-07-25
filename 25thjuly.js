<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" name="" id="5">
    <button id="push">push</button>
    <button id="pop">pop</button>

    <script>
        let a=[];
         a.push(45)
         a.pop()
         a.push(54)
         console.log(a)

         document.getElementById("push").onclick=function(){
         let val=document.getElementById("5").value;
         a.push(val);
         console.log(a);
         }
         /
         a.pop($(val));
         console.log(a);
         //}
         let a=[10,20,45,"aman",76,456,"fase",234,789,645,"aryan"];
         console.log(a.slice(0,-1))
        a.splice(-5,4,false,"anshu")
        console.log(a)

        let b=a.map((item)=>{
            return item+1;

        })
        let b =a.filter((item)=>item>54)
        let b=a.reduce((x,y)=>{
            return x+y;
        console.log(a)
console.log(b)

        })
          let  a=[10,20,30,[1,2,3,9,[true,[47,98,27,[34,67,95,87]],false],5],40,50,60,43,67,[7,6],4];

          console.log(a.flat(4))
        let a="10-56-34-23-34,20,43,543,434,52,353";
        console.log(a)
        console.log(typeof a)
        let c= a.split(",");
        let b= a.split("-");
        console.log(b)
        console.log(c)
        let d = b.join();
        console.log(d)
        let a ="aryansusawatrohan"
        console.log(a.length)
        console.log(a.toUpperCase)
        console.log(a.toLocaleLowerCase)
        console.log(a.repeat(3))
        console.log(a.replace("m","r"))
        console.log(a.replaceAll("m","r"))
        console.log(a.charCodeAt("m"))
        console.log(a.includes("wat"))
        let a =["vivo v21 5g","a33 5g","m33 5g","moto g72","galaxyfold"]
        let b = a.filter((item)=>{
            return item.includes("vivo")
        })
     console.log(b)

    let obj=[{
        rollno:121,
        name:"aryan",
        email:"susawataryan22",
        age:22,
        city:"jaipur"
    };{
    rollno:120,
        name:"rohan",
        email:"susawatyan22",
        age:20,
        city:"ajmerr"
    };{
    rollno:122,
        name:"anish",
        email:"susawataryan22",
        age:17,
        city:"jaipur"
    };{
    rollno:121,
        name:"ayush",
        email:"suwataryan22",
        age:28,
        city:"jaipur"
    };{
    rollno:121,
        name:"aman",
        email:"susawataryan22",
        age:12,
        city:"jaipur"
    };{
    rollno:121,
        name:"arya",
        email:"susawatyan22",
        age:23,
        city:"jaipur"
    };]
  
        console.log(obj.name,obj.age)
        for(let i in obj){
            console.log(i,obj[i])
        }
       








    </script>
</body>
</html>
