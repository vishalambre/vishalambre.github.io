document.querySelector('.playpause').addEventListener("click",a);


function a(){

    if(document.querySelector('.play').name == 'pause'){
        document.querySelector('.play').name = 'play';
    }
    else{
        document.querySelector('.play').name = 'pause';
    }
    
}

console.log(document.getElementsByTagName('h1'));