
//*******boolans****** */
let is_postfix=false
let is_prefix=false
//***arrays */
let L1=[]
let L2=[]
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
const screen_input_prefix=document.getElementById("screen_prefix_input")
const screen_input_postfix=document.getElementById("screen_postfix_input")
const screen_output=document.getElementById("screen1")
const del=document.getElementById("del")
const rest=document.getElementById("rest")
const pre=document.getElementById("prefix")
const post=document.getElementById("postfix")
step=document.getElementById("step")
//*****functions******* */
function add_to_screan(a)
{ if(is_prefix)
    {
      L1.push(a)
      screen_input_prefix.textContent =L1.join(" ")
      step.textContent=" entering success ....." 
    } 
  else if(is_postfix)
  {
    L2.push(a)
    screen_input_postfix.textContent=L2.join(" ")
    step.textContent="entering success ....." 
  }
  else
  {
    alert("press on post or pre or on any input screens ")

  }

}
function appear_answer(value)
{
    screen_output.textContent="output:"+value
}
function rest_click()
{
    screen_input_prefix.textContent="prefix_input:"
    screen_input_prefix.style.backgroundColor="white"
    screen_input_postfix.textContent="postfix_input:"
    screen_input_postfix.style.backgroundColor="white"
    screen_output.textContent="output:"
    post.style.backgroundColor="black"
    pre.style.backgroundColor="black"
    step.textContent="press on post or pre or input screens"

    is_postfix=false
    is_prefix=false
    L1=[]
    L2=[]
}
function dele()
{ if(is_prefix)
    {
      L1.pop()
      if(L1.length==0)
      {
        screen_input_prefix.textContent="enter:"
        step.textContent="enter number or operation"
      }
      else
      {
        screen_input_prefix.textContent= L1.join(" ")
        step.textContent="delete the last elment is success "
      }
    }
  else if(is_postfix)
    {
        L2.pop()
        if(L2.length==0)
        {
            step.textContent="enter number or operation"
            screen_input_postfix.textContent="enter:"
         }
        else
        {
            screen_input_postfix.textContent=L2.join(" ")
            step.textContent="delete the last elment is success "
        }
    }

}
function prefix_click()
{
    if(is_prefix)
    {

    }
    else
    {
    is_prefix=true
    is_postfix=false
    pre.style.backgroundColor="green"
    post.style.backgroundColor="black"
    screen_input_prefix.style.backgroundColor="green"
    screen_input_postfix.style.backgroundColor="white"
    screen_input_prefix.textContent="enter:"
    screen_input_postfix.textContent="postfix_input:"
    screen_output.textContent="output:"
    step.textContent="please enter  number or operation"
    L2=[]
    }
}
function postfix_click()
{
    if(is_postfix)
    {

    }
    else
    {
    is_postfix=true
    is_prefix=false
    post.style.backgroundColor="green"
    pre.style.backgroundColor="black"
    screen_input_prefix.style.backgroundColor="white"
    screen_input_postfix.style.backgroundColor="green"
    screen_input_postfix.textContent="enter:"
    screen_input_prefix.textContent="prefix_input:"
    screen_output.textContent="output:"
     step.textContent="please enter  number or operation"
    L1=[]
    }
}
function prefix(l)
{
    if(!isNaN(l[0]))
    {
        step.textContent="fix the error" 
        alert("definitly a mistake")    
         return ""
    }

    s=[]
    for(let i=l.length-1;i>=0;i--)
    {
        if(l[i]=="+" ||l[i]=="-" || l[i]=="*"||l[i]=="/")
        {
            if (s.length<2)
            {
                step.textContent="fix the error" 
                alert("insufficient numbers after operator of index "+i)
                return""
            }
           let v1=parseInt(s.pop());
           let v2=parseInt(s.pop());
           let result
           if (l[i]=="+")
              result=v2+v1
           else if(l[i]=="-")
              result=v1-v2
           else if(l[i]=="*")
              result=v1*v2
           else if(l[i]=="/")
           {
            if (v2==0)
            {
               step.textContent="fix the error"
               alert("division by zero for opperation at index"+i)
               return ""
            }
            result=v1/v2
           }
           s.push(result)
        }
        else
            s.push(l[i])
    }
    
    if (s.length !== 1) 
    {
       step.textContent="fix the error"
       alert("not balance ")
       return ""
    }
    return s.pop()
}
function postfix(l)
{
    if(l.length==1)
    {
        step.textContent="fix the error"
        alert("incomplete")    
        return ""
    }
  s=[]
  for(let i=0;i<l.length;i++)
   {
    if(l[i]=="+"|| l[i]=="-"|| l[i]=="*"||l[i]=="/")
    {   if (s.length<2)
        {
            step.textContent="fix the error"
            alert("insufficient numbers before operatin of index"+i )  
            return  ""
        }
        let v2=parseInt(s.pop())
        let v1=parseInt(s.pop())
        let result
        if (l[i]=="+")
            result=v1+v2
        else if (l[i]=="-")
            result=v1-v2
        else if (l[i]=="*")
            result=v1*v2
        else if (l[i]=="/")
        {
            if(v2==0)
            {
                step.textContent="fix the error"
                alert("divide by zero by operation of index "+i+"you can add and del")
                return ""
            }
            result=v1/v2
        }
           
        s.push(result)
    }
    else
        s.push(l[i])
        
   }
    if (s.length !== 1) 
    {
        step.textContent="fix the error"
        alert(" not balance you can add and del ")
        return ""
    }
    return s.pop() 
}   
function equal_click()
{
    if( is_prefix)
    {
        if(L1.length===0)
            alert("please enter numbers")
        else
        {
            step.textContent="calculate....."
            t=prefix(L1)
            appear_answer(t)
           
            
        }
        
    }
    else if(is_postfix)
    {
        if(L2.length==0)
            alert("please enter numbers")
        else
        {
            step.textContent="calculate....."
            t=postfix(L2)
            appear_answer(t)
            

            
        }
       
    }
    else
        alert(" press on pre and post or on input screens")
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
screen_input_postfix.addEventListener("click",postfix_click)
screen_input_prefix.addEventListener("click",prefix_click)
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