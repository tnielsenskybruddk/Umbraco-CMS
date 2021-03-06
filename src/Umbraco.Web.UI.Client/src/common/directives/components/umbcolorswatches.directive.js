﻿
/**
@ngdoc directive
@name umbraco.directives.directive:umbColorSwatches
@restrict E
@scope
@description
Use this directive to generate color swatches to pick from.
<h3>Markup example</h3>
<pre>
    <umb-color-swatches
        colors="colors"
        selected-color="color"
        size="s">
    </umb-color-swatches>
</pre>
@param {array} colors (<code>attribute</code>): The array of colors.
@param {string} colors (<code>attribute</code>): The array of colors.
@param {string} selectedColor (<code>attribute</code>): The selected color.
@param {string} size (<code>attribute</code>): The size (s, m).
@param {function} onSelect (<code>expression</code>): Callback function when the item is selected.
**/

(function () {
    'use strict';

    function ColorSwatchesDirective() {

        function link(scope, el, attr, ctrl) {

            scope.setColor = function (color) {
                //scope.selectedColor({color: color });
                scope.selectedColor = color;

                if (scope.onSelect) {
                    scope.onSelect(color);
                }
            };
        }

        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'views/components/umb-color-swatches.html',
            scope: {
                colors: '=?',
                size: '@',
                selectedColor: '=',
                onSelect: '&'
            },
            link: link
        };

        return directive;

    }

    angular.module('umbraco.directives').directive('umbColorSwatches', ColorSwatchesDirective);

})();
