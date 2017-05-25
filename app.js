$(document).ready(function () {
	$(".lightbox").hide();
	var api = "https://api.spotify.com/v1/artists/67qogtRNI0GjUr8PlaG6Zh/top-tracks?country=US";
	var opts = {
		dataType: "json"
	};
	function callback(data) {
		$(".header").append("<h1>" + data.tracks[0].artists[0].name + "'s Top Tracks");
		for (i = 0; i < 9; i++) {
			var name = data.tracks[i].name;
			var image = data.tracks[i].album.images[1].url;
			$(".content").append(
				"<div class='track'" + "id=" + "'" + i + "'" + ">" +
				"<span>" + name + "</span>" +
				"<img src=" + "'" + image + "'" + ">" +
				"</div>"
			);
		}
		$(".track").click(function() {
			var track = $(this).attr('id');
			var name = data.tracks[track].name;
			var image = data.tracks[track].album.images[0].url;
			var duration = msConvert(data.tracks[track].duration_ms);
			var artists = data.tracks[track].artists;
			var artistsKeys = Object.keys(artists);
			var artistName = "";
			for (i = 0; i < artistsKeys.length; i++) {
				if (i === (artistsKeys.length - 1)) {
					artistName = artistName + data.tracks[track].artists[i].name + ".";
				} else {
					artistName = artistName + data.tracks[track].artists[i].name + ", ";
				}
			}

			function msConvert(ms) {
				var minutes = Math.floor(ms / 60000);
				var seconds = ((ms % 60000) / 1000).toFixed(0);
				return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
			}

			$(".lbContent div").append(
				"<img src=" + "'" + image + "'" + ">" +
				"<h2>" + name + "</h2>" +
				"<span>Duration: " + duration + "</span>" +
				"<span>Artists: " + artistName + "</span>"
			);

			$(".lightbox").show();
			$("#back").click(function() {
				$(".lightbox").hide();
				$(".lbContent div").empty();
			})
		});

	};
	$.getJSON(api, opts, callback);
});

// Add Lightbox

// Artist's Name's Top Tracks (header)

// <img src="#">
// <h2>Title</h2>
// <span id="description">Description</span>
// <span id="duration">Duration</span>