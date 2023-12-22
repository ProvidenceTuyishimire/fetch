fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>{
    if(!res.ok){
        console.log('problem');
        return;
    }
    return res.json();
})
.then(data => {
    for(let i=0; i< data.length; i++){
        // console.log(data[i].username)
        document.querySelector('ul').
        insertAdjacentHTML("beforeend",`<li>${(data[i]).name}</li>`)
    }
})