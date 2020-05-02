var move = 0,
	isWinner = false;
	
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

document.getElementsByClassName('box1')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[0] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[0] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[0] = 2;
		move = 0;
	}
	CheckWinner()
});

document.getElementsByClassName('box2')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[1] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[1] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[1] = 2;
		move = 0;
	}
	CheckWinner();
});

document.getElementsByClassName('box3')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[2] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[2] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[2] = 2;
		move = 0;
	}
	CheckWinner();	
});

document.getElementsByClassName('box4')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[3] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[3] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[3] = 2;
		move = 0;
	}
	CheckWinner();
});

document.getElementsByClassName('box5')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[4] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[4] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[4] = 2;
		move = 0;
	}
	CheckWinner();
});

document.getElementsByClassName('box6')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[5] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[5] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[5] = 2;
		move = 0;
	}
	CheckWinner();
});

document.getElementsByClassName('box7')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[6] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[6] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[6] = 2;
		move = 0;
	}
	CheckWinner();
});

document.getElementsByClassName('box8')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[7] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[7] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[7] = 2;
		move = 0;
	}
	CheckWinner();
});

document.getElementsByClassName('box9')[0].addEventListener('click', function(event)
{
	if(isWinner == true || workMatrix[8] != 0) return;
	if(move == 0)
	{
		event.target.innerHTML = '<img src="1.png" width="80" height="80"/>'
		workMatrix[8] = 1;
		move = 1;
	}
	else
	{
		event.target.innerHTML = '<img src=\"2.png\" width=\"80\" height=\"80\">'
		workMatrix[8] = 2;
		move = 0;
	}
	CheckWinner();
});

