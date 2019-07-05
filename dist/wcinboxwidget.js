angular.module('wcInboxWidgetTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('inbox-widget.html',
    "<wc-cards-customized cards-config=\"$ctrl.config\">\r" +
    "\n" +
    "	<img src=\"{{$ctrl.config.topImage}}\" class=\"card-img-top\" alt=\"Top Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config.topImage\">\r" +
    "\n" +
    "  	<h5 class=\"card-title\" ng-if=\"$ctrl.config.title\">{{$ctrl.config.title}}</h5>\r" +
    "\n" +
    "    <h6 class=\"card-subtitle mb-2 text-muted\" ng-if=\"$ctrl.config.subTitle\">{{$ctrl.config.subTitle}}</h6>\r" +
    "\n" +
    "    <p class=\"card-text\" ng-if=\"$ctrl.config.bodyText\">{{$ctrl.config.bodyText}}</p>\r" +
    "\n" +
    "    <a href=\"{{link.href}}\" class=\"card-link\" ng-repeat=\"link in $ctrl.config.cardLinks track by $index\" ng-if=\"$ctrl.config.cardLinks.length>0\">{{link.text}}</a>\r" +
    "\n" +
    "    <img src=\"{{$ctrl.config.bottomImage}}\" class=\"card-img-top\" alt=\"Bottom Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config.bottomImage\">\r" +
    "\n" +
    "    <ul class=\"list-group list-group-flush\" ng-if=\"$ctrl.config.cardDetails.length>0\">\r" +
    "\n" +
    "    	<li class=\"list-group-item\" ng-repeat=\"detail in $ctrl.config.cardDetails track by $index\" \r" +
    "\n" +
    "    		ng-mouseenter=\"rowHover = true\" ng-mouseleave=\"rowHover = false\" ng-click=\"$ctrl.config.rowClickFn(detail)\" style=\"cursor: pointer;\">\r" +
    "\n" +
    "    		<i class=\"icon\" ng-class=\"{'ion-md-mail': !rowHover, 'ion-md-mail-open': rowHover}\"></i>\r" +
    "\n" +
    "    		{{detail.text}}\r" +
    "\n" +
    "    	</li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</wc-cards-customized>"
  );

}]);

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
