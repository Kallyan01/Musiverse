let nav = document.querySelector('.navbar');
let up = document.getElementById('up')
let bugbtn =document.getElementById('bug-btn')
let tog=0;
window.addEventListener('scroll',()=>{
    y=window.pageYOffset
    if(y>100)
    {
        up.style="transform: scale(1);"
        nav.style="transform: translateY(-290px);box-shadow: 0px -5px 15px 5px rgb(80, 80, 80);background-color: rgba(241, 234, 241, 0.452);"
    }
    else
    {
        nav.style="box-shadow: 0px 0px 0px 0px rgb(80, 80, 80);background-color: hsl(300deg 20% 93%);"
        up.style="transform: scale(0);"
        
    }
})

bugbtn.addEventListener('click',()=>{
    
    if(tog==1)
    {
        tog=0;
        nav.style="transform: translateY(-290px);"
    }
    else
    {
        tog=1;
        nav.style="transform: translateY(0px);"
        
    }
})