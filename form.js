const formE = document.querySelector('.form');

formE.addEventListener('submit',event => {
    event.preventDefault();
    const formData = new FormData(formE);
    const data = new URLSearchParams(formData); 

    fetch('https://reqres.in/api/users',{
        method: 'Post',
        headers:{
            'content-Type':'application/x-www-form-urlencoded'
        }, body:data
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
})