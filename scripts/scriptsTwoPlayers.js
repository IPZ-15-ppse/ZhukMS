/** 
* Признак очередности ходов
* 
* Целочисленная переменная
* устанавливается в 0, если ходят крестики
* устанавливается в 1, если ходят нолики
* 
* @var             int   move */
var move = 0;
/** 
* Признак завершения игры 
* 
* Логичкеская переменная
* устанавливается в false в начале игры,
* устанавливается в true, когда
* один из игроков победил
* 
* @var             bool   isWinner */
var isWinner = false;
	/** 
* Массив рабочего поля игры 
* 
* В начале игры все элементы устанавливаются в ноль
* В ходе заполнения полей рабочего поля игры элементы
* устанавливаются в 1 - если поле заполнено крестиком,
* или 2 - если поле заполнено ноликом
* 
* @var             Array   workMatrix */
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
* Выбор первого поля в верхнем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки в первое поле в верхнем ряду,
*  
*  */
function Box1Click()
{
	if(isWinner == true || workMatrix[0] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box1')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[0] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box1')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[0] = 2;
		move = 0;
	}
	CheckWinner()
}
/** 
* Выбор второго поля в верхнем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки во второе поле в верхнем ряду,
*  
*  */
function Box2Click()
{
	if(isWinner == true || workMatrix[1] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box2')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[1] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box2')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[1] = 2;
		move = 0;
	}
	CheckWinner();
}
/** 
* Выбор третьего поля в верхнем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки в третье поле в верхнем ряду,
*  
*  */
function Box3Click()
{
	if(isWinner == true || workMatrix[2] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box3')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[2] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box3')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[2] = 2;
		move = 0;
	}
	CheckWinner();	
}
/** 
* Выбор первого поля в среднем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки в первое поле в среднем ряду,
*  
*  */
function Box4Click()
{
	if(isWinner == true || workMatrix[3] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box4')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[3] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box4')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[3] = 2;
		move = 0;
	}
	CheckWinner();
}
/** 
* Выбор второго поля в среднем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки во второе поле в среднем ряду,
*  
*  */
function Box5Click()
{
	if(isWinner == true || workMatrix[4] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box5')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[4] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box5')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[4] = 2;
		move = 0;
	}
	CheckWinner();
}
/** 
* Выбор третьего поля в среднем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки в третье поле в среднем ряду,
*  
*  */
function Box6Click()
{
	if(isWinner == true || workMatrix[5] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box6')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[5] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box6')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[5] = 2;
		move = 0;
	}
	CheckWinner();
}
/** 
* Выбор первого поля в нижнем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки в первое поле в нижнем ряду,
*  
*  */
function Box7Click()
{
	if(isWinner == true || workMatrix[6] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box7')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[6] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box7')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[6] = 2;
		move = 0;
	}
	CheckWinner();
}
/** 
* Выбор второго поля в нижнем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки во второе поле в нижнем ряду,
*  
*  */
function Box8Click()
{
	if(isWinner == true || workMatrix[7] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box8')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[7] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box8')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[7] = 2;
		move = 0;
	}
	CheckWinner();
}
/** 
* Выбор третьего поля в нижнем ряду
* 
* Анализ очерёдности хода и установка
* соответствующей картинки в третье поле в нижнем ряду,
*  
*  */
function Box9Click()
{
	if(isWinner == true || workMatrix[8] != 0) return;
	if(move == 0)
	{
		document.getElementsByClassName('box9')[0].innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[8] = 1;
		move = 1;
	}
	else
	{
		document.getElementsByClassName('box9')[0].innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[8] = 2;
		move = 0;
	}
	CheckWinner();
}

