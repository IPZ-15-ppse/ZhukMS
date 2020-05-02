var area = document.getElementById('area'),
	move = 0,
	isWinner = false;
	
function CheckWinner()
{
	var boxes = document.getElementsByClassName('box');
	var arr = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
	
	for(var i = 0; i < arr.length; i++)
	{
		if(boxes[arr[i][0]].innerHTML == 'Х' && boxes[arr[i][1]].innerHTML == 'Х' && boxes[arr[i][2]].innerHTML == 'Х')
		{
			var a = document.getElementById('winnerMessage').innerHTML = 'Победили крестики! Поздравляем!'
			isWinner = true;
		}
		else if(boxes[arr[i][0]].innerHTML == 'О' && boxes[arr[i][1]].innerHTML == 'О' && boxes[arr[i][2]].innerHTML == 'О')
		{
			document.getElementById('winnerMessage').innerHTML = 'Победили нолики! Поздравляем!'
			isWinner = true;
		}
	}
}

area.addEventListener('click', function(event)
{
	if(isWinner == true || event.target.innerText == 'Х' || event.target.innerText == 'О') return;
	if(move == 0) 
	{
		event.target.innerHTML = 'Х';
		move = 1;
	}
	else
	{
		event.target.innerHTML = 'О';
		move = 0;
	}
	CheckWinner()
});