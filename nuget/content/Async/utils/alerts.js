define([
	'jquery',
	'toastr',
	'blockui'
], function ($, toastr) {

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
        }
    };
});