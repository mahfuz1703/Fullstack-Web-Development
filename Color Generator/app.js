function generateCode() {
  let hexaCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for(let i = 0; i < 6; i++){
    let randomNum = Math.round(Math.random()*15);
    let colorCode = hexaCodes[randomNum];
    color += colorCode;
  }
  document.querySelector('.container').style.backgroundColor = color;
  document.querySelector('.code').style.color = color;
  document.querySelector('.code').textContent = color;
  document.querySelector('a').style.color = color;
}
