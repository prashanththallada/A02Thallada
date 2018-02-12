function fn(){
    let k = document.getElementById('Agrade').value;
    let k1 = document.getElementById('Bgrade').value;
    let k2 = document.getElementById('Cgrade').value;
    let k3 = document.getElementById('Dgrade').value;
    let k4 = document.getElementById('Fgrade').value;
    let name = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let sId = document.getElementById('sId').value;
    let s = "name: "+name+" "+lName+"<br>"+"Student Id: "+sId+"<br>"+"Your GPA: ";
    $('#result').css({ "display": "block" });
    document.getElementById('result').innerHTML = s+ot(k,k1,k2,k3,k4);
  }
  
function ot(j,j1,j2,j3,j4){
    let m = parseInt(j);
    let m1 = parseInt(j1);
    let m2 = parseInt(j2);
    let m3 = parseInt(j3);
    let m4 = parseInt(j4);
    if(j === "" || j1 === "" || j2 === "" || j3 === "" || j4 === "")
    return 0;
    else if((m+m1+m2+m3+m4)===0)
    return 0+" you have entered all zeros";
    else if(j<0 || j1<0 || j2<0 || j3<0 || j4<0)
    return 0+" given input is in negative";
    else if((m+m1+m2+m3+m4)>33)
        return 0+" maximum courses shouldn't reach 33";   
    else
        return (m*4.0+m1*3.0+m2*2.0+m3*1.0)/(m+m1+m2+m3+m4);
            
}


