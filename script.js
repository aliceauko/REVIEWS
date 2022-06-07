let reviews = [
    {   img  :'./Images/profile1.png',
        name: 'Tony',
        career: 'Web-developer',
        message: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
       
    },

    {  img :'./Images/rodents.png',
       name:'Joy',
       career :'Chef',
       message:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
   },

   {   img:'./Images/profile3.png',
       name:'Ezra',
       career:'Teacher',
       message:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
   }
]




let myName =document.getElementById('name')
let img = document.getElementById ('image')
let career =document.getElementById('career')
let message =document.getElementById('message')



let next =document.getElementById('next')
let back = document.getElementById('back')
let random = document.getElementById('random')

let i = 0;


next.addEventListener('click', function(){
  
        myName.innerHTML = reviews[i].name
        img.src = reviews[i].img
        career.innerHTML = reviews[i].career
        message.innerHTML = reviews[i].message
        

        i++
        if(i>reviews.length -1 ){
            i= 0
        }

    
})


back.addEventListener('click', function(){
   
        myName.innerHTML = reviews[i].name
        img.src = reviews[i].img
        career.innerHTML = reviews[i].career
        message.innerHTML = reviews[i].message
        
      i--
    

})