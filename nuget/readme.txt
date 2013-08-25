# [Falafel.Async]
==================
https://github.com/FalafelSoftwareInc/Falafel.Async

Repository containing a set of shared &amp; commonly used js libraries &amp; style files for use with development.
All files are minified for production use, excluding Bootstrap, Kendo & Sitefinity .LESS files.

## Async/libs
Library collection to be used with require.js asynchronous loading:

### /backbone
* Description: Provides models with key-value binding, collections with an API and view in a JSON interface.
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://backbonejs.org/](http://backbonejs.org/)

### /bootstrap
* Description: Containing both .less & .css and minified .js
* Version: `0.0.0`
* Status: `Customized`
* Source: [https://github.com/twitter/bootstrap](https://github.com/twitter/bootstrap)

### /bxslider
* Description: Responsive jQuery Content Slider.
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://bxslider.com/](http://bxslider.com/)

### /html5shiv
* Description: HTML5 IE enabling script
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://code.google.com/p/html5shiv/](https://code.google.com/p/html5shiv/)

### /innerfade
* Description: Extended version of original jQuery plugin
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/wesbaker/jquery.innerFade](https://github.com/wesbaker/jquery.innerFade)

### /jquery
* Description: Customized for Sitefinity v5.4 compatibility.
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://blog.jquery.com/2012/11/13/jquery-1-8-3-released/](http://blog.jquery.com/2012/11/13/jquery-1-8-3-released/)

### /jquery-ui
* Description: Customized for Sitefinity v5.4 compatibility.
* Version: `0.0.0`
* Status: `Customized`
* Source: [http://jqueryui.com/](http://jqueryui.com/)

### /js-url
* Description: Lightweight url parser for JavaScript
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/websanova/js-url](https://github.com/websanova/js-url)

### /kendoui/all
* Description: Combined version of Kendo UI DataViz, Web & Mobile
* Version: `0.0.0`
* Status: `Customized`
* Source: [http://www.kendoui.com](http://www.kendoui.com)

### /kendoui/dataviz
* Description: Kendo UI DataViz
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://www.kendoui.com](http://www.kendoui.com)

### /kendoui/mobile
* Description: Kendo UI Mobile
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://www.kendoui.com](http://www.kendoui.com)

### /kendoui/mvc
* Description: Kendo UI Server Side Wrappers
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://www.kendoui.com](http://www.kendoui.com)

### /kendoui/web
* Description: Kendo UI Web
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://www.kendoui.com](http://www.kendoui.com)

### /mediaelement
* Description: HTML5 video & audio player with Flash fallback
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/johndyer/mediaelement/](https://github.com/johndyer/mediaelement/)

### /modernizr
* Description: Feature detection library for HTML5/CSS3
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://modernizr.com/](http://modernizr.com/)

### /moment
* Description: library for parsing, validating, manipulating, and formatting dates
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/timrwood/moment/](https://github.com/timrwood/moment/)

### /mustache
* Description: Minimal templating with {{mustaches}}
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/janl/mustache.js](https://github.com/janl/mustache.js)

### /parse
* Description: Containing both official and 3rd party API calls to Parse.com
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://www.parse.com/docs/js_guide](https://www.parse.com/docs/js_guide)
* Source: [https://github.com/srhyne/jQuery-Parse](https://github.com/srhyne/jQuery-Parse)

### /require
* Description: Require JS & helpers
* Version: `0.0.0`
* Status: `Fork`
* Source: [http://requirejs.org/](http://requirejs.org/)

### /respond
* Description: Polyfill for min/max-width CSS3 Media Queries for IE 6-8, and more
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/scottjehl/Respond](https://github.com/scottjehl/Respond)

### /sitefinity
* Description: Less & css version of minimal reset styles, and web services API
* Version: `0.0.0`
* Status: `Customized`
* Source: n/a

### /toastr
* Description: library for Gnome / Growl type non-blocking notifications
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/CodeSeven/toastr](https://github.com/CodeSeven/toastr)

### /underscore
* Description: utility-belt library that provides a lot of the functional programming support
* Version: `0.0.0`
* Status: `Fork`
* Source: [https://github.com/documentcloud/underscore](https://github.com/documentcloud/underscore)


## Support & Copyright
All data & samples are provided as is and merely aggregated. 
For licensing & copyright information check the respective links.

## Notes
Do not change anything in the ~/Async folder! Updates will overwrite your changes.
To initialize your app or extend the RequireJS configurations, add your script file
after "require.js" and "main.js" on the page.

Follow this sample for your custom file if needed:
<pre>
/**
* Extend root main.js with this file
*/
; (function () {
    //DETERMINE BASE URL FROM CURRENT SCRIPT PATH
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].src;
    var currentUrl = src.substring(src.indexOf(document.location.pathname), src.lastIndexOf('/'));

    //EXTEND REQUIREJS CONFIG
    require.config({
        paths: {
            exampleplugin: currentUrl + '/libs/example/example.min'
        },
        shim: {
            exampleplugin: ['jquery']
        }
    });

    //INITIALIZE MY APP
    require([
        'jquery',
		'underscore',
        'bootstrap3',
        'kendoui/kendo.core.min'
    ], function ($, _) {

        var init = function () {
            //INITIALIZE APP PARTS
            initElements();
        };

        var initElements = function () {
			//ADD TITLE TO HTML TAG AS CLASS
			if (document.title)
			  $(document.documentElement)
				.addClass(_.slugify(document.title));
			  
            //ON DOC READY
            $(function () {
                //PLACEHOLDER FOR DOM ELEMENTS UPDATES
            });
        };

        //INITIALIZE APP
        init();
    });
})();
</pre>
--------------------------------------------------
