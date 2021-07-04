const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");          //"string".padStart(maxlength:number, fillstring)
    const minutes = String(date.getMinutes()).padStart(2,"0");      //padStart앞에 있는 string이 maxlength보다 작으면 string 앞에 fillstring으로 maxlength만큼 다 채운다.
    const seconds = String(date.getSeconds()).padStart(2,"0");      //* "string".padEnd(maxlength, fillstring)는 string 뒤에 fillstring이 붙는다 
    clock.innerText = `${ hours } : ${ minutes } : ${ seconds }`;
}
getClock();
setInterval(getClock, 1000);