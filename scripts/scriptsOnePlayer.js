/** 
* Признак завершения игры 
* 
* Логичкеская переменная
* устанавливается в false в начале игры,
* устанавливается в true, когда
* один из игроков победил
* 
* @var             {bool}   isWinner */
var isWinner = false;
/** 
* Массив рабочего поля игры 
* 
* В начале игры все элементы устанавливаются в ноль
* В ходе заполнения полей рабочего поля игры элементы
* устанавливаются в 1 - если поле заполнено крестиком,
* или 2 - если поле заполнено ноликом
* 
* @var             {Array}   workMatrix */	
var workMatrix = [0,0,0,0,0,0,0,0,0]
/** 
* Проверка победителя 
* 
* Если найдены подряд 3 крестика либо нолика
* по вертикали, горизонтали или диагонали
* свойство isWinner устанавливается в true.
* Функция не принимает параметров и ничего не возвращает
* 
*  */
function CheckWinner()
{
	var arr = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
	
	for(var i = 0; i < arr.length; i++)
	{
		if(workMatrix[arr[i][0]] == 1 && workMatrix[arr[i][1]] == 1 && workMatrix[arr[i][2]] == 1)
		{
			document.getElementById('winnerMessage').innerHTML = 'Победили крестики! Поздравляем!';
			isWinner = true;
		}
		else if(workMatrix[arr[i][0]] == 2 && workMatrix[arr[i][1]] == 2 && workMatrix[arr[i][2]] == 2)
		{
			document.getElementById('winnerMessage').innerHTML = 'Победили нолики! Поздравляем!';
			isWinner = true;
		}
	}
}
/** 
* Поиск свободного поля
* 
* Проход по всем элементам массива рабочего поля игры,
* пока не найден элемент, который не равен 1 (поле не занято крестиком)
* и не равен 2 (поле не занято ноликом)
* 
*  */
function SetFirstEmptyBox()
{
	for(var i = 0; i < workMatrix.length; i++)
	{
		if(workMatrix[i] == 0)
		{
			workMatrix[i] = 2;
			document.getElementById('box' + (i+1)).innerHTML = '<img src="4.png" width="80" height="80"/>';
			break;
		}
	}
}
/** 
* Выбор первого поля в верхнем ряду
* 
* Установка картинки-крестика в первое поле в верхнем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box1Click()
{
	if(isWinner == true || workMatrix[0] != 0) return;
	document.getElementsByClassName('box1')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[0] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else if(workMatrix[3] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[1] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор второго поля в верхнем ряду
* 
* Установка картинки-крестика во второе поле в верхнем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box2Click()
{
	if(isWinner == true || workMatrix[1] != 0) return;
	document.getElementsByClassName('box2')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[1] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[7] < 1){document.getElementById('box8').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[7] = 2;}
	else if(workMatrix[0] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[2] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор третьего поля в верхнем ряду
* 
* Установка картинки-крестика в третье поле в верхнем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box3Click()
{
	if(isWinner == true || workMatrix[2] != 0) return;
	document.getElementsByClassName('box3')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[2] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[1] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else if(workMatrix[5] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор первого поля в среднем ряду
* 
* Установка картинки-крестика в первое поле в среднем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box4Click()
{
	if(isWinner == true || workMatrix[3] != 0) return;
	document.getElementsByClassName('box4')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[3] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[5] < 1){document.getElementById('box6').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[5] = 2;}
	else if(workMatrix[0] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[6] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор второго поля в среднем ряду
* 
* Установка картинки-крестика во второе поле в среднем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box5Click()
{
	if(isWinner == true || workMatrix[4] != 0) return;
	document.getElementsByClassName('box5')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[4] = 1;
	if(workMatrix[0] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else if(workMatrix[1] == 1 && workMatrix[7] < 1){document.getElementById('box8').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[7] = 2;}
	else if(workMatrix[2] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[3] == 1 && workMatrix[5] < 1){document.getElementById('box6').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[5] = 2;}
	else if(workMatrix[5] == 1 && workMatrix[3] < 1){document.getElementById('box4').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[3] = 2;}
	else if(workMatrix[6] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[7] == 1 && workMatrix[1] < 1){document.getElementById('box2').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[1] = 2;}
	else if(workMatrix[8] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор третьего поля в среднем ряду
* 
* Установка картинки-крестика во второе поле в среднем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box6Click()
{
	if(isWinner == true || workMatrix[5] != 0) return;
	document.getElementsByClassName('box6')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[5] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[3] < 1){document.getElementById('box4').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[3] = 2;}
	else if(workMatrix[2] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else if(workMatrix[8] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор первого поля в нижнем ряду
* 
* Установка картинки-крестика в первое поле в нижнем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box7Click()
{
	if(isWinner == true || workMatrix[6] != 0) return;
	document.getElementsByClassName('box7')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[6] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[3] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else if(workMatrix[7] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор второго поля в нижнем ряду
* 
* Установка картинки-крестика во второе поле в нижнем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box8Click()
{
	if(isWinner == true || workMatrix[7] != 0) return;
	document.getElementsByClassName('box8')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[7] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[1] < 1){document.getElementById('box2').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[1] = 2;}
	else if(workMatrix[6] == 1 && workMatrix[8] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[8] == 1 && workMatrix[6] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}
/** 
* Выбор третьего поля в нижнем ряду
* 
* Установка картинки-крестика в третье поле в нижнем ряду,
* анализ ранее выбранных полей и выбор поля для нолика.
*  
*  */
function Box9Click()
{
	if(isWinner == true || workMatrix[8] != 0) return;
	document.getElementsByClassName('box9')[0].innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[8] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else if(workMatrix[5] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[7] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
}