var players = [];

var request = new XMLHttpRequest();
request.open('get', 'https://www.balldontlie.io/api/v1/players', true);

request.onload = function(){

  var data = JSON.parse(this.response);
  if(request.status >= 200 && request.status < 400){
	  players = data.data;
      populateData(data.data);
  } else {
    const errorMessage = document.createElement('h2');
    errorMessage.textContent = `It's not working`;
    app.appendChild(errorMessage);
  }
}

request.send();

filterPlayers = function(){

		var searchTerm = document.getElementById('searchBar');
		if(!searchTerm || !searchTerm.value){
			populateData(players);
			return;
		}

	if(!!players && !!players.length){

		var filteredPlayers = players.filter(x=>x.first_name.toLowerCase().includes(searchTerm.value.toLowerCase()) || x.last_name.toLowerCase().includes(searchTerm.value.toLowerCase()));
		populateData(filteredPlayers);
	}

}

filterByPosition = function(position){
	var filteredPlayers = players.filter(x => x.position.toLowerCase().includes(position.toLowerCase()));
	populateData(filteredPlayers);
}

sortByName = function(){
	var sortedPlayers = players.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
	populateData(sortedPlayers);
}


populateData = function(playersData){

	var html = '';
	playersData.forEach(player => {
		            html +=     `
						<tr>
							<td> ${player.id} </td>
							<td> ${player.first_name} </td>
							<td> ${player.last_name} </td>
							<td> ${player.position} </td>
							<td> ${player.team.full_name} </td>
							<td> ${player.team.city} </td>
							</tr>

        `;
    });
    
	var table = document.getElementById('tableBody');
	table.innerHTML = '';

	if(!!table){
		table.innerHTML = html;
	}
}
