const btn = document.querySelectorAll('.button')
btn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.id === 'grey'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'red'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'pink'){
            document.body.style.backgroundColor = e.target.id
        }
    })
})


// Alternative Method

// if(e.target.id === e.target.id){
//     document.body.style.backgroundColor = e.target.id;
// }