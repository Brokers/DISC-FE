'use strict';

/**
 * @ngdoc directive
 * @name brokersWebPlatformApp.directive:ngVisible
 * @description
 * https://gist.github.com/c0bra/5859295
 * # ngVisible
 */
angular.module('brokersWebPlatformApp')
    .directive('ngVisible', function () {
        return function (scope, element, attr) {
            scope.$watch(attr.ngVisible, function (visible) {
                element.css('visibility', visible ? 'visible' : 'hidden');
                element.css('opacity', visible ? 'initial' : 0);
            });
        };
    })
