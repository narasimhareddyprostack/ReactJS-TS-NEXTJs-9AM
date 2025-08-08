let state={
    'user':{
        uid:101,
        name:"Rahul"
    },
    'product':{
        'pid':102,
        pname:"Marker Pen"
    }
}

let {product} = state;
let {pname} = product
console.log(pname)