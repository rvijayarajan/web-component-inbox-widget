(function () {

 	var app = angular.module("wcInboxWidget",["wcCardsCustomized","wcInboxWidgetTemplates"]);

	app.component("wcInboxWidget", {
		templateUrl: "inbox-widget.html",
		bindings: {
			config: "<cardsConfig"
		},
		transclude: true,
		controller: "InboxWidgetController"
	});

	app.controller("InboxWidgetController", InboxWidgetControllerFn);

	InboxWidgetControllerFn.$inject = ["$scope"];

	function InboxWidgetControllerFn($scope) {

		var vm = $scope.$ctrl;
		
		vm.refresh = function() {
			if(angular.isFunction(vm.config.refreshFn)) {
				vm.config.refreshFn();
			}
		};
	}

})();
