import render from "./render.js";
import storeProxy from "./store.js";
window.addEventListener("todosChange", ()=>{
    console.log('todosChanged fired!!!');
})
storeProxy.todos=[];
render();
