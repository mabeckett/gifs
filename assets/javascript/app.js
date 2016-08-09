var games = ['Gears of War', 'Bloodbourne', 'Dark Souls', 'Total War: Warhammer', 'Battlefield 4', 'Crysis 2: Maximum Edition', 'Killing Floor',
				'Halo', 'Splinter Cell', 'Metal Gear Solid'];

function showGameDetails() {

	var game = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=dc6zaTOxFJmzC";

		$.ajax({url: queryURL, method: 'GET'})
		 .done(function(response) {
		     console.log(response);

	     var gamesDiv = $('<div class = "gamesDiv">');

		}); 
}

function generateButtons() {

	$('#gameButtons').empty();

	for (var i = 0; i < games.length; i++) {

		var meta = $('<button>');
		meta.addClass('games');
		meta.attr('data-name', games[i]);
		meta.text(games[i]);
		$('#gameButtons').append(meta);
	}
}


$('#addGames').click(function() {

	var videoGames = $('#gamesInput').val().trim();
	games.push(videoGames);

	generateButtons();

	return false;
	})

generateButtons();