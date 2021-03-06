/**
 * This is a helper utils module
 */
define([
	'jquery',
	'underscore',
	'moment',
	'baseurl',
	'basescriptsurl',
	'baseservicesurl'
], function ($, _, moment, baseUrl, baseScriptsUrl, baseServicesUrl) {

    return {
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },

        toUrl: function (url) {
            if (url && url.indexOf('~/') === 0)
                url = this.combinePaths(baseUrl, url);

            return url;
        },

        toServicesUrl: function (url) {
            return this.toUrl(this.combinePaths(baseServicesUrl, url));
        },

        toScriptsUrl: function (url) {
            return this.toUrl(this.combinePaths(baseScriptsUrl, url));
        },

        toViewsUrl: function (url) {
            return this.toScriptsUrl('views/' +_.ltrim(url, '~/'));
        },

        combinePaths: function (path1, path2) {
            return _.rtrim(path1, '/') + '/' + _.ltrim(path2, '~/');
        },

        getCurrentPage: function () {
            var file = window.location.pathname;
            var index = file.lastIndexOf('/');
            var page = index >= 0 ? file.substring(index + 1).toLowerCase() : '';
			//REMVE VIRTUAL APP PATH IF APPLICABLE
			if (baseUrl && baseUrl != '/' && page == _.trim(baseUrl.toLowerCase(), '/'))
				page = '';
			return page;
        },

        getCurrentPageUrl: function () {
            return window.location.pathname.substring(baseUrl.length);
        },

        scrollTop: function () {
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        },

        openWindow: function (url, title, width, height) {
            var options = 'width=' + (width || 500) + ',height=' + (height || 500);
            return window.open(url, title, options);
        },

        bookmarkPage: function (title, url) {
            //DETERMINE TITLE AND URL
            title = title || document.title;
            url = url || window.location;

            //BOOKMARK PAGE BASED ON BROWSER
            if ($.browser.mozilla) window.sidebar.addPanel(title, url, "");
            else if ($.browser.msie) window.external.AddFavorite(url, title);
            else if (window.opera && window.print) {
                var elem = document.createElement('a');
                elem.setAttribute('href', url);
                elem.setAttribute('title', title);
                elem.setAttribute('rel', 'sidebar');
                elem.click();
            } else {
                alert('Unfortunately, this browser does not support the requested action,'
                	+ ' please bookmark this page manually.');
            }
        },

        sendClientMail: function (options) {
            //CONSTRUCT EMAIL PARAMETERS
            var url = 'mailto:' + encodeURIComponent(options.mailto) + '?';
            if (options.cc) url += 'cc=' + encodeURIComponent(options.cc) + '&';
            if (options.subject) url += 'subject=' + encodeURIComponent(options.subject) + '&';
            if (options.body) url += 'body=' + encodeURIComponent(options.body) + '&';

            //TRIM TRAILING QUERYSTRING DELIMITERS
            _.rtrim(url, '?&');

            //TRIGGER BROWSER EMAIL REQUEST (TIMEOUT BECAUSE OF "REDIRECT")
            setTimeout(function () {
                window.location.href = url;
            }, 1000);
        },

        convertToBoolean: function (value) {
            //VALIDATE INPUT
            if (this.isNullOrEmpty(value)) return false;

            //DETERMINE BOOLEAN VALUE FROM STRING
            if (typeof value === 'string') {
                switch (value.toLowerCase()) {
                    case 'true':
                    case 'yes':
                    case '1':
                        return true;
                    case 'false':
                    case 'no':
                    case '0':
                        return false;
                }
            }

            //RETURN DEFAULT HANDLER
            return Boolean(value);
        },

        parseJson: function (json) {
            //USES BROWSER JSON IF AVAILABLE FOR PERFORMANCE
            return JSON && JSON.parse(json) || $.parseJSON(json);
        },

        parseRss: function (url, options) {
            //VALIDATE INPUT
            options = options || {};

            //RETURN DEFERRED RSS ITEMS
            if (!this.isExternalUrl(url)) {
                return $.get(this.toUrl(url)).then(function (response) {
                    //PARSE RSS
                    var items = [];
                    $(response).find('item').each(function (index) {
                        var this$ = $(this);
                        var description = _.stripTags(this$.find('description').text());
                        items.push({
                            title: options.maxTitleChars
                                ? _.truncate(this$.find('title').text(), options.maxTitleChars)
                                : this$.find('title').text(),
                            description: options.maxDescriptionChars
                                ? _.truncate(description, options.maxDescriptionChars)
                                : description,
                            link: this$.find('link').text(),
                            pubDate: moment(this$.find('pubDate').text(), options.parseFormat
                                || 'ddd, DD, MMM YYYY hh:mm:ss Z')
                                .format(options.dateFormat || 'dddd, MMMM DD, YYYY'),
                            author: this$.find('author').text()
                        });
                        //STOP AT COUNTER IF APPLICABLE
                        if (options.maxItems && options.maxItems <= index + 1) return false;
                    });

                    //RETURN DEFERRED
                    return items;
                });
            } else {
                //HANDLE CROSS-DOMAIN REQUESTS VIA GOOGLE / JSONP SERVICE
                return $.getJSON(document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url))
                    .then(function (response) {
                        //PARSE RSS
                        var items = [];
                        if (response && response.responseData && response.responseData.feed) {
                            $.each(response.responseData.feed.entries, function (index) {
                                items.push({
                                    title: options.maxTitleChars
                                        ? _.truncate(this.title, options.maxTitleChars)
                                        : this.title,
                                    description: options.maxDescriptionChars
                                        ? _.truncate(_.stripTags(this.content), options.maxDescriptionChars)
                                        : _.stripTags(this.content),
                                    html: this.content,
                                    link: this.link,
                                    pubDate: moment(this.publishedDate)
                                        .format(options.dateFormat || 'dddd, MMMM DD, YYYY'),
                                    author: this.author
                                });
                                //STOP AT COUNTER IF APPLICABLE
                                if (options.maxItems && options.maxItems <= index + 1) return false;
                            });
                        }

                        //RETURN DEFERRED
                        return items;
                    });
            }
        },

        isExternalUrl: function (url) {
            var pattern = /^https?:\/\//i;
            return pattern.test(url);
        },

        isDeferred: function (data) {
            //DETERMINE IF ALL DATA IS DEFERRED IF APPLICABLE
            var isDeferred = false;
            if (data) {
                isDeferred = true;
                //HANDLE MULTIPLE INPUTS
                var arr = _.toArray(data);
                for (var i = 0; i < arr.length; i++) {
                    //DUCK-TYPING TO CHECK IF DEFERRED OBJECT
                    if (!arr[i].promise) {
                        isDeferred = false;
                        break;
                    }
                }
            }
            return isDeferred;
        },

        isNullOrEmpty: function (value) {
            return typeof value === 'undefined'
                || value === null
                || value.length === 0;
        },

        getValueOrDefault: function (value, defaultValue) {
            return !this.isNullOrEmpty(value) ? value : defaultValue;
        },

        toJquery: function (selector) {
            return selector instanceof $ ? selector : $(selector);
        },

        //http://stackoverflow.com/questions/15458876/check-if-a-string-is-html-or-not
        isHtml: function (value) {
        	return /<[a-z][\s\S]*>/i.test(value);
        },

        getCookie: function (key) {
            if ($.cookie) {
                //GET COOKIE VALUE AND CONVERT TO JSON
                var value = $.cookie(key);
                return value ? JSON.parse(value) : null;
            }
        },

        setCookie: function (key, values, options) {
            if ($.cookie) {
                //ASSIGN DEFAULT OPTIONS
                options = $.extend({
                    expires: 365,
                    path: '/'
                }, options);

                //HANDLE EXISTING COOKIE IF APPLICABLE
                if ($.cookie(key)) {
                    //GET EXISTING VALUES AND MERGE TO NEW VALUES
                    values = $.extend(JSON.parse($.cookie(key)), values);
                } else { //HANDLE NEW COOKIE
                    //ASSIGN DEFAULT VALUES
                    values = $.extend({
                        createDate: new Date()
                    }, values);
                }

                //SAVE COOKIE AND STORE AS JSON
                $.cookie(key, JSON.stringify(values), options);
            }
        },

        removeCookie: function (key, options) {
            if ($.cookie) {
                //ASSIGN DEFAULT OPTIONS
                options = $.extend({
                    path: '/',
                    expires: -1
                }, options);

                //USE NATIVE FUNCTION IF APPLICABLE
                if ($.removeCookie) {
                    //REMOVE COOKIE VALUE
                    return $.removeCookie(key, options);
                } else {
                    if ($.cookie(key) !== undefined) {
                        $.cookie(key, '', options);
                        return true;
                    }
                    return false;
                }
            }
        },

        isCookiesEnabled: function () {
            var cookieEnabled = (navigator.cookieEnabled) ? true : false;

            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }

            return cookieEnabled;
        },

        pushUnique: function (arr, value) {
            if ($.inArray(value, arr) < 0)
                arr.push(value);
        },

        remove: function (arr, value) {
            if (_.isObject(value)) {
                //FIND OBJECT TO SPLICE
                $.each(arr, function (i, item) {
                    if (_.isEqual(item, value)) {
                        arr.splice(i, 1);
                        return false;
                    }
                });
            } else {
                //FIND ELEMENT TO SPLICE
                if ($.inArray(value, arr) >= 0)
                    arr.splice($.inArray(value, arr), 1);
            }
        },

        move: function (arr, from, to) {
            //MOVE ELEMENT TO ANOTHER INDEX
            //http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
            arr.splice(to, 0, arr.splice(from, 1)[0]);
        },

        //DELETE ALL ITEMS IN AN ARRAY
        //http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
        clear: function (arr) {
            if (!this.isNullOrEmpty(arr))
                while (arr.length)
                    arr.pop();
        },

        isEmptyArray: function (arr) {
            return this.isNullOrEmpty(arr) || !arr.length;
        },

        //http://stackoverflow.com/a/11654596/235334
        updateQueryString: function (url, key, value) {
            var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)(.*)", "gi");

            if (re.test(url)) {
                if (typeof value !== 'undefined' && value !== null)
                    return url.replace(re, '$1' + key + "=" + value + '$2$3');
                else return url.replace(re, '$1$3').replace(/(&|\?)$/, '');
            }
            else {
                if (typeof value !== 'undefined' && value !== null) {
                    var separator = url.indexOf('?') !== -1 ? '&' : '?',
                        hash = url.split('#');
                    url = hash[0] + separator + key + '=' + value;
                    if (hash[1]) url += '#' + hash[1];
                    return url;
                }
                else return url;
            }
        }
    };
});
