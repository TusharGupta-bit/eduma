// ALL IMAGES FUNCTION 
 
function image() {
 
    let image = ["img1","img2","img3","img4","img5" ,"img6","img7","img8"]
    //console.log(image) 
 
    for (let x = 0; x < image.length; x++) {
       var element = document.getElementById(image[x]) ;
       element.style.display = "block" 
       element.style.opacity = "1"
       element.style.transition = "all 0.5s"
       setTimeout(function(){document.getElementById(image[x]).style.transform = "scale(1)"});
       
       
    }
   }
   // Business FUNCTION 
 
   function Business() {
 
    let food = ["img3","img4","img6","img8","img7"] 
    let Business = ["img1","img2","img5"] 
    console.log(food)
    
    for (let x = 0; x < food.length; x++) {
 
       var element = document.getElementById(food[x]) ;
       element.style.transform = "scale(0.6)"
       element.style.opacity = "0"
       element.style.transition = "all 0.5s"
       setTimeout(function(){document.getElementById(food[x]).style.display = "none"},1000);
       
       
    }
 
    for (let x = 0; x < Business.length; x++) {
 
       var element = document.getElementById(Business[x]) ;
       element.style.display = "block" 
       //element.style.transform = "scale(1)"
       element.style.opacity = "1"
       element.style.transition = "all 0.5s"
       setTimeout(function(){document.getElementById(Business[x]).style.transform = "scale(1)"});
      
      
       
    }
      
   }

//    design function


function Design() {

 let food = ["img1","img4","img2","img5","img6"] 
 let Design = ["img3","img7","img8"] 
 console.log(food)
 
 for (let x = 0; x < food.length; x++) {

    var element = document.getElementById(food[x]) ;
    element.style.transform = "scale(0.6)"
    element.style.opacity = "0"
    element.style.transition = "all 0.5S"
    setTimeout(function(){document.getElementById(food[x]).style.display = "none"},1000);
    
    //setTimeout(function(){element.style.display = "none" ; return 0 },1000); 
    
 }

 for (let x = 0; x < Design.length; x++) {

    var element = document.getElementById(Design[x]) ;
    element.style.display = "block" 
    element.style.opacity = "1"
    element.style.transition = "all 0.5s"
    setTimeout(function(){document.getElementById(Design[x]).style.transform = "scale(1)"});
    
    
 }
   
}

// About function

function About() {

 let food = ["img1","img2","img3","img5","img7","img8"] 
 let About = ["img4","img6"] 
 
 for (let x = 0; x < food.length; x++) {

    var element = document.getElementById(food[x]) ;
    element.style.transform = "scale(0.6)"
    element.style.opacity = "0"
    element.style.transition = "all 0.5s"
    setTimeout(function(){document.getElementById(food[x]).style.display = "none"},1000);
    
    //setTimeout(function(){element.style.display = "none" ; return 0 },1000); 
    
 }

 for (let x = 0; x < About.length; x++) {

    var element = document.getElementById(About[x]) ;
    element.style.display = "block"
    element.style.opacity = "1"
    element.style.transition = "all 0.5s"
    setTimeout(function(){document.getElementById(About[x]).style.transform = "scale(1)"});
    
    
 }
   
}


//GALLERY FUNCTION ENDS
   // ACTIVE CLASS NAVBAR GALLERY 
 
 function gallerynav(id) {
 
    console.log(id)
    var element = document.getElementsByClassName("navlink")
    var add = document.getElementById(id)
    console.log(element)
    for (let x = 0; x < element.length; x++) {
       
       element[x].classList.remove("active") ;
       
    }
 
    add.classList.add("active")
 }
// Navbar color change function


    $(window).scroll(function(){
    $('.nav-bar').toggleClass('scrolled', $(this).scrollTop() > 200);
    $('.hamburger').toggleClass('scrolled', $(this).scrollTop() > 200);
    $('.logo-name').toggleClass('scrolled', $(this).scrollTop() > 200);
    $('.nav-hover').toggleClass('scrolled', $(this).scrollTop() > 200);
    });
    $(window).scroll(function(){
    $('.nav-bar-others').toggleClass('scrolled', $(this).scrollTop() > 70);
    $('.hamburger-others').toggleClass('scrolled', $(this).scrollTop() > 70);
    $('.logo-name-others').toggleClass('scrolled', $(this).scrollTop() > 60);

    });


