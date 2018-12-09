var dragonfly = (function (dragonfly) {

	dragonfly.logic = (function (logic) {

		// --------------------------------------------------------------------------------
		// Private properties
		// --------------------------------------------------------------------------------

		var gameDifficulty  = {
			Easy: 1,
			Medium: 2,
			Hard: 3,
		};

		var currentShapesList = new Array();

		// --------------------------------------------------------------------------------
		// DOM objects
		// --------------------------------------------------------------------------------

		var $BTNStartGame = $('#BTNStartGame');
		var $BTNOptions = $('#BTNOptions');
		var $BTNCredits = $('#BTNCredits');
		var $GameContainer = $('#GameContainer');
		var $CurrentShapeContainer = $('#CurrentShapeContainer');
		var $CurrentShape = $('#CurrentShape');

		// Audio / Sound

		var btnClickAudio = document.createElement('audio');
   		btnClickAudio.setAttribute('src', 'audio/click.mp3');

		// --------------------------------------------------------------------------------
		// Private functions
		// --------------------------------------------------------------------------------

		function Init() {

		}

		Init();

		// Game Logic - Start

		

		// Game Logic - End

		// GUI Logic - Start

		// Opens the View with the specified class name.
		function openView(viewClass) {
			close();
			$(viewClass).addClass("active");
		}

		function close() {
			$(".mainMenu").removeClass("active");
			$(".optionsMenu").removeClass("active");
			$(".inGame").removeClass("active");
			$(".credits").removeClass("active");
		}

		// Click Event Handlers

		$BTNStartGame.click(function() {
			openView(".inGame");
		});

		$BTNOptions.click(function() {
			openView(".optionsMenu");
		});

		$BTNCredits.click(function() {
			openView(".credits");
		});

		$(".backBTN").click(function() {
			openView(".mainMenu");
		});

		// Audio / Sound

		$(".button").click(function() {
			btnClickAudio.play();
		});

		// GUI Logic - End

		return logic;

	}(dragonfly.logic || {}));

	return dragonfly;

}(dragonfly || {}));