// document.querySelector('form').addEventListener('click', (e)=>{
//     e.preventDefault()
// })

const select = document.getElementById('select')
const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const minusBtn = document.getElementById('minus')

let count = 0
addBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    count=count+1  
    counter.innerHTML = `${count}`
    
})
minusBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(count>0){
        count = count-1
        counter.innerHTML = `${count}`
    }  
})

const submit = document.getElementById('submit')

submit.addEventListener('click', (e)=>{
     e.preventDefault()
    let selectPhone = select.value
    let selectColor = document.querySelector('input[name="color"]:checked').value;
    if(selectColor===true){
        console.log('click')
    }
    let selectAcces=[]
    document.querySelectorAll('input[type="checkbox"]').forEach(items=>{
        if(items.checked===true){
            selectAcces.push(items.value)
        }
    })

    document.querySelector('.result').innerHTML = `
    <p>
    You have selected ${count} ${selectPhone} phones having ${selectColor}
    color and accessories ${selectAcces}
    </p>
    `
   
  
})

