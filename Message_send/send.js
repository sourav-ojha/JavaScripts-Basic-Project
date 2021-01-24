var x = document.getElementById("popup");
let msg_list = [];
console.log();
let i=0;

x.style.display = "none";
function send() {
    let msg = document.getElementById("msg");
    if (msg.value != "")
    {
    let lst_msg = document.getElementById("lst_msg");
    lst_msg.innerHTML = msg.value;
    msg_list [i] = msg.value;
    i++;
    msg.value = "";
    console.log(msg_list);
    
    alert("message semt successfull");
    }
    else{
        alert("Enter your message first");
    }
    
}

//  function show_msg() {
//      for(let j=0; j< msg_list.length; j++)
//     {
//         let list = document.createElement('p');
//         list.value = lst_msg[j];
//         document.getElementById('dldmsg').appendChild(list);
//     }
//  }

function show_msg() {        
        document.getElementById('n').textContent=i;
    x.style.display = "block";
    document.getElementById('dldmsg').textContent = "";
    let app = document.getElementById('dldmsg');
    console.log(app);
    var date = new Date();
    let d =[];
    
    let nodes = msg_list.map(msg_list => {
    let li = document.createElement('li');
    
    li.textContent = msg_list;
    return li;
});

app.append(...nodes);
app = undefined;
console.log(app);
    
    
}

function hide_msg() {
     x.style.display = "none";
    
  }

