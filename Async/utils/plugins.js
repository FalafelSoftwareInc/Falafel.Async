/**
 * This is a jQuery plugins utils module
 */
define([
	'jquery',
    'utils/helpers',
    'utils/alerts',
	'kendoui/kendo.core.min'
], function ($, Helpers, Alerts) {

    //LOADS VIEW AND POPULATES WITH DATA
    $.fn.loadView = function (options) {
        var me = this;
        var defer = new $.Deferred();

        //ASSIGN DEFAULT VALUES
        var settings = $.extend({
            loading: true
        }, options);

        //ACTIVATE LOADING PANEL IF APPLICABLE
        if (settings.loading) Alerts.initLoading();

        //GET VIEW VIA AJAX
        $.get(settings.url, function (frag) {
            //INITALIZE CONTENT AND BIND DATA
            var content = settings.data
                ? kendo.template(frag)(settings.data)
                : frag;

            //LOAD VIEW TO DOM
            me.html(content);

            //ENABLE CHAINING AND PASS TO CALLBACK
            defer.resolve(me);
        }).fail(function () {
            defer.reject();
        }).always(function () {
            //DEACTIVATE LOADING PANEL IF APPLICABLE
            if (settings.loading) Alerts.exitLoading();
        });

        return defer.promise();
    };

    //MODIFY QUERY STRING OF LINKS
    $.fn.queryString = function (data) {
        //UPDATE LINKS BASED ON DATA PROPERTIES
        for (var prop in data) {
            this.each(function() {
                var value = $(this).attr('href');
                $(this).attr('href', Helpers.updateQueryString(value, prop, data[prop]));
            });
        }
    };
});
