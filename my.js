var location1 = Math.floor(Math.random() * 7);
var a = [location1, location1 + 1, location1 + 2];
var guess;    //undefined
var hits = 0;
var guesses = 0;
var isSunk = false;
var boo;
var boob;


alert("Приветствую! Перед Вами мини-морской бой. Представьте, что в 9 ячейках по " + 
	" горизонтали расположен 3-ёх палубный вражеский корабль! Ваша " + 
	"задача потопить его за меньшее количество выстрелов. Введите число от 0 до 8.");


while(isSunk === false){
	guess = prompt("Если готов, то стреляй. (от 0 до 8):");
	if(guess < 0 || guess > 8){
		alert("Можно вводить цифры только от 0 до 8");
		}else{
			guesses = guesses + 1;
				if (a.includes(Number(guess)) === true){
					alert("Есть пробитие!");
					hits = hits + 1;
					a.splice(a.indexOf(Number(guess)),1);
					if(hits === 3){
						if(guesses % 10 === 0 || guesses % 10 > 4 && guesses % 10 < 10 || guesses % 100 > 10 && guesses % 100 < 20){boo = " выстрелов"; boob = " раз";}
						else
							if(guesses % 10 > 1 && guesses % 10 < 5){boo = " выстрела"; boob = " раза";}
							else{boo = " выстрел";  boob = " раз";}
						isSunk = true;
						alert("Поздравляю! вам потребовалось всего " + guesses + boo + "!");
						alert("Вы выстрелили " + guesses + boob + " для того чтобы потопить корабль, " + "это показывает уровень вашей точности, как: " + 
							((3/guesses)*100).toFixed(2) + "%");
					}
				}else{alert("Пррромазал )))");}
			}
	}



