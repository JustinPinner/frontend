/*
 Module: highlights-panel.js
 Description: Display experimental highlights panel
 */
define([
    'qwery',
    'common/utils/ajax',
    'lodash/objects/assign',

    'common/modules/component'
], function (
    qwery,
    ajax,
    extend,

    Component
    ) {

    function RightMostPopular(mediator, config) {
        this.config = extend(this.config, config);
        this.mediator = mediator;
        this.fetch(qwery('.mpu-context'), 'rightHtml');
    }

    Component.define(RightMostPopular);

    RightMostPopular.prototype.endpoint = '/most-read.json';

    return RightMostPopular;

});
