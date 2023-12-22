const btnEl = document.querySelector(".btn");

const newUser={
    name: 'Maria',
    job:'Teacher'
};
const clickHandler = async () => {
    try{
        const res = await fetch('https://reqres.in/api/users',{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },body: JSON.stringify(newUser)
           
    });
    const data = await res.json();
    console.log(data);
}catch(error){
        console.log(error);
    }
};

btnEl.addEventListener("click",clickHandler);