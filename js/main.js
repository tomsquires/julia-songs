		
$(function() {
			
			var activeSong;
			
			SC.initialize({
				client_id: "af032ce963c757ca0407ef20b88503bb",
			});
			
			$("#startSong").click(function() {
				
			SC.stream("/tracks/293", function(sound){
				
			if(activeSong){
				activeSong.stop();
				activeSong = undefined;
			}
			
			activeSong = sound;
			activeSong.play();
		  });
		});
});		
		
		
