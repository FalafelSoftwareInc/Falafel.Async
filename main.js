; (function () {
    // Grab rooturl from hidden-input
    var rootUrl = $('#rootUrl').val();

    //DEFINE BASE URL MODULES FOR RELATIVE PATHING LATER
    define('baseurl', [], function () { return rootUrl; });
    define('basescriptsurl', [], function () { return rootUrl + '/Falafel.Sitefinity/Async'; });
    define('baseservicesurl', [], function () { return  rootUrl + '/Falafel.Sitefinity/Api'; });

    //HANDLE JQUERY IF LOADED ALREADY TO AVOID OVERWRITING EXISTING JQUERY PROPERTIES AND PLUGINS
    if (!window.jQuery) {
        //SPECIFY ALIAS TO PATH IN CONFIG
        require.config({
            paths: {
                jquery: '/Falafel.Sitefinity/Async/libs/jquery/js/jquery.min'
            }
        });
    }
    else {
        //REGISTER THE CURRENT JQUERY
        define('jquery', [], function () {
            return window.jQuery;
        });
    }

    //CONFIFURE SHORTCUT ALIASES
    //baseUrl: RootUrl,
    require.config({
        paths: {
            alert: 'libs/require/js/alert.min',
            app: 'app.min',
            async: 'libs/require/js/async.min',
            bootstrap: 'libs/bootstrap/js/bootstrap.min',
            domReady: 'libs/require/js/domReady.min',
            font: 'libs/require/js/font.min',
            goog: 'libs/require/js/goog.min',
            helpers: 'libs/require/js/helpers.min',
            html5shiv: 'libs/html5shiv/js/html5shiv.min',
            i18n: 'libs/require/js/i18n.min',
            innerfade: 'libs/innerfade/js/jquery.innerfade.min',
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
            propertyParser: 'libs/require/js/propertyParser.min',
            respond: 'libs/respond/js/respond.min',
            text: 'libs/require/js/text.min',
            underscore: 'libs/underscore/js/underscore-min',
            'underscore.string': 'libs/underscore/js/underscore.string.min'
        },
        // The shim config allows us to configure dependencies for
        // scripts that do not call define() to register a module
        shim: {
            bootstrap: ['jquery'],
            innerfade: ['jquery'],
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
            moment: {
                deps: ['jquery'],
                exports: 'moment'
            },
            mustache: {
                exports: 'Mustache'
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
require(['app'], function (App) {
    //INITIALIZE APP
    App.init();
});
