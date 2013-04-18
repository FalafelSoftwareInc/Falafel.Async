define([
	'jquery',
	'toastr',
    	'utils/helpers',
	'blockui',
    	'bootstrap'
], function ($, toastr, Helpers) {

    return {
        initLoading: function (message, timeout) {
            //ACTIVATE LOADING PANEL
            $.blockUI({
                message: message || 'Loading...',
                timeout: timeout || 30000,
                css: {
                    backgroundColor: '#000',
                    border: 'none',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    borderRadius: '10px',
                    opacity: 0.8,
                    padding: '25px',
                    color: '#fff',
                    fontSize: '42px;',
                    fontFamily: '"Arial Black", Gadget, sans-serif',
                    fontWeight: 'bold',
                    zIndex: 99999
                }
            });
        },

        exitLoading: function () {
            //DEACTIVATE LOADING PANEL
            $.unblockUI();
        },

        success: function (message, title) {
            this.exitLoading();
            toastr.success(message, title);
        },

        info: function (message, title) {
            this.exitLoading();
            toastr.info(message, title);
        },

        warning: function (message, title, icon, timeout) {
            this.exitLoading();
            toastr.warning(message, title);
        },

        error: function (message, title) {
            this.exitLoading();
            toastr.error(message, title);
        },

        modalConfirm: function (message, fnUnblock, timeout) {
            //ADD CLOSE BUTTON IF NO TIMEOUT
            if (!timeout) {
                message += '<div class="dialog-close"><input type="button" value="Ok" /></div>';
            }

            $.blockUI({
                message: message,
                timeout: timeout,
                css: {
                    border: 'none',
                    padding: '15px',
                    backgroundColor: '#000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    opacity: .75,
                    color: '#fff',
                    'font-size': '17px',
                    'font-weight': 'bold',
                    'line-height': '24px'
                },
                onBlock: function () {
                    if (!timeout) {
                        //HANDLE CLOSE CLICK
                        $('.dialog-close input[type=button]').click(function (e) {
                            e.preventDefault();
                            $.unblockUI({
                                onUnblock: fnUnblock
                            });
                        });
                    }
                }
            });
        },

        modal: function (content, options) {
            var me = this;
            options = options || {};

            /*EXAMPLE USE:
            Alerts.modal('Welcome lorem ipsum.....abc 123', {
                title: 'This is a title test',
                fnSubmit: function (e, el, bodyEl) {
                    bodyEl.append('<br />SUBMIT FORM!!');
                }
            });
            */

            //LOAD MODAL WRAPPER DEPENDENCY
            $.get(Helpers.toScriptsUrl('views/shared/modal.html'),
                function (frag) {
                    //PLACE MODAL DOM AND GET REFERENCE
                    var el = $(document.body).append(frag).find('> .modal').last();

                    //UPDATE MODAL CONTENT
                    var bodyEl = el.find('> .modal-body');
                    bodyEl.html(content);

                    //HANDLE MODAL HEADER IF APPLICABLE
                    var headerEl = el.find('> .modal-header');
                    if (options.title) headerEl.find('> h3').html(options.title);
                    else headerEl.hide();

                    //HANDLE MODAL FOOTER IF APPLICABLE
                    var footerEl = el.find('> .modal-footer');
                    if (options.footer !== false) {
                        if (options.submit) footerEl.find('> .submit-modal').html(options.submit);
                        if (options.submitCss) footerEl.find('> .submit-modal').addClass(options.submitCss);
                        if (options.close) footerEl.find('> .close-modal').html(options.close);
                    } else {
                        footerEl.hide();
                    }

                    //SET STYLE OF MODAL IF APPLICABLE
                    var css = {};
                    if (options.width) {
                        //SET WIDTH AND MAKE CENTER
                        css.width = typeof css.width === 'number'
                            ? options.width + 'px' : options.width;

                        //TODO: FIND BETTER WAY TO CENTER MODAL
                        css['margin-left'] = function () {
                            return -($(this).width() / 2);
                        };
                    }

                    //OPEN MODAL WINDOW
                    el.on('shown', function () {
                        me.info('Clicked modal!');
                        //PROCESS SUBMIT CALLBACK FUNCTION IF APPLICABLE
                        if (options.fnSubmit)
                            //SUBSCRIBE SUBMIT CALLBACK TO SUBMIT CLICK EVENT
                            //TODO: REFACTOR USING PUB/SUB TO DECOUPLE FROM BOOTSTRAP
                            el.on('click', '.submit-modal', function (e) {
                                //PASS ORIGINAL PARAMS AND LIVE ELEMENTS TO THE END
                                options.fnSubmit(e, el, bodyEl)
                            });
                        
                        //PROCESS LOAD CALLBACK FUNCTION IF APPLICABLE
                        if (options.fnLoad) options.fnLoad(el);
                    }).on('hide', function () {
                        //PROCESS HIDE CALLBACK FUNCTION IF APPLICABLE
                        if (options.fnHide) options.fnHide(el);
                    }).on('hidden', function () {
                        //REMOVE CONTENT AND BINDINGS
                        $(this).unbind().remove();
                    }).modal('show').css(css);
                });
        },

        hideModal: function () {
            //HIDE ANY OPEN MODAL WINDOWS
            $('.modal.in', this.element).modal('hide');
        }
    };
});