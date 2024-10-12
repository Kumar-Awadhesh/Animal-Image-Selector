let container = document.getElementById("container");
let div = document.createElement("div");
container.append(div);

document.getElementById("selection").addEventListener("change", function(animal){
    
    let Animal = animal.target.value;
    div.innerHTML = " "

    if(Animal === "Dog"){
        
        let image = document.createElement("img");
        image.src = "https://th.bing.com/th/id/OIP.nATZfcKJEAH6nHrdf8dMRgHaEK?w=1024&h=576&rs=1&pid=ImgDetMain", alt="dog image";

        div.append(image);
        

    }
    else if(Animal === "Elephant"){
        
        let image = document.createElement("img");
        image.src = "https://styles.redditmedia.com/t5_2x91m/styles/communityIcon_r5cks4ksl2e81.png", alt="elephant image";

        div.append(image);
        

    }

    else if(Animal === "Lion"){
    
        let image = document.createElement("img");
        image.src = "https://th.bing.com/th/id/OIP.oePF1KYcoztm9Suy_4bX0QHaHa?rs=1&pid=ImgDetMain", alt="lion image";

        div.append(image);
        

    }

    else if(Animal === "Cat"){
    
        let image = document.createElement("img");
        image.src = "https://th.bing.com/th/id/OIP.X0Z5wiSJnHplWYaY-aReRQAAAA?rs=1&pid=ImgDetMain", alt="cat image";

        div.append(image);
        

    }
})

