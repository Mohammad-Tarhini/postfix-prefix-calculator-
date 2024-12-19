
//*******boolans****** */
let is_postfix=false
let is_prefix=false
//***arrays */
let L1=[]
let s=[]
//******dictionarys*******/
const cont={plus:'+',minus:"-",times:"*",divide:"/",zero:"0",one:"1",two:"2",three:"3",four:"4",five:"5",six:"6",seven:"7",eight:"8",nine:"9"}
const pcelements={}
//****elements********** */
for (const key in cont) 
{
    pcelements[key] = document.getElementById(cont[key]);
}
const dark=document.getElementById("dark")
const light=document.getElementById("light")
const normal=document.getElementById("normal")
const big_container=document.getElementById("big_container")
const equal=document.getElementById("=")
const screen_input=document.getElementById("screen")
const screen_output=document.getElementById("screen1")
const del=document.getElementById("del")
const rest=document.getElementById("rest")
const pre=document.getElementById("prefix")
const post=document.getElementById("postfix")
//*****functions******* */
function add_to_screan(a)
{
    L1.push(a)
    screen_input.textContent ="input: "+L1.join(" ")   
}
function appear_answer(value)
{
    screen_output.textContent="output:"+value
}
function rest_click()
{
    screen_input.textContent="input:"
    screen_output.textContent="output:"
    post.style.backgroundColor="black"
    pre.style.backgroundColor="black"
    is_postfix=false
    is_prefix=false
    L1=[]
}
function dele()
{
    L1.pop()
    screen_input.textContent="input:"+ L1.join(" ")
}
function prefix_click()
{
    is_prefix=true
    is_postfix=false
    pre.style.backgroundColor="green"
    post.style.backgroundColor="black"
}
function postfix_click()
{
    is_postfix=true
    is_prefix=false
    post.style.backgroundColor="green"
    pre.style.backgroundColor="black"
}
function prefix(l)
{
    if(!isNaN(l[0]))
    {
        alert("definitly a mistake")    
       return ""
    }

    s=[]
    for(let i=L1.length-1;i>=0;i--)
    {
        if(L1[i]=="+" ||L1[i]=="-" || L1[i]=="*"||L1[i]=="/")
        {
            if (s.length<2)
            {
                alert("insufficient numbers after operator of index "+i)
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
           else if(L1[i]=="/")
           {
            if (v2==0)
            {
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
    
    if (s.length !== 1) 
    {
       alert("not balance ")
       return ""
    }
    return s.pop()
}
function postfix(l)
{
    if(l.length==1)
    {
        alert("incomplete")    
        return ""
    }
  s=[]
  for(let i=0;i<L1.length;i++)
   {
    if(L1[i]=="+"|| L1[i]=="-"||L1[i]=="*"||L1[i]=="/")
    {   if (s.length<2)
        {
            alert("insufficient numbers before operatin of index"+i )  
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
        else if (L1[i]=="/")
        {
            if(v2==0)
            {
                alert("divide by zero by operation of index "+i+"you can add and del")
                return ""
            }
            result=v1/v2
        }
           
        s.push(result)
    }
    else
        s.push(L1[i])
        
   }
    if (s.length !== 1) 
    {
        alert(" not balance you can add and del ")
        return ""
    }
    
    return s.pop() 
    

}   
function equal_click()
{
    if(L1.length===0)
        alert("please enter numbers")
    else if (is_postfix)
    {
        t=postfix(L1)
        appear_answer(t)
    }
    else if(is_prefix)
    {    
        t=prefix(L1)
       appear_answer(t)
    }
    else
        alert(" press on pre and post")
}
//******events ******** */
for (const key in pcelements) 
{
    pcelements[key].addEventListener("click",
        function () {
        add_to_screan(cont[key]); 
    });
}
del.addEventListener("click",dele)
post.addEventListener("click",postfix_click)
pre.addEventListener("click",prefix_click)
rest.addEventListener("click",rest_click)
equal.addEventListener("click",equal_click)
dark.addEventListener("click",
    function(){
    big_container.style.backgroundColor="rgb(35, 29, 29)"
    }
)
light.addEventListener("click",
    function(){
        big_container.style.backgroundColor="rgb(205, 195, 195)"
    }
)
normal.addEventListener("click",
    function(){
        big_container.style.backgroundColor="rgb(118, 98, 98)"
    }
)