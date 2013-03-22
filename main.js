; (function () {
    //DEFINE BASE URL MODULES IF NOT GENERATED BY SERVER-SIDE
    if (!require.defined('baseurl')) {
        //DETERMINE BASE URL FROM CURRENT SCRIPT PATH
        var scripts = document.getElementsByTagName('script');
        var src = scripts[scripts.length - 1].src;
        var baseScriptsUrl = src.substring(src.indexOf(document.location.pathname), src.lastIndexOf('/'));

        //DEFINE BASE URL MODULES FOR RELATIVE PATHING LATER
        //TODO: OR !SIMPLY! CREATE JS MODULE SERVER-SIDE: HostingEnvironment.ApplicationVirtualPath
        define('baseurl', [], function () {
            //ASSUME SCRIPTS IS IN THE FOLLOWING FOLDERS
            var tempUrl = baseScriptsUrl.toLowerCase();
            var index = tempUrl.indexOf('/async');

            //CALCULATE VIRTUAL ROOT PATH BY SUBTRACTING CURRENT PATH
            return baseScriptsUrl.substring(0, index + 1);
        });
        define('basescriptsurl', [], function () { return baseScriptsUrl; });
        define('baseservicesurl', [], function () { return '~/api'; });
        define('basemvcurl', [], function () { return '~/mvcroute'; });
    }

    //HANDLE JQUERY IF LOADED ALREADY TO AVOID OVERWRITING EXISTING JQUERY PROPERTIES AND PLUGINS
    if (!window.jQuery) {
        //SPECIFY ALIAS TO PATH IN CONFIG
        require.config({
            paths: {
                jquery: 'libs/jquery/js/jquery.min'
            }
        });
    } else {
        //REGISTER THE CURRENT JQUERY
        define('jquery', [], function () { return window.jQuery; });
    }

    //CONFIFURE SHORTCUT ALIASES
    require.config({
        baseUrl: baseScriptsUrl,
        paths: {
            alert: 'libs/require/js/alert.min',
            async: 'libs/require/js/async.min',
            bootstrap: 'libs/bootstrap/js/bootstrap.min',
            bxslider: 'libs/bxslider/js/jquery.bxslider.min',
            domReady: 'libs/require/js/domReady.min',
            font: 'libs/require/js/font.min',
            goog: 'libs/require/js/goog.min',
            helpers: 'libs/require/js/helpers.min',
            html5shiv: 'libs/html5shiv/js/html5shiv.min',
            i18n: 'libs/require/js/i18n.min',
            innerfade: 'libs/innerfade/js/jquery.innerfade.min',
            jqparse: 'libs/parse/js/jquery.parse',
            jqueryui: 'libs/jquery-ui/js/jquery-ui.min',
            json2: 'libs/require/js/json2.min',
            jsurl: 'libs/js-url/js/js-url.min',
            kendoall: 'libs/kendoui/all/js/kendo.all.min',
            kendodataviz: 'libs/kendoui/dataviz/js/kendo.dataviz.min',
            kendomobile: 'libs/kendoui/mobile/js/kendo.mobile.min',
            kendomvc: 'libs/kendoui/mvc/js/kendo.aspnetmvc.min',
            kendoweb: 'libs/kendoui/web/js/kendo.web.min',
            mediaelement: 'libs/mediaelement/js/mediaelement.min',
            mediaelementplayer: 'libs/mediaelement/js/mediaelementplayer.min',
            modernizr: 'libs/modernizr/js/modernizr.min',
            moment: 'libs/moment/js/moment.min',
            mustache: 'libs/mustache/js/mustache.min',
            mdown: 'libs/require/js/mdown.min',
            noext: 'libs/require/js/noext.min',
            parse: 'libs/parse/js/parse.min',
            propertyParser: 'libs/require/js/propertyParser.min',
            respond: 'libs/respond/js/respond.min',
            sitefinityapi: 'libs/sitefinity/js/api',
            text: 'libs/require/js/text.min',
            toastr: 'libs/toastr/js/toastr.min',
            underscore: 'libs/underscore/js/underscore-min',
            'underscore.string': 'libs/underscore/js/underscore.string.min'
        },
        // The shim config allows us to configure dependencies for
        // scripts that do not call define() to register a module
        shim: {
            bootstrap: ['jquery'],
            bxslider: ['jquery'],
            innerfade: ['jquery'],
            jqparse: ['jquery'],
			jsurl: ['jquery'],
            kendoall: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            kendoweb: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            kendomobile: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            kendodataviz: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            modernizr: {
                exports: 'Modernizr'
            },
            moment: {
                deps: ['jquery'],
                exports: 'moment'
            },
            mustache: {
                exports: 'Mustache'
            },
            parse: {
                exports: 'Parse'
            },
            toastr: {
                deps: ['jquery'],
                exports: 'toastr'
            },
            underscore: {
                deps: ['underscore.string'],
                exports: '_',
                init: function (_s) {
                    //MERGE STRING PLUGIN TO UNDERSCORE NAMESPACE
                    _.mixin(_s.exports());
                    return _;
                }
            }
        }
    });
})();
