/**
 * Write your challenge solution here
 */

const redBtn = document.getElementById('redButton');
const greenBtn = document.getElementById('greenButton');
const blueBtn = document.getElementById('blueButton');
const purpleBtn = document.getElementById('purpleButton');
const resetBtn = document.getElementById('resetButton');

redBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#e74c3c';
});

greenBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = ' #2ecc71';
});

blueBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#3498db';
});

purpleBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#9b59b6';
});

resetBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#34495e';
});
