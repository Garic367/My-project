function changePainting(){
    let filename = document.getElementById("dropdown").value;
    document.getElementById("image").src = filename;
}

var myInterval = setInterval(myTimer,1000);
    function myTimer(){
        var d = new Date(); 
        var t = d.toLocaleString();
        document.getElementById("timer").innerHTML = t; 
    }

const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const img = document.querySelector('#image')
const reset = document.querySelector('#reset')
const imgUrl = document.querySelector('#img-url')  

const defaults = {
    grayscale: 0,
    contrast: 100,
    brightness:100,
    sepia:0,
    saturate:100

}

grayscale.addEventListener('input',UpdateFilterValue)
contrast.addEventListener('input',UpdateFilterValue)
brightness.addEventListener('input',UpdateFilterValue)
sepia.addEventListener('input',UpdateFilterValue)
saturate.addEventListener('input',UpdateFilterValue)

reset.addEventListener('click',resetFilterValue)
imgUrl.addEventListener('change',UpdateImgUrl)

function UpdateFilterValue(){
    reset.disabled = false
    img.style.filter = `
        grayscale(${grayscale.value}%) 
        contrast(${contrast.value}%) 
        brightness(${brightness.value}%) 
        sepia(${sepia.value}%) 
        saturate(${saturate.value}%) 
    `
}

function resetFilterValue(){
    console.log('')

    img.style.filter = `
    grayscale(${defaults.grayscale}%) 
    contrast(${defaults.contrast}%) 
    brightness(${defaults.brightness}%) 
    sepia(${defaults.sepia}%) 
    saturate(${defaults.saturate}%) 
`

    grayscale.value = defaults.grayscale
    contrast.value = defaults.contrast
    brightness.value = defaults.brightness
    sepia.value = defaults.sepia
    saturate.value = defaults.saturate
}


function UpdateImgUrl(){
    const imageUrl = imgUrl.value
    img.setAttribute('src',imageUrl)
}

  
    






// let car = document.querySelector('#car')
// let flowers = document.querySelector('#flowers')
// let house = document.querySelector('#house')
// let monaLiza= document.querySelector('#monaLiza')
// let select = document.querySelector('select')



    // if(select.value == 'car'){
    //     imageUrl = 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200';
    // }
//   car.addEventListener('click',() => {
//     img.src = 'image_1.jpg';       
//   })
//   flowers.addEventListener('click',() => {
//     img.src = 'image_1.jpg';       
//   })
//   house.addEventListener('click',() => {
//     img.src = 'image_1.jpg';       
//   })
//   monaLiza.addEventListener('click',() => {
//     img.src = 'image_1.jpg';       
//   })


