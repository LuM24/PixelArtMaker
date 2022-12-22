const table = document.getElementById('pixelCanvas');
//A function to generate a grid:
function makeGrid(event) {
    table.innerHTML = '';
    const height = document.getElementById('inputHeight');
    const width = document.getElementById('inputWidth');
    for (let m = 0; m < height.value; m++) {
        const row = document.createElement('tr');
        for (let n = 0; n < width.value; n++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        };
        table.appendChild(row);
    };
    event.preventDefault(); 
}
// When size is submitted by the user, call makeGrid():
const form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);
//Select color input:
let pickedColor = '#000000';
const color = document.getElementById('colorPicker');
color.addEventListener('change', function (e) {
    pickedColor = e.target.value;
});
//Fill a cell with selected color after each click:
table.addEventListener('click', function (e) {
    e.target.style.backgroundColor = pickedColor;
});






