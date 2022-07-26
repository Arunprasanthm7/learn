
let outputscreen = document.getElementById("onscreen");
display = (num) => {
    onscreen.value += num;
}
calculate=()=> {
    try {
        onscreen.value = eval(onscreen.value)
    }
   catch(err) {
        alert("Boomer Uncle")
    }

}
clr =()=>{
    onscreen.value=" ";
}
del=()=>{
    onscreen.value=onscreen.value.slice(0,-1);
}
