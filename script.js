 document.addEventListener('DOMContentLoaded',function(){
    let container = document.querySelector('.container')
    let header = document.querySelector('.header')
    let menuItems = document.querySelectorAll('.header > div')
    let tabBody = document.querySelector('.body')
    let tabBodyItems = document.querySelectorAll('.body > div')
    let indi = document.querySelector('.indicator > div')
    menuItems.forEach((tab,index)=>{
        tab.addEventListener('click',function(){
            header.querySelector('.active').classList.remove('active')
            tab.classList.add('active');
            indi.style.left = `${index * 25}%`

            tabBody.querySelector('.active').classList.remove('active')
            tabBodyItems[index].classList.add('active')
        })
    })
})

// function tconsole(num){
//     console.log(num)
//     console.log(4+num);
// }
// function greet ( callback){
//     callback(6)
// }
// function head(hello){
 
// }
// greet(tconsole)
// greet(tconsole)

// arr = [2,68,2]
// function hari(num){
//   if(num/=2){
//     console.log(true)
//   }
//   else{
//     console.log(false)
//   }

// }
// arr.forEach(hari)

// arr = ['ece','cse','eee']
// arr.forEach(val => {
//     let a = val.toUpperCase()
//     let c = document.createElement('option')
//     c.textContent = a;
//     c.value = val;
//     document.getElementById('selected').appendChild(c)
    
// })



