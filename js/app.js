const container=document.getElementById("container__image")
const btn=document.getElementById("button")
const image=document.getElementById("img")
const getAdogBreed = () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(function(dog){
        dog.json().then(function(data){
            // console.log(data)
            const item=data
            console.log(item)
            image.src =item.message
            
            container.appendChild(image)
        })


    })
}
btn.addEventListener("click",function(){
getAdogBreed()


})
window.addEventListener("load", function () {
    getAdogBreed();
  });
  


