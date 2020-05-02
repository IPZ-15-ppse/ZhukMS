var isWinner = false;
	
var workMatrix = [0,0,0,0,0,0,0,0,0]
	
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

function SetFirstEmptyBox()
{
	for(var i = 0; i < workMatrix.length; i++)
	{
		if(workMatrix[i] == 0)
		{
			var elem = document.getElementById('box' + (i+1))
			elem.innerHTML = '<img src="4.png" width="80" height="80"/>';
			workMatrix[i] = 2;
			break;
		}
	}
}

document.getElementById('box1').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[0] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[0] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else if(workMatrix[3] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[1] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box2').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[1] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[1] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[7] < 1){document.getElementById('box8').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[7] = 2;}
	else if(workMatrix[0] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[2] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box3').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[2] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[2] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[1] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else if(workMatrix[5] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box4').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[3] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[3] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[5] < 1){document.getElementById('box6').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[5] = 2;}
	else if(workMatrix[0] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[6] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box5').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[4] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
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
});

document.getElementById('box6').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[5] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[5] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[3] < 1){document.getElementById('box4').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[3] = 2;}
	else if(workMatrix[2] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else if(workMatrix[8] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box7').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[6] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[6] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[3] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else if(workMatrix[7] == 1 && workMatrix[8] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box8').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[7] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[7] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[1] < 1){document.getElementById('box2').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[1] = 2;}
	else if(workMatrix[6] == 1 && workMatrix[8] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else if(workMatrix[8] == 1 && workMatrix[6] < 1){document.getElementById('box9').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[8] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});

document.getElementById('box9').addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[8] != 0) return;
	event.target.innerHTML = '<img src="3.png" width="80" height="80"/>';
	workMatrix[8] = 1;
	if(workMatrix[4] == 0){document.getElementById('box5').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[4] = 2;}
	else if(workMatrix[4] == 1 && workMatrix[0] < 1){document.getElementById('box1').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[0] = 2;}
	else if(workMatrix[5] == 1 && workMatrix[2] < 1){document.getElementById('box3').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[2] = 2;}
	else if(workMatrix[7] == 1 && workMatrix[6] < 1){document.getElementById('box7').innerHTML = '<img src="4.png" width="80" height="80"/>'; workMatrix[6] = 2;}
	else SetFirstEmptyBox();
	CheckWinner();
});