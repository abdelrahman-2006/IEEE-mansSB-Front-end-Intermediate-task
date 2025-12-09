# Event Bubling

## What is event Bubling

Event bubling is probagation of events from the child to it's ancestor

**Ilustration**

```HTML
<div>
    <span>
        <button></button>
    </span>
</div>
```
this is a simple html structure a div with a span and a button

if we add event listeners via javascript

```javascript
let div = document.querySelector('div');
let span = document.querySelector('span');
let button = document.querySelector('button');

div.addEventListener("click",()=>{
    console.log("div");
});
span.addEventListener("click",()=>{
    console.log("span");
});
button.addEventListener("click",()=>{
    console.log("button");
});
```
if you open the console while clicking on the button you will find console writing div , span , button 
so the event Probagated through the elements from child to parent this is the default behaviour

sometimes you want to stop this behaviour
for instance when if you want the button color to change when you click one it and same with span but
you don't want the span to get colored clicking the button so you want to stop the event from propagating
there is event.stopPropagation() method which is used for that exactly

**ilustration**

```javascript
div.addEventListener("click",()=>{
    console.log("div");
});
span.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("span");
});
button.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("button");
});
```