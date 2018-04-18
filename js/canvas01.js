/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

//rysowanie kwadratu
// najpierw wspołrzędne gdzie ma się znajdować, następnie jego wymiary
//x,y, width, height
ctx.fillRect(25, 25, 100, 100);

//czyszczenie poola w kwadracie
ctx.clearRect(45, 45, 60, 60);

//obramowanie
ctx.strokeRect(50, 50, 50, 50);

for (var i = 0; i < 10; i++) {
  ctx.strokeRect(50 + i * 2, 50 + i * 2, 50 - i * 2, 50 - i * 2);
}


//określanie czcionki
ctx.font = 'italic bold 30px arial';
    //lub top, bottom
ctx.textBaseline = 'middle';
ctx.fillText('Witaj w Canvas', 5, 250);

ctx.font = 'italic bold 20px arial';
//określenie koloru wypełnienia figury
ctx.fillStyle = 'pink';
    //lub top. bottom
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText('Wstawiamy tekst!', 90, 280);


//rysowanie koła
ctx.fillStyle = 'purple';
ctx.beginPath();
//najpierw współrzędne środka, pożniej promień, nastęonie liczba pi w zależności czy to wycinek czy całe koło - tutaj całe koło czyli 2pi
ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();
ctx.strokeStyle = 'yellow';

//
ctx.arc(150, 150, 40, 0, 1.5*Math.PI);
ctx.stroke();
