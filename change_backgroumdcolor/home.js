let color = ["White" ,"red" , "yellow", "pink", "green", "blue",
"Yellow","Blue","Green","Black","Brown","Azure",
"Ivory","Teal","Silver","Purple","Navy blue","Pea green",
"Gray","Orange","Maroon","Charcoal","Aquamarine","Coral",
"Fuchsia","Wheat","Lime","Crimson","Khaki","Hot pink",
"Magenta","Olden","Plum","Olive","Cyan"
];
let j=0;
//window.onload(runMe(color))


function runMe(color) {
    
    let i = Math.floor(Math.random() * color.length);
    console.log(i + " " + j);
    if (i == j)
    i+=1;
    document.body.style.backgroundColor = color[i];
    j=i;   
}


    

