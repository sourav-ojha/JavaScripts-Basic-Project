window.onload = function(){

    
    let HH = document.getElementById('HH');
    let MM = document.getElementById('MM');
    let SS = document.getElementById('SS');
    function time(){
        let d = new Date;
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let session = "AM"
        if(h == 0)
            h = 12;
        if(h > 12){
            h = h-12;
            session = "PM";
        }

        s = s<10? '0'+s : s;
        m = m<10? '0'+m : m;
        h = h<10? '0'+h : h;
        
        HH.innerHTML = h;
        MM.innerHTML = m;
        SS.innerHTML = s + " "+ session;
        // console.log(h+':'+m+':'+s);

    }
    setInterval(time, 1000);
    
}


