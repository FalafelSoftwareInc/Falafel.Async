/**
 * This is the storage
 */
define([
    'jquery',
    'underscore',
    'taffy',
    'utils/helpers'
], function ($, _, TAFFY, Helpers) {
    //PRIVATE PROPERTIES
    var database = [];

    var getTable = function (key, options) {
        var defer = new $.Deferred();
        options = options || {};

        if (!database[key]) {
            //CALL JSON DATA VIA AJAX
            $.getJSON(Helpers.toServicesUrl(options.service || key))
                .done(function (json) {
                    //CREATE DATABASE FOR LATER USE
                    database[key] = TAFFY(json);

                    //PASS DATA TO CALLBACK
                    defer.resolve(database[key]);
                }).fail(function () {
                    defer.reject();
                });
        } else {
            //PASS DATA TO CALLBACK
            defer.resolve(database[key]);
        }

        return defer.promise();
    };

    var get = function (key, filter, options) {
        var defer = new $.Deferred();

        //GET TABLE AND RETRIEVE DATA
        getTable(key, options)
            .done(function (data) {
                //OVERLOAD PARAMETER FOR ID OR FILTER
                var overloaded = _.isObject(filter) ? filter : { id: filter };

                //PASS DATA TO CALLBACK
                defer.resolve(data(overloaded).first());
            }).fail(function () {
                defer.reject();
            });

        return defer.promise();
    };

    var getAll = function (key, filter, options) {
        var defer = new $.Deferred();

        //GET TABLE AND RETRIEVE DATA
        getTable(key, options)
            .done(function (data) {
                //PASS DATA TO CALLBACK
                defer.resolve(data(filter).get());
            }).fail(function () {
                defer.reject();
            });

        return defer.promise();
    };

    //PUBLIC PROPERTIES
    return {
        get: get,
        getAll: getAll
    };
});