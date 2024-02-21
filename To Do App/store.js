const store = {
  todos: [
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "Write Code",
      completed: true,
    },
  ],
};

const storeHandler = {
  get(target, property) {
    console.log("Oh You are trying to get ", property);
    return target[property];
  },
  set(target,property,value){
    console.log(target,property,value);
    target[property]= value;
    if(property=='todos'){
        window.dispatchEvent(new Event('todosChange'))
    }
    return true;
  }
};

const storeProxy = new Proxy(store, storeHandler);

export default storeProxy;
