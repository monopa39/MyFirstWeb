//타이머 드래그 시작
const timer = document.getElementById("timer");
const inputField = document.querySelector('.tesk_name');

let isDragging = false;
let offsetX, offsetY;

inputField.addEventListener('mousedown', (e) => {
e.stopPropagation()}); //인풋란까지 드래그 되는 현상 방지

timer.addEventListener("mousedown", (event) => {
    event.preventDefault();
    isDragging = true;
    offsetX = event.clientX - timer.offsetLeft;
    offsetY = event.clientY - timer.offsetTop;
    timer.style.cursor = "grabbing";
    
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        timer.style.left = event.clientX - offsetX + "px";
        timer.style.top = event.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    timer.style.cursor = "grab";
});
//타이머 드래그 끝
//-----------------------------------------------------------
//타이머 작동 시작
let 타이머인터벌;

let 남은시간;

function 타이머() {
    
    
    let 분 = String(Math.floor(남은시간/60)).padStart(2, '0');
    let 초 = String(남은시간 % 60).padStart(2, '0');
    document.getElementById('clock').textContent = `${분}:${초}`;

    if (--남은시간 < 0) { 
        clearInterval(타이머인터벌);
        
        
        
        }
}
document.getElementById('button_Time_10').addEventListener('click', () => {
    남은시간 = 600;
    document.getElementById('clock').textContent = `${'10'}:${'00'}`;
});
document.getElementById('button_Time_20').addEventListener('click', () => {
    남은시간 = 1200;
    document.getElementById('clock').textContent = `${'20'}:${'00'}`;
});
document.getElementById('button_Time_30').addEventListener('click', () => {
    남은시간 = 1800;
    document.getElementById('clock').textContent = `${'30'}:${'00'}`;
});

document.getElementById('button_Start').addEventListener('click', () => {
   
    clearInterval(타이머인터벌);
    타이머인터벌 = setInterval(타이머, 1000);
    
});
//타이머 작동 끝