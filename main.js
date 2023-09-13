kl = 0;

function dge(elem, bin){
    document.getElementById(elem).style.display = bin;
}

dge("minipeli", "none");
dge("pelialue", "none");

function aloita(){
    dge("aloitus", "none");
    dge("pelialue", "block");
    vuodenvaihto();
}

var vuosi = 6000;
function vuodenvaihto(){
    document.getElementById("vuosi").innerHTML = "Vuosi: " + vuosi + " eaa.";
    vuosi -= 1;
    setTimeout(function(){
        vuodenvaihto();
    }, 2000);
}    

var kysymykset = [[["Olet metsästäjäkeräilijä, päätätkö heimosi asumaan pysyvästi alueella vai jatkatko metsästäjäkeräilijäelämää?"]]];
var vaihtoehdot = [[[["Jää pysyvästi", "Jatka matkaa"]]]];

var x;
var y;

function track(e) {
    x = e.pageX;
    y = e.pageY;
    
    keihas();

}

addEventListener("mousemove", track, false);

w = screen.width;

sallituu = true;
function keihas(){
    if(sallituu){
    document.getElementById("keihas").style.left = (x.toString() / w) * 100 + "%";
    }
}

function mp(){
    console.log("Ilia noobi");
    dge("minipeli", "block");
    dge("pelialue", "none");
    document.body.style.backgroundColor = "rgb(185, 166, 105)";

    // Mammutti jänis peli
    el();
    osuma();
    document.onmousedown = keihaanlento;
    

}

keihasp = 1
function vkeihaanlento(){
    keihasp += 0.1
    document.getElementById("keihas").style.bottom = keihasp.toString() + "%";

    if(keihasp > 110){
        keihasp = 0;
        document.getElementById("keihas").style.bottom = keihasp.toString() + "%";
        sallituu = true;
    }else{
        setTimeout(function(){
            vkeihaanlento();
        }, 5);
    }
    

}

mj = 0;
jj = 0;
salj = true;
sal = true;
function el(){
    //console.log(mj);
    if(salj){
        jj += 0.1
    }
    if(sal){
        mj += 0.1
    }
    document.getElementById("mammutti").style.left = mj.toString() + "%";
    document.getElementById("janis").style.left = (jj / 2).toString() + "%";

    if(mj > 222){
        mj = -100;
    }    
    setTimeout(function(){
        el();
    }, 5);
}



function keihaanlento(){
    console.log("heid");
    sallituu = false;
    vkeihaanlento();

}

function osuma(){
    kx = eval((document.getElementById("keihas").style.bottom).slice(0, -1));
    ky = eval((document.getElementById("keihas").style.left).slice(0, -1));

    mx = eval((document.getElementById("mammutti").style.left).slice(0, -1));

    jx = eval((document.getElementById("janis").style.left).slice(0, -1));


    console.log("keihas: ", kx);
    console.log("keihas: ", ky)
    console.log("mammutti: ", mx);
    console.log("janis: ", jx);

    if(kx > 55 && ky - mx < 10 && ky - mx > -10 && kx < 100){
        document.getElementById("mammutti").src = "liha5.png";
        if(sal){
            kl += 5;
        }
        document.getElementById("kl").innerHTML = "Kerätyt lihat: " + kl.toString();
        sal = false;
    }

    if(kx > 85 && ky - jx < 7 && ky - jx > -7 && kx < 100){
        document.getElementById("janis").src = "liha1.png";
        document.getElementById("janis").style.bottom = "65%";
        if(salj){
            kl += 1;
        }
        document.getElementById("kl").innerHTML = "Kerätyt lihat: " + kl.toString();
        salj = false;
    }

    setTimeout(function(){
        osuma();
    }, 5);

}


function kysymysvaihto(){
    document.getElementById("kysymys").innerHTML = kysymykset[0][0][0];
    document.getElementById("v1").innerHTML = vaihtoehdot[0][0][0][0];
    document.getElementById("v2").innerHTML = vaihtoehdot[0][0][0][1];

    document.getElementById("v2").onclick = mp;
}

kysymysvaihto();