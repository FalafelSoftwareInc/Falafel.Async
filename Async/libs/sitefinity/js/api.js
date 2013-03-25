/**
 * This is an API wrapper for Sitefinity
 */
define([
	'jquery',
    'utils/helpers'
], function ($, Helpers) {

    var getImagesByAlbum = function (name) {
        return $.getJSON(Helpers.toServicesUrl('/images/getbyalbum?value=' + name));
    }

    var getImagesByAlbumId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/images/getbyalbumid?id=' + id));
    }

    //PUBLIC PROPERTIES
    return {
        getImagesByAlbum: getImagesByAlbum
    };
});