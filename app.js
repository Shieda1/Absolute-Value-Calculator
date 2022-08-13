// https://www.omnicalculator.com/math/absolute-value

const btn = document.getElementById('btn');
const result = document.getElementById('result');

const x = document.getElementById('x');
btn.addEventListener('click', function() {

    result.textContent = `|x| = ${computeAbsX()}`;
})


function computeAbsX() {
  return Math.abs(Number(x.value));
}