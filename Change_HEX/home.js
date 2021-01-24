let color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b",
 "c", "d",  "e", "f"
];
let j=0;

function runMe(color) {
    let hex = "#";
    for (let i=0 ; i<6; i++){
        let k = Math.floor(Math.random() * color.length)
        hex += color[k] ;
    }
    console.log(hex);
    document.body.style.backgroundColor = hex;
    document.getElementById("hex").innerHTML = hex;
      
}
