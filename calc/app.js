const nilai = document.getElementsByClassName("item");
const inputBox = document.getElementById("input")
let angka1 = 0;
let angka2 = 0;
let operasi = "";

for (let i = 0; i < nilai.length; i++) {
    nilai[i].addEventListener("click", function(){
        if(nilai[i].innerText === "C"){
            inputBox.value="0"
            angka1=0;
            angka2=0;
        }else if(nilai[i].innerText === "+"){
            angka1=inputBox.value;
            operasi = "+";
            inputBox.value="0";
        }else if(nilai[i].innerText === "-"){
            angka1=inputBox.value;
            operasi = "-";
            inputBox.value="0";
        }else if(nilai[i].innerText === "+"){
            angka1=inputBox.value;
            operasi = "+";
            inputBox.value="0";
        }else if(nilai[i].innerText === "x"){
            angka1=inputBox.value;
            operasi = "x";
            inputBox.value="0";
        }else if(nilai[i].innerText === "/"){
            angka1=inputBox.value;
            operasi = "/";
            inputBox.value="0";
        }else if(nilai[i].innerText === "="){
            if(operasi ==="+"){
                angka2 = inputBox.value;
                inputBox.value = parseInt(angka1) + parseInt(angka2);
            }else if(operasi ==="-"){
                angka2 = inputBox.value;
                inputBox.value = parseInt(angka1) - parseInt(angka2);
            }else if(operasi ==="x"){
                angka2 = inputBox.value;
                inputBox.value = parseInt(angka1) * parseInt(angka2);
            }else{
                angka2 = inputBox.value;
                inputBox.value = parseInt(angka1) / parseInt(angka2);
            }
            
        }else{
            if(inputBox.value === "0"){
                inputBox.value = nilai[i].innerText
            } else{
                inputBox.value = inputBox.value + nilai[i].innerText
            }
        }
        
        
    })
}


