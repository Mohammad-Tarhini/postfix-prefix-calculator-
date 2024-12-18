//****elements********** */
let plus=document.getElementById("+")
let minus=document.getElementById("-")
let times=document.getElementById("*")
let divide=document.getElementById("/")
let zero=document.getElementById("0")
let one=document.getElementById("1")
let two=document.getElementById("2")
let three=document.getElementById("3")
let four=document.getElementById("4")
let five=document.getElementById("5")
let six=document.getElementById("6")
let seven=document.getElementById("7")
let eight=document.getElementById("8")
let nine=document.getElementById("9")
let equal=document.getElementById("=")
let screen=document.getElementById("screen")
let screen1=document.getElementById("screen1")
let del=document.getElementById("del")
let rest=document.getElementById("rest")
let pre=document.getElementById("prefix")
let post=document.getElementById("postfix")
//************************************** */
let is_postfix=false
let is_prefix=false

//************************* */
let L1=[]
let s=[]


 
//*****functions******* */
function screen_click(){
    screen.textContent="input:"+L1.join(" ")
}
function appear_screan(a)
{
L1.push(a)
screen.textContent ="input:"+L1.join(" ")
    
}
function appear_answer(value){
    screen1.textContent="output:"+value
}


function rest_click(){
    screen.textContent="input:"
    screen1.textContent="output:"
    post.style.backgroundColor="black"
    pre.style.backgroundColor="black"
    is_postfix=false
    is_prefix=false
    L1=[]
    
}
function dele(){
    L1.pop()
   screen.textContent="input:"+ L1.join(" ")
    


}
function prefix_click(){
    is_prefix=true
    is_postfix=false
    pre.style.backgroundColor="green"
    post.style.backgroundColor="black"
    
}
function postfix_click(){
    is_postfix=true
    is_prefix=false
    post.style.backgroundColor="green"
    pre.style.backgroundColor="black"
    
}
function prefix(l){
    if(!isNaN(l[0])){
        alert("definitly a mistake")    
       return ""
    }

    s=[]
    for(let i=L1.length-1;i>=0;i--){
        if(L1[i]=="+" ||L1[i]=="-" || L1[i]=="*"||L1[i]=="/")
        {if (s.length<2){
            alert("insufficient numbers ")
            
            return""
        }
        let v1=parseInt(s.pop());
        let v2=parseInt(s.pop());
        let result
        if (L1[i]=="+")
            result=v2+v1
        else if(L1[i]=="-")
            result=v1-v2
        else if(L1[i]=="*")
            result=v1*v2
        else if(L1[i]=="/"){
            if (v2==0){
                alert("division by zero for opperation at index"+i)
                return ""
                
              
            }
            result=v1/v2
        }
        s.push(result)
        }
        else
            s.push(L1[i])
    }
    
    if (s.length !== 1) {
       alert("not balance ")
       return ""
    }
    
    
    return s.pop()

}
function postfix(l){
s=[]
for(let i=0;i<L1.length;i++){
    if(L1[i]=="+"|| L1[i]=="-"||L1[i]=="*"||L1[i]=="/")
    {   if (s.length<2){
            alert("insufficient numbers")  
            return  ""
        }
        let v2=parseInt(s.pop())
        let v1=parseInt(s.pop())
        let result
        if (L1[i]=="+")
            result=v1+v2
        else if (L1[i]=="-")
            result=v1-v2
        else if (L1[i]=="*")
            result=v1*v2
        else if (L1[i]=="/"){
            if(v2==0){
                alert("divide by zero by operation of index "+i+"you can add and del")
                return ""
            }
            result=v1/v2
        }
           
        s.push(result)
    }
    else{
        s.push(L1[i])
    }
}
    if (s.length !== 1) {
        alert(" not balance you can add and del ")
        return ""
    }
    
    return s.pop() 
    

}   
function equal_click(){
    if(L1.length===0){
        alert("please enter numbers")
    }
    else if (is_postfix){
        
        t=postfix(L1)
        appear_answer(t)

        
    }
    else if(is_prefix){
        
        t=prefix(L1)
       appear_answer(t)

    }
    else{
        alert(" press on pre and post")

    }
}



//************** */
plus.addEventListener("click",function(){
appear_screan("+")
})
minus.addEventListener("click",function(){
    appear_screan("-")
    })
times.addEventListener("click",function(){
    appear_screan("*")
    })
divide.addEventListener("click",function(){
        appear_screan("/")
        })
zero.addEventListener("click",function(){
            appear_screan("0")})   
one.addEventListener("click",function(){
            appear_screan("1")
            })
two.addEventListener("click",function(){
                appear_screan("2")})
three.addEventListener("click",function(){
                    appear_screan("3")               
})                           
four.addEventListener("click",function(){
    appear_screan("4")})
five.addEventListener("click",function(){
        appear_screan("5")})  
six.addEventListener("click",function(){
            appear_screan("6")
}) 
seven.addEventListener("click",function(){
    appear_screan("7")
})
eight.addEventListener("click",function(){
    appear_screan("8")
}) 
nine.addEventListener("click",function(){
    appear_screan("9")
}) 
del.addEventListener("click",dele)
post.addEventListener("click",postfix_click)
pre.addEventListener("click",prefix_click)
rest.addEventListener("click",rest_click)
equal.addEventListener("click",equal_click)
screen.addEventListener("click",screen_click)