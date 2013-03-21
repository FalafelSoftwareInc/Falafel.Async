var kendo = {
    ui: {},
    mobile: {ui: {}},
    dataviz: {ui: {}},
    data: {}
};


if (!kendo) {
    kendo = {};
}

kendo.Class = function() { };

kendo.Class.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoClass = function() {
    /// <summary>
    /// Returns a reference to the kendo.Class widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Class">The kendo.Class instance (if present).</returns>
};

$.fn.kendoClass = function(options) {
    /// <summary>
    /// Instantiates a kendo.Class widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.DragAxis = function() { };

kendo.DragAxis.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDragAxis = function() {
    /// <summary>
    /// Returns a reference to the kendo.DragAxis widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.DragAxis">The kendo.DragAxis instance (if present).</returns>
};

$.fn.kendoDragAxis = function(options) {
    /// <summary>
    /// Instantiates a kendo.DragAxis widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.Observable = function() { };

kendo.Observable.prototype = {




    bind: function(eventName,handler) {
        /// <summary>
        /// Attaches a handler to an event.
        /// </summary>
        /// <param name="eventName" type="String" The name of the event.</param>
        /// <param name="handler" type="Function" A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.    > Important: The context (`this`) of the `handler` function is set to the observable object itself.</param>

        },


    one: function(eventName,handler) {
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once.
        /// </summary>
        /// <param name="eventName" type="String" The name of the event.</param>
        /// <param name="handler" type="Function" A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.    > Important: The context (`this`) of the `handler` function is set to the observable object itself.</param>

        },


    trigger: function(eventName,eventData) {
        /// <summary>
        /// Executes all handlers attached to the given event.
        /// </summary>
        /// <param name="eventName" type="String" The name of the event to trigger.</param>
        /// <param name="eventData" type="Object" Optional event data which will be passed as an argument to the event handlers.</param>

        },


    unbind: function(eventName,handler) {
        /// <summary>
        /// Remove a previously attached event handler.
        /// </summary>
        /// <param name="eventName" type="String" The name of the event. If not specified all handlers of all events will be removed.</param>
        /// <param name="handler" type="Function" The handler which should no loger be executed. If not specified all handlers listening to that event will be removed.</param>

        },


    self: null

};

$.fn.getKendoObservable = function() {
    /// <summary>
    /// Returns a reference to the kendo.Observable widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.Observable">The kendo.Observable instance (if present).</returns>
};

$.fn.kendoObservable = function(options) {
    /// <summary>
    /// Instantiates a kendo.Observable widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.DataSource = function() { };

kendo.data.DataSource.prototype = {




    add: function() {
        /// <summary>
        /// Adds a new data item to the DataSource.
        /// </summary>
    /// <returns type="kendo.data.Model">The instance which has been added.</returns>

        },


    aggregate: function(val) {
        /// <summary>
        /// Get current aggregate descriptors or applies aggregates to the data.
        /// </summary>
        /// <param name="val" type="Object|Array" Aggregate(s) to be applied to the data.</param>
    /// <returns type="Array">Current aggregate descriptors</returns>

        },


    aggregates: function() {
        /// <summary>
        /// Get result of aggregates calculation
        /// </summary>
    /// <returns type="Array">Aggregates result</returns>

        },


    at: function(index) {
        /// <summary>
        /// Returns the data item at the specified index.
        /// </summary>
        /// <param name="index" type="Number" The zero-based index of the data item.</param>
    /// <returns type="kendo.data.ObservableObject | kendo.data.Model">The type depends on the schema.</returns>

        },


    cancelChanges: function() {
        /// <summary>
        /// Cancel the changes made to the DataSource after the last sync. Any changes currently existing in the model
/// 
/// will be discarded.
        /// </summary>

        },


    data: function(value) {
        /// <summary>
        /// Gets or sets the data of the `DataSource`.
        /// </summary>
        /// <param name="value" type="Array" An `Array` of items to set as the current data of the `DataSource`. If omitted the current data will be returned.</param>
    /// <returns type="ObservableArray` the items of the `DataSource"></returns>

        },


    fetch: function(callback) {
        /// <summary>
        /// Fetches data using the current filter/sort/group/paging information.
/// 
/// If data is not available and remote operations are enabled data is requested through the transport,
/// 
/// otherwise operations are executed over the available data.
        /// </summary>
        /// <param name="callback" type="Function" Optional callback which will be executed when the data is ready.</param>

        },


    filter: function(filters) {
        /// <summary>
        /// Get current filters or filter the data.
/// 
/// 
/// 
/// _Supported filter operators/aliases are_:
        /// </summary>
        /// <param name="filters" type="Object|Array" Filter(s) to be applied to the data.</param>
    /// <returns type="Array">The current filter descriptors.</returns>

        },


    get: function(id) {
        /// <summary>
        /// Retrieves a model instance by given id.
        /// </summary>
        /// <param name="id" type="Number|String" The id of the model to be retrieved. The id of the model is defined via `schema.model.id`.</param>
    /// <returns type="kendo.data.Model` the model instance. If not found `undefined">is returned.</returns>

        },


    getByUid: function(uid) {
        /// <summary>
        /// Retrieves a data item by its [uid](/api/framework/observableobject#uid) field.
        /// </summary>
        /// <param name="uid" type="String" The uid of the item to be retrieved</param>
    /// <returns type="kendo.data.ObservableObject` or `kendo.data.Model` (if `schema.model` is set). If not found `undefined">is returned.</returns>

        },


    group: function(groups) {
        /// <summary>
        /// Get current group descriptors or group the data.
        /// </summary>
        /// <param name="groups" type="Object|Array" Group(s) to be applied to the data.</param>
    /// <returns type="Array">The current group descriptors.</returns>

        },


    insert: function(index) {
        /// <summary>
        /// Inserts a new data item in the DataSource.
        /// </summary>
        /// <param name="index" type="Number" The zer-based index at which the data item will be inserted</param>
    /// <returns type="kendo.data.Model">The instance which has been inserted.</returns>

        },


    page: function(page) {
        /// <summary>
        /// Get current page index or request a page with specified index.
        /// </summary>
        /// <param name="page" type="Number" The index of the page to be retrieved</param>
    /// <returns type="Number">Current page index</returns>

        },


    pageSize: function(size) {
        /// <summary>
        /// Get current pageSize or request a page with specified number of records.
        /// </summary>
        /// <param name="size" type="Number" The of number of records to be retrieved.</param>
    /// <returns type="Number">Current page size</returns>

        },


    query: function(options) {
        /// <summary>
        /// Executes a query over the data. Available operations are paging, sorting, filtering, grouping.
/// 
/// If data is not available or remote operations are enabled, data is requested through the transport.
/// 
/// Otherwise operations are executed over the available data.
        /// </summary>
        /// <param name="options" type="Object" Contains the settings for the operations.</param>

        },


    read: function(data) {
        /// <summary>
        /// Read data into the DataSource using the `transport.read` setting.
        /// </summary>
        /// <param name="data" type="Object" Optional data to pass to the remote service configured via `transport.read`.</param>

        },


    remove: function(model) {
        /// <summary>
        /// Remove a given `kendo.data.Model` instance from the DataSource.
        /// </summary>
        /// <param name="model" type="Object" The [kendo.data.Model](/api/framework/model) instance to be removed.</param>

        },


    sort: function(sort) {
        /// <summary>
        /// Get current sort descriptors or sorts the data.
        /// </summary>
        /// <param name="sort" type="Object | Array" Sort options to be applied to the data</param>
    /// <returns type="Array">the current sort descriptors.</returns>

        },


    sync: function() {
        /// <summary>
        /// Synchronizes changes through the transport. Any pending CRUD operations will be sent to the server.
/// 
/// If the DataSource is in **batch** mode, only one call will be made for each type of operation (Create, Update, Destroy).
/// 
/// Otherwise, the DataSource will send one request per item change and change type.
        /// </summary>

        },


    total: function() {
        /// <summary>
        /// Get the total number of data items.
        /// </summary>
    /// <returns type="Number">the number of data items.</returns>

        },


    totalPages: function() {
        /// <summary>
        /// Get the number of available pages.
        /// </summary>
    /// <returns type="Number">the available pages.</returns>

        },


    view: function() {
        /// <summary>
        /// Returns a the current state of the data items - with applied paging, sorting, filtering and grouping.
/// 
/// 
/// 
/// To ensure that data is available this method should be use from within `change` event of the DataSource.
        /// </summary>
    /// <returns type="kendo.data.ObservableArary">the data items.</returns>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.DataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.DataSource">The kendo.data.DataSource instance (if present).</returns>
};

$.fn.kendoDataDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.DataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;aggregate — Array | Object (default: undefined)
    /// &#10;Sets fields on which initial aggregates should be calculated
    /// &#10;
    /// &#10;autoSync — Boolean 
    /// &#10;Enables (*true*) or disables (*false*) the automatic invocation of the sync() method for each change made.
    /// &#10;
    /// &#10;batch — Boolean 
    /// &#10;Enables (*true*) or disables (*false*) batch mode.
    /// &#10;
    /// &#10;data — Array 
    /// &#10;Specifies the local JavaScript object to use for the data source.
    /// &#10;
    /// &#10;filter — Array | Object (default: undefined)
    /// &#10;Sets the initial filter.
    /// &#10;
    /// &#10;group — Array | Object (default: undefined)
    /// &#10;Sets initial grouping
    /// &#10;
    /// &#10;page — Number (default: undefined)
    /// &#10;Sets the index of the displayed page of data.
    /// &#10;
    /// &#10;pageSize — Number (default: undefined)
    /// &#10;Sets the number of records which contains a given page of data.
    /// &#10;
    /// &#10;schema — Object 
    /// &#10;Set the object responsible for describing the raw data format.
    /// &#10;
    /// &#10;serverAggregates — Boolean (default: false)
    /// &#10;Determines if aggregates are calculated on the server or not. By default aggregates are calculated client-side.
    /// &#10;
    /// &#10;serverFiltering — Boolean (default: false)
    /// &#10;Determines if filtering of the data is handled on the server. By default filtering is performed client-side.
/// &#10;
/// &#10;
/// &#10;
/// &#10;> **Important:** When `serverFiltering` is set to `true` the developer is responsible for filtering the data.
/// &#10;
/// &#10;
/// &#10;
/// &#10;By default, a filter object is sent to the server with the query string in the following form:
/// &#10;
/// &#10;
/// &#10;
/// &#10;*   filter[logic]: and
/// &#10;
/// &#10;*   filter[filters][0][field]: orderId
/// &#10;
/// &#10;*   filter[filters][0][operator]: desc
/// &#10;
/// &#10;*   filter[filters][0][value]: 10248
/// &#10;
/// &#10;
/// &#10;
/// &#10;Possible values for **operator** include:
    /// &#10;
    /// &#10;serverGrouping — Boolean (default: false)
    /// &#10;Determines if grouping of the data is handled on the server. By default grouping is performed client-side.
/// &#10;
/// &#10;
/// &#10;
/// &#10;> **Important:** When `serverGrouping` is set to `true` the developer is responsible for grouping the data.
/// &#10;
/// &#10;
/// &#10;
/// &#10;By default, a group object is sent to the server with the query string in the following form:
/// &#10;
/// &#10;
/// &#10;
/// &#10;*   group[0][field]: orderId
/// &#10;
/// &#10;*   group[0][dir]: desc
/// &#10;
/// &#10;
/// &#10;
/// &#10;
/// &#10;
/// &#10;It is possible to modify these parameters by using the `parameterMap` function found on the [transport](#transport-object).
    /// &#10;
    /// &#10;serverPaging — Boolean (default: false)
    /// &#10;Determines if paging of the data is on the server. By default paging is performed client-side. If `serverPaging` is enabled the
/// &#10;
/// &#10;total number of data items should also be returned in the response. Use the `schema.total` setting to customize that.
/// &#10;
/// &#10;
/// &#10;
/// &#10;> **Important:** When `serverPaging` is set to `true` the developer is responsible for paging the data.
/// &#10;
/// &#10;
/// &#10;
/// &#10;The following options are sent to the server as part of the query string by default:
    /// &#10;
    /// &#10;serverSorting — Boolean (default: false)
    /// &#10;Determines if sorting of the data should is handled on the server. By default sorting is performed client-side.
/// &#10;
/// &#10;
/// &#10;
/// &#10;> **Important:** When `serverSorting` is set to `true` the developer is responsible for sorting the data.
/// &#10;
/// &#10;
/// &#10;
/// &#10;By default, a sort object is sent to the server with the query string in the following form:
/// &#10;
/// &#10;
/// &#10;
/// &#10;*   sort[0][field]: orderId
/// &#10;
/// &#10;*   sort[0][dir]: asc
/// &#10;
/// &#10;
/// &#10;
/// &#10;It is possible to modify these parameters by using the `parameterMap` function found on the [transport](#transport-object).
    /// &#10;
    /// &#10;sort — Array | Object (default: undefined)
    /// &#10;Sets initial sort order
    /// &#10;
    /// &#10;transport — Object 
    /// &#10;Specifies the settings for loading and saving data. This can be a remote or local/in-memory data.
    /// &#10;
    /// &#10;type — String 
    /// &#10;Loads transport with preconfigured settings. Currently supports only "odata" (Requires kendo.data.odata.js to be included).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.HierarchicalDataSource = function() { };

kendo.data.HierarchicalDataSource.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataHierarchicalDataSource = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.HierarchicalDataSource widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.HierarchicalDataSource">The kendo.data.HierarchicalDataSource instance (if present).</returns>
};

$.fn.kendoDataHierarchicalDataSource = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.HierarchicalDataSource widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.Model = function() { };

kendo.data.Model.prototype = {




    bind: function() {
        /// <summary>
        /// Attaches a handler to an event. More info can be found in the [bind](/api/framework/observable#bind) section of the
        /// </summary>

        },


    Model: function(options) {
        /// <summary>
        /// Defines a new `Model` type using the provided options.
        /// </summary>
        /// <param name="options" type="Object" Describes the configuration options of the new model type.</param>

        },


    editable: function(field) {
        /// <summary>
        /// Determines if the specified field is editable or not.
        /// </summary>
        /// <param name="field" type="String" The field to check.</param>

        },


    get: function() {
        /// <summary>
        /// Gets the value of the specified field. Inherited from `ObservableObject`. More info can be found in the [get](/api/framework/observableobject#get) section of the
/// 
/// ObservableObject API reference.
        /// </summary>

        },


    isNew: function() {
        /// <summary>
        /// Checks if the `Model` is new or not. The `id` field is used to determine if a model instance is new or existing one.
/// 
/// If the value of the field specified is equal to the default value (specifed through the `fields` configuration) the model is considered as new.
        /// </summary>

        },


    set: function() {
        /// <summary>
        /// Sets the value of the specified field. Inherited from `ObservableObject`. More info can be found in the [set](/api/framework/observableobject#set) section of the
/// 
/// ObservableObject API reference.
        /// </summary>

        },


    toJSON: function() {
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the `Model`. Inherited from `ObservableObject`. More info can be found in the [toJSON](/api/framework/observableobject#tojson) section of the
/// 
/// ObservableObject API reference.
        /// </summary>

        },


    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataModel = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.Model widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.Model">The kendo.data.Model instance (if present).</returns>
};

$.fn.kendoDataModel = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.Model widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.Node = function() { };

kendo.data.Node.prototype = {




    append: function(model) {
        /// <summary>
        /// Appends a new item to the children datasource, and initializes the datasource, if necessary.
        /// </summary>
        /// <param name="model" type="Object" The data for the new item</param>

        },


    level: function() {
        /// <summary>
        /// Gets the current nesting level of the Node within the HierarchicalDataSource.
/// 
/// 
/// 
///     var dataSource = new HierarchicalDataSource({
/// 
///         data: [
/// 
///             { id: 1, text: "Root", items: [
/// 
///                 { id: 2, text: "Child" }
/// 
///             ] }
/// 
///         ]
/// 
///     });
/// 
/// 
/// 
///     dataSource.read();
/// 
/// 
/// 
///     var root = dataSource.get(1);
/// 
///     equals(root.level(), 0);
/// 
/// 
/// 
///     root.load(); // Load child nodes
/// 
/// 
/// 
///     var child = dataSource.get(2);
/// 
///     equals(child.level(), 1);
        /// </summary>

        },


    load: function() {
        /// <summary>
        /// Loads the child nodes in the child datasource, supplying the `id` of the Node to the request.
        /// </summary>

        },


    loaded: function() {
        /// <summary>
        /// Gets or sets the loaded flag of the Node. Setting the loaded flag to `false` allows reloading of child items.
        /// </summary>

        },


    parentNode: function() {
        /// <summary>
        /// Gets the parent node of the Node, if any.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataNode = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.Node widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.Node">The kendo.data.Node instance (if present).</returns>
};

$.fn.kendoDataNode = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.Node widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.ObservableArray = function() { };

kendo.data.ObservableArray.prototype = {




    bind: function(eventName,handler) {
        /// <summary>
        /// Attaches an event handler for the specified event.
        /// </summary>
        /// <param name="eventName" type="String" The name of the event.</param>
        /// <param name="handler" type="Function" The function which will be invoked when the event is raised.</param>

        },


    join: function(separator) {
        /// <summary>
        /// Joins all items of an `ObservableArray` into a string. Equivalent of
/// 
/// [Array.prototype.join](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/join).
        /// </summary>
        /// <param name="separator" type="String" Specifies the string to separate each item of the array. If omitted the array items are  separated with a comma (`,`)</param>

        },


    parent: function() {
        /// <summary>
        /// Returns the parent `ObservableObject`. If the current `ObservableArray` is not nested
/// 
/// returns `undefined`.
        /// </summary>

        },


    pop: function() {
        /// <summary>
        /// Removes the last item from an array and returns that item. Equivalent of
/// 
/// [Array.prototype.pop](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/pop).
        /// </summary>

        },


    push: function() {
        /// <summary>
        /// Appends the given items to the array and returns the new length of the array. Equivalent of
/// 
/// [Array.prototype.push](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push).
/// 
/// The new items are wrapped as `ObservableObject` if they are complex objects.
        /// </summary>

        },


    slice: function(begin,end) {
        /// <summary>
        /// Returns a one-level deep copy of a portion of an array. Equivalent of
/// 
/// [Array.prototype.slice](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice).
/// 
/// The result of the `slice` method is **not** an instance of `ObvservableArray`. It is a regular JavaScript Array object.
/// 
/// > **Important:** The `slice` method does not modify the original `ObservableArray`.
        /// </summary>
        /// <param name="begin" type="Number" Zero-based index at which to begin extraction.</param>
        /// <param name="end" type="Number" Zero-based index at which to end extraction. If `end` is omitted, `slice` extracts to the  end of the sequence.</param>

        },


    splice: function(index,howMany) {
        /// <summary>
        /// Changes an `ObservableArray`, by adding new items while removing old items. Equivalent of
/// 
/// [Array.prototype.splice](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice)
        /// </summary>
        /// <param name="index" type="Number" Index at which to start changing the array. If negative, will begin that many elements from the end.</param>
        /// <param name="howMany" type="Number" An integer indicating the number of items to remove. If howMany is 0, no items are removed. In this case, you should specify at least one new item.</param>
    /// <returns type="An `Array` containing the removed items. The result of the `splice` method is **not** an instance of `ObvservableArray">.</returns>

        },


    shift: function() {
        /// <summary>
        /// Removes the first item from an `ObvservableArray` and returns that item. Equivalent of
/// 
/// [Array.prototype.shift](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/shift).
        /// </summary>

        },


    toJSON: function() {
        /// <summary>
        /// Returns a JavaScript Array which represents the contents of the `ObservableArray`.
        /// </summary>

        },


    unshift: function() {
        /// <summary>
        /// Adds one or more items to the beginning of an `ObservableArray` and returns the new length.
/// 
/// Equivalent of [Array.prototype.unshift](http://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift).
        /// </summary>

        },


    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataObservableArray = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.ObservableArray widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.ObservableArray">The kendo.data.ObservableArray instance (if present).</returns>
};

$.fn.kendoDataObservableArray = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.ObservableArray widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.data.ObservableObject = function() { };

kendo.data.ObservableObject.prototype = {




    bind: function() {
        /// <summary>
        /// Attaches a handler to an event. More info can be found in the [bind](/api/framework/observable#bind) section of the
/// 
/// kendo.Observable API reference.
        /// </summary>

        },


    get: function(name) {
        /// <summary>
        /// Gets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" The name of the field whose value is going to be returned.</param>
    /// <returns type="Object">The value of the specified field.</returns>

        },


    parent: function() {
        /// <summary>
        /// Returns the parent `ObservableObject`. If the current `ObservableObject` is not
/// 
/// nested returns `undefined`;
        /// </summary>

        },


    set: function(name,value) {
        /// <summary>
        /// Sets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" The name of the field whose value is going to be returned.</param>
        /// <param name="value" type="Number|String|Date|Object" The new value of the field.</param>

        },


    toJSON: function() {
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the `ObservableObject`.
        /// </summary>
    /// <returns type="An `Object` which contains only the fields of the `ObservableObject">.</returns>

        },


    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDataObservableObject = function() {
    /// <summary>
    /// Returns a reference to the kendo.data.ObservableObject widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.data.ObservableObject">The kendo.data.ObservableObject instance (if present).</returns>
};

$.fn.kendoDataObservableObject = function(options) {
    /// <summary>
    /// Instantiates a kendo.data.ObservableObject widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.Application = function() { };

kendo.mobile.Application.prototype = {




    hideLoading: function() {
        /// <summary>
        /// Hide the loading animation.
        /// </summary>

        },


    navigate: function(url,transition) {
        /// <summary>
        /// Navigate to local or to remote view.
        /// </summary>
        /// <param name="url" type="String" The id or url of the view.</param>
        /// <param name="transition" type="String" The transition to apply when navigating. See [View Transitions section](/getting-started/mobile/application#view-transitions) for more information.</param>

        },


    scroller: function() {
        /// <summary>
        /// Get a reference to the current view's scroller widget instance.
        /// </summary>
    /// <returns type="Scroller">the scroller widget instance.</returns>

        },


    showLoading: function() {
        /// <summary>
        /// Show the loading animation.
        /// </summary>

        },


    view: function() {
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
    /// <returns type="View">the view instance.</returns>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileApplication = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.Application widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.Application">The kendo.mobile.Application instance (if present).</returns>
};

$.fn.kendoMobileApplication = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.Application widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;hideAddressBar — Boolean (default: true)
    /// &#10;Whether to hide the browser address bar.
    /// &#10;
    /// &#10;updateDocumentTitle — Boolean (default: true)
    /// &#10;Whether to update the document title.
    /// &#10;
    /// &#10;initial — String 
    /// &#10;The id of the initial mobilie View to display.
    /// &#10;
    /// &#10;layout — String 
    /// &#10;The id of the default Application Layout.
    /// &#10;
    /// &#10;loading — String (default: &lt;h1&gt;Loading...&lt;/h1&gt;)
    /// &#10;The text displayed in the loading popup. Setting this value to false will disable the loading popup.
    /// &#10;
    /// &#10;platform — String 
    /// &#10;Which platform look to force on the application. Can be one of "ios", "android", "blackberry".
    /// &#10;
    /// &#10;transition — String 
    /// &#10;The default View transition.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ActionSheet = function() { };

kendo.mobile.ui.ActionSheet.prototype = {




    close: function() {
        /// <summary>
        /// Close the ActionSheet.
        /// </summary>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **ActionSheet** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the ActionSheet element from DOM.
        /// </summary>

        },


    open: function(target,context) {
        /// <summary>
        /// Open the ActionSheet.
        /// </summary>
        /// <param name="target" type="jQuery" (optional) The target element of the ActionSheet, available in the callback methods.    **Notice** The target element is **mandatory** on tablets, as the ActionSheet widget positions itself relative to opening element when a tablet is detected.</param>
        /// <param name="context" type="Object" (optional) The context of the ActionSheet, available in the callback methods.</param>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileActionSheet = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ActionSheet widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ActionSheet">The kendo.mobile.ui.ActionSheet instance (if present).</returns>
};

$.fn.kendoMobileActionSheet = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ActionSheet widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;cancel — String (default: Cancel)
    /// &#10;The text of the cancel button.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The popup configuration options (tablet only).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.BackButton = function() { };

kendo.mobile.ui.BackButton.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **BackButton** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the BackButton element from DOM.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileBackButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.BackButton widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.BackButton">The kendo.mobile.ui.BackButton instance (if present).</returns>
};

$.fn.kendoMobileBackButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.BackButton widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Button = function() { };

kendo.mobile.ui.Button.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **Button** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the Button element from DOM.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Button widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Button">The kendo.mobile.ui.Button instance (if present).</returns>
};

$.fn.kendoMobileButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Button widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;icon — String 
    /// &#10;The icon of the button. It can be either one of the built-in icons, or a custom one.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ButtonGroup = function() { };

kendo.mobile.ui.ButtonGroup.prototype = {




    current: function() {
        /// <summary>
        /// Get the currently selected Button.
        /// </summary>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **ButtonGroup** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the ButtonGroup element from DOM.
        /// </summary>
    /// <returns type="jQuery">the currently selected Button.</returns>

        },


    select: function(li) {
        /// <summary>
        /// Select a Button.
        /// </summary>
        /// <param name="li" type="jQuery | Number" LI element or index of the Button.</param>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileButtonGroup = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ButtonGroup widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ButtonGroup">The kendo.mobile.ui.ButtonGroup instance (if present).</returns>
};

$.fn.kendoMobileButtonGroup = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ButtonGroup widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;index — Number 
    /// &#10;Defines the initially selected Button.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.DetailButton = function() { };

kendo.mobile.ui.DetailButton.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **DetailButton** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the DetailButton element from DOM.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileDetailButton = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.DetailButton widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.DetailButton">The kendo.mobile.ui.DetailButton instance (if present).</returns>
};

$.fn.kendoMobileDetailButton = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.DetailButton widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Layout = function() { };

kendo.mobile.ui.Layout.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileLayout = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Layout widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Layout">The kendo.mobile.ui.Layout instance (if present).</returns>
};

$.fn.kendoMobileLayout = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Layout widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;id — String (default: null)
    /// &#10;The id of the layout. Required.
    /// &#10;
    /// &#10;platform — String 
    /// &#10;The specific platform this layout targets. By default, layouts are displayed
/// &#10;
/// &#10;on all platforms.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ListView = function() { };

kendo.mobile.ui.ListView.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **ListView** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the ListView element from DOM.
        /// </summary>

        },


    items: function() {
        /// <summary>
        /// Get the listview DOM element items
        /// </summary>
    /// <returns type="jQuery">The listview DOM element items</returns>

        },


    refresh: function(e) {
        /// <summary>
        /// repaints the listview (works only in databound mode).
        /// </summary>
        /// <param name="e" type="" </param>

        },


    stopEndlessScrolling: function() {
        /// <summary>
        /// Stops the 'endless scroll' of the ListView.
        /// </summary>

        },


    stopLoadMore: function() {
        /// <summary>
        /// Stops the 'load more' functionality of the ListView.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileListView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ListView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ListView">The kendo.mobile.ui.ListView instance (if present).</returns>
};

$.fn.kendoMobileListView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ListView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;appendOnRefresh — Boolean (default: false)
    /// &#10;Used in combination with pullToRefresh. If set to true, newly loaded data will be appended on top when refershing.
    /// &#10;
    /// &#10;autoBind — Boolean (default: true)
    /// &#10;Indicates whether the listview will call read on the DataSource initially.
    /// &#10;
    /// &#10;dataSource — kendo.data.DataSource | Object 
    /// &#10;Instance of DataSource or the data that the mobile ListView will be bound to.
    /// &#10;
    /// &#10;endlessScroll — Boolean (default: false)
    /// &#10;If set to true, the listview gets the next page of data when the user scrolls near the bottom of the view.
    /// &#10;
    /// &#10;fixedHeaders — Boolean (default: false)
    /// &#10;If set to true, the group headers will persist their position when the user scrolls through the listview. Applicable only when the type is set to group, or when binding to grouped datasource.
    /// &#10;
    /// &#10;headerTemplate — String (default: #:value#)
    /// &#10;The header item template (applicable when the type is set to group).
    /// &#10;
    /// &#10;loadMore — Boolean (default: false)
    /// &#10;If set to true, a button is rendered at the bottom of the listview, which fetch the next page of data when tapped.
    /// &#10;
    /// &#10;loadMoreText — String (default: "Press to load more")
    /// &#10;The text of the rendered load-more button (applies only if loadMore is set to true).
    /// &#10;
    /// &#10;pullTemplate — String (default: "Pull to refresh")
    /// &#10;The message template displayed when the user pulls the listView. Applicable only when pullToRefresh is set to true.
    /// &#10;
    /// &#10;pullToRefresh — Boolean (default: false)
    /// &#10;If set to true, the listview will reload its data when the user pulls the view over the top limit.
    /// &#10;
    /// &#10;refreshTemplate — String (default: "Refreshing")
    /// &#10;The message template displayed during the refresh. Applicable only when pullToRefresh is set to true.
    /// &#10;
    /// &#10;releaseTemplate — String (default: "Release to refresh")
    /// &#10;The message template indicating that pullToRefresh will occur. Applicable only when pullToRefresh is set to true.
    /// &#10;
    /// &#10;scrollTreshold — String (default: 30)
    /// &#10;The distance to the bottom in pixels, after which the listview will start fetching the next page. Applicable only when endlessScroll is set to true.
    /// &#10;
    /// &#10;style — String 
    /// &#10;The style of the control. Can be either empty string(""), or inset.
    /// &#10;
    /// &#10;template — String (default: #:data#)
    /// &#10;The item template.
    /// &#10;
    /// &#10;type — String 
    /// &#10;The type of the control. Can be either `flat` (default) or group. Determined automatically in databound mode.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Loader = function() { };

kendo.mobile.ui.Loader.prototype = {




    hide: function() {
        /// <summary>
        /// Hide the loading animation.
        /// </summary>

        },


    show: function() {
        /// <summary>
        /// Show the loading animation.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileLoader = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Loader widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Loader">The kendo.mobile.ui.Loader instance (if present).</returns>
};

$.fn.kendoMobileLoader = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Loader widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ModalView = function() { };

kendo.mobile.ui.ModalView.prototype = {




    close: function() {
        /// <summary>
        /// Close the ModalView
        /// </summary>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **ModalView** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the ModalView element from DOM.
        /// </summary>

        },


    open: function(target) {
        /// <summary>
        /// Open the ModalView
        /// </summary>
        /// <param name="target" type="jQuery" (optional) The target of the ModalView</param>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileModalView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ModalView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ModalView">The kendo.mobile.ui.ModalView instance (if present).</returns>
};

$.fn.kendoMobileModalView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ModalView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;height — Number 
    /// &#10;The height of the ModalView container in pixels. If not set, the element style is used.
    /// &#10;
    /// &#10;modal — Boolean (default: true)
    /// &#10;When set to false, the ModalView will close when the user taps outside of its element.
    /// &#10;
    /// &#10;width — Number 
    /// &#10;The width of the ModalView container in pixels. If not set, the element style is used.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.NavBar = function() { };

kendo.mobile.ui.NavBar.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **NavBar** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the NavBar element from DOM.
        /// </summary>

        },


    title: function(value) {
        /// <summary>
        /// Update the title element text. The title element is specified by setting the `role` data attribute to `view-title`.
        /// </summary>
        /// <param name="value" type="String" The text of title</param>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileNavBar = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.NavBar widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.NavBar">The kendo.mobile.ui.NavBar instance (if present).</returns>
};

$.fn.kendoMobileNavBar = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.NavBar widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Pane = function() { };

kendo.mobile.ui.Pane.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **Pane** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the Pane element from DOM.
        /// </summary>

        },


    hideLoading: function() {
        /// <summary>
        /// Hide the loading animation.
        /// </summary>

        },


    navigate: function(url,transition) {
        /// <summary>
        /// Navigate the local or remote view.
        /// </summary>
        /// <param name="url" type="String" The id or url of the view.</param>
        /// <param name="transition" type="String" The transition to apply when navigating. See View Transitions section for more  information.</param>

        },


    showLoading: function() {
        /// <summary>
        /// Show the loading animation.
        /// </summary>

        },


    view: function() {
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
    /// <returns type="View">the view instance.</returns>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobilePane = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Pane widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Pane">The kendo.mobile.ui.Pane instance (if present).</returns>
};

$.fn.kendoMobilePane = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Pane widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;initial — String 
    /// &#10;The id of the initial mobilie View to display.
    /// &#10;
    /// &#10;layout — String 
    /// &#10;The id of the default Pane Layout.
    /// &#10;
    /// &#10;loading — String (default: Loading...)
    /// &#10;The text displayed in the loading popup. Setting this value to false will disable the loading popup.
    /// &#10;
    /// &#10;transition — String 
    /// &#10;The default View transition.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.PopOver = function() { };

kendo.mobile.ui.PopOver.prototype = {




    close: function() {
        /// <summary>
        /// Close the popover.
        /// </summary>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **PopOver** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the PopOver element from DOM.
        /// </summary>

        },


    open: function(target) {
        /// <summary>
        /// Open the PopOver.
        /// </summary>
        /// <param name="target" type="jQuery" The target of the Popover, to which the visual arrow will point to. This parameter is required for a tablet OS.</param>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobilePopOver = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.PopOver widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.PopOver">The kendo.mobile.ui.PopOver instance (if present).</returns>
};

$.fn.kendoMobilePopOver = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.PopOver widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;pane — Object 
    /// &#10;The pane configuration options.
    /// &#10;
    /// &#10;popup — Object 
    /// &#10;The popup configuration options.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.ScrollView = function() { };

kendo.mobile.ui.ScrollView.prototype = {




    content: function(content) {
        /// <summary>
        /// Update the scrollview HTML content
        /// </summary>
        /// <param name="content" type="String | jQuery" the new scrollView content.</param>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **ScrollView** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the ScrollView element from DOM.
        /// </summary>

        },


    refresh: function() {
        /// <summary>
        /// Redraw the mobile ScrollView pager. Called automatically on device orientation change event.
        /// </summary>

        },


    scrollTo: function(page) {
        /// <summary>
        /// Scroll to the given page. Pages are zero-based indexed.
        /// </summary>
        /// <param name="page" type="Number" The page to scroll to.</param>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileScrollView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.ScrollView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.ScrollView">The kendo.mobile.ui.ScrollView instance (if present).</returns>
};

$.fn.kendoMobileScrollView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.ScrollView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;bounceVelocityThreshold — Number (default: 1.6)
    /// &#10;The velocity threshold after which a swipe will result in a bounce effect.
    /// &#10;
    /// &#10;duration — Number (default: 300)
    /// &#10;The milliseconds that take the ScrollView to snap to the current page after released.
    /// &#10;
    /// &#10;page — Number (default: 0)
    /// &#10;The initial page to display.
    /// &#10;
    /// &#10;velocityThreshold — Number (default: 0.8)
    /// &#10;The velocity threshold after which a swipe will navigate to the next page (as opposed to snapping back to the current page).
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Scroller = function() { };

kendo.mobile.ui.Scroller.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **Scroller** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the Scroller element from DOM.
        /// </summary>

        },


    pullHandled: function() {
        /// <summary>
        /// Indicate that the pull event is handled (i.e. data from the server has been retrieved).
        /// </summary>

        },


    reset: function() {
        /// <summary>
        /// Scrolls the container to the top.
        /// </summary>

        },


    scrollHeight: function() {
        /// <summary>
        /// Returns the height in pixels of the scroller content.
        /// </summary>

        },


    scrollTo: function(x,y) {
        /// <summary>
        /// Scrolls the container to the specified location
        /// </summary>
        /// <param name="x" type="Number" The horizontal offset in pixels to scroll to.</param>
        /// <param name="y" type="Number" The vertical offset in pixels to scroll to.</param>

        },


    scrollWidth: function() {
        /// <summary>
        /// Returns the width in pixels of the scroller content.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileScroller = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Scroller widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Scroller">The kendo.mobile.ui.Scroller instance (if present).</returns>
};

$.fn.kendoMobileScroller = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Scroller widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;zoom — Boolean (default: false)
    /// &#10;If set to true, the user can zoom in/out the contents of the widget using the pinch/zoom gesture.
    /// &#10;
    /// &#10;elastic — Boolean (default: true)
    /// &#10;Weather or not to allow out of bounds dragging and easing.
    /// &#10;
    /// &#10;pullOffset — Number (default: 140)
    /// &#10;The threshold below which a releasing the scroller will trigger the pull event.
/// &#10;
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;pullTemplate — String (default: Pull to refresh)
    /// &#10;The message template displayed when the user pulls the scroller.
/// &#10;
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;pullToRefresh — Boolean (default: false)
    /// &#10;If set to true, the scroller will display a hint when the user pulls the container beyond its top limit.
/// &#10;
/// &#10;If a pull beyond the specified pullOffset occurs, a pull event will be triggered.
    /// &#10;
    /// &#10;refreshTemplate — String (default: Refreshing)
    /// &#10;The message template displayed during the refresh.
/// &#10;
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// &#10;releaseTemplate — String (default: Release to refresh)
    /// &#10;The message template displayed when the user pulls the scroller below the
/// &#10;
/// &#10;pullOffset, indicating that pullToRefresh will occur.
/// &#10;
/// &#10;Has effect only when the pullToRefresh option is set to true.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.SplitView = function() { };

kendo.mobile.ui.SplitView.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **SplitView** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the SplitView element from DOM.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileSplitView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.SplitView widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.SplitView">The kendo.mobile.ui.SplitView instance (if present).</returns>
};

$.fn.kendoMobileSplitView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.SplitView widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;style — String (default: horizontal)
    /// &#10;Defines the SplitView style - horizontal or vertical.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Switch = function() { };

kendo.mobile.ui.Switch.prototype = {




    check: function(check) {
        /// <summary>
        /// Get/Set the checked state of the widget.
        /// </summary>
        /// <param name="check" type="Boolean" Whether to turn the widget on or off.</param>
    /// <returns type="Boolean">The checked state of the widget.</returns>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **Switch** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the Switch element from DOM.
        /// </summary>

        },


    toggle: function() {
        /// <summary>
        /// Toggle the checked state of the widget.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileSwitch = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Switch widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Switch">The kendo.mobile.ui.Switch instance (if present).</returns>
};

$.fn.kendoMobileSwitch = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Switch widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;checked — Boolean (default: false)
    /// &#10;The checked state of the widget.
    /// &#10;
    /// &#10;offLabel — String (default: OFF)
    /// &#10;The OFF label.
    /// &#10;
    /// &#10;onLabel — String (default: ON)
    /// &#10;The ON label.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.TabStrip = function() { };

kendo.mobile.ui.TabStrip.prototype = {




    currentItem: function() {
        /// <summary>
        /// Get the currently selected tab DOM element.
        /// </summary>
    /// <returns type="jQuery">the currently selected tab DOM element.</returns>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the **TabStrip** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the TabStrip element from DOM.
        /// </summary>

        },


    switchTo: function(url) {
        /// <summary>
        /// Set the mobile TabStrip active tab to the tab with the specified url. This method doesn't change the current View. To change the View, use Application's [navigate](/api/mobile/application#navigate) method instead.
        /// </summary>
        /// <param name="url" type="String" The url of the tab.</param>

        },


    clear: function() {
        /// <summary>
        /// Clear the currently selected tab.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileTabStrip = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.TabStrip widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.TabStrip">The kendo.mobile.ui.TabStrip instance (if present).</returns>
};

$.fn.kendoMobileTabStrip = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.TabStrip widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;selectedIndex — Number (default: 0)
    /// &#10;The index of the initially selected tab.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.View = function() { };

kendo.mobile.ui.View.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **View** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the View element from DOM.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileView = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.View widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.View">The kendo.mobile.ui.View instance (if present).</returns>
};

$.fn.kendoMobileView = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.View widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;model — String | ObservableObject (default: null)
    /// &#10;The MVVM model to bind to. If a string is passed, The view
/// &#10;
/// &#10;will try to resolve a reference to the view model variable in the global scope.
    /// &#10;
    /// &#10;zoom — Boolean (default: false)
    /// &#10;If set to true, the user can zoom in/out the contents of the view using the pinch/zoom gesture.
    /// &#10;
    /// &#10;stretch — Boolean (default: false)
    /// &#10;If set to true, the view will stretch its child contents to occupy the entire view, while disabling kinetic scrolling.
/// &#10;
/// &#10;Useful if the view contains an image or a map.
    /// &#10;
    /// &#10;title — String 
    /// &#10;The text to display in the navbar title (if present) and the browser title.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.mobile.ui.Widget = function() { };

kendo.mobile.ui.Widget.prototype = {




    view: function() {
        /// <summary>
        /// Returns the [kendo.mobile.ui.View](/api/mobile/view) which contains the widget.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoMobileWidget = function() {
    /// <summary>
    /// Returns a reference to the kendo.mobile.ui.Widget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.mobile.ui.Widget">The kendo.mobile.ui.Widget instance (if present).</returns>
};

$.fn.kendoMobileWidget = function(options) {
    /// <summary>
    /// Instantiates a kendo.mobile.ui.Widget widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Draggable = function() { };

kendo.ui.Draggable.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDraggable = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Draggable widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Draggable">The kendo.ui.Draggable instance (if present).</returns>
};

$.fn.kendoDraggable = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Draggable widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;axis — String (default: null)
    /// &#10;Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".
    /// &#10;
    /// &#10;container — jQuery 
    /// &#10;If set, the hint movement is constrained to the container boundaries.
    /// &#10;
    /// &#10;cursorOffset — Object (default: null)
    /// &#10;If set, specifies the offset of the hint relative to the mouse cursor/finger.
/// &#10;
/// &#10;By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: `top` and `left`.
    /// &#10;
    /// &#10;distance — Number (default: 5)
    /// &#10;The required distance that the mouse should travel in order to initiate a drag.
    /// &#10;
    /// &#10;filter — Selector 
    /// &#10;Selects child elements that are draggable if a widget is attached to a container.
    /// &#10;
    /// &#10;group — String (default: "default")
    /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
    /// &#10;
    /// &#10;hint — Function | jQuery 
    /// &#10;Provides a way for customization of the drag indicator. If a function is supplied, it receives one argument - the draggable element's jQuery object.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DropTarget = function() { };

kendo.ui.DropTarget.prototype = {




    destroyGroup: function() {
        /// <summary>
        /// Destroys all DropTarget instances from the group with the given name.
/// 
/// 
/// 
///     kendo.ui.DropTarget.destroyGroup("foo");
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDropTarget = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DropTarget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DropTarget">The kendo.ui.DropTarget instance (if present).</returns>
};

$.fn.kendoDropTarget = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DropTarget widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;group — String (default: "default")
    /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.DropTargetArea = function() { };

kendo.ui.DropTargetArea.prototype = {



    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoDropTargetArea = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.DropTargetArea widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.DropTargetArea">The kendo.ui.DropTargetArea instance (if present).</returns>
};

$.fn.kendoDropTargetArea = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.DropTargetArea widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;group — String (default: "default")
    /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
    /// &#10;
    /// &#10;filter — String (default: "*")
    /// &#10;Selector to filter the drop targets in the area. Every matched element acts as a drop target and fires events on the DropTargetArea.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Touch = function() { };

kendo.ui.Touch.prototype = {




    destroy: function() {
        /// <summary>
        /// Prepares the **Touch** for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
/// 
/// 
/// 
/// > **Important:** This method does not remove the Touch element from DOM.
        /// </summary>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoTouch = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Touch widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Touch">The kendo.ui.Touch instance (if present).</returns>
};

$.fn.kendoTouch = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Touch widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;surface — jQuery 
    /// &#10;If specified, the user drags will be tracked within the surface boundaries.
/// &#10;
/// &#10;This option is useful if the widget is instantiated on small DOM elements like buttons, or thin list items.
    /// &#10;
    /// &#10;global — Boolean 
    /// &#10;If set to `true`, the document element will be used a s surface for the user drags.
    /// &#10;
    /// &#10;multiTouch — Boolean 
    /// &#10;If set to true, the widget will capture and trigger the `gesturestart`, `gesturechange`, and `gestureend` events when the user touches the element with two fingers.
    /// &#10;
    /// &#10;enableSwipe — Boolean 
    /// &#10;If set to true, the Touch widget will recognize horizontal swipes and trigger the `swipe` event.
/// &#10;
/// &#10;
/// &#10;
/// &#10;**Notice**: if the `enableSwipe` option is set to true, the `dragstart`, `drag` and `dragend` events will not be triggered.
    /// &#10;
    /// &#10;minXDelta — Number 
    /// &#10;The minimum horizontal distance in pixels the user should swipe before the `swipe` event is triggered.
    /// &#10;
    /// &#10;maxYDelta — Number 
    /// &#10;The maximum vertical deviation in pixels of the swipe event. Swipes with higher deviation are discarded.
    /// &#10;
    /// &#10;maxDuration — Number 
    /// &#10;The maximum amount of time in milliseconds the swipe event can last. Slower swipes are discarded.
    /// &#10;
    /// &#10;minHold — Number 
    /// &#10;The timeout in milliseconds before the `hold` event is fired.
/// &#10;
/// &#10;
/// &#10;
/// &#10;**Notice**: the hold event will be triggered after the time passes, not after the user lifts his/hers finger.
    /// &#10;
    /// &#10;doubleTapTimeout — Number 
    /// &#10;The maximum period (in milliseconds) between two consecutive taps which will trigger the doubletap event.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Validator = function() { };

kendo.ui.Validator.prototype = {




    errors: function() {
        /// <summary>
        /// Get the error messages if any.
        /// </summary>
    /// <returns type="Array">Messages for the failed validation rules.</returns>

        },


    validate: function() {
        /// <summary>
        /// Validates the input element(s) against the declared validation rules.
        /// </summary>
    /// <returns type="Boolean` `true">if all validation rules passed successfully.</returns>

        },


    validateInput: function(input) {
        /// <summary>
        /// Validates the input element against the declared validation rules.
        /// </summary>
        /// <param name="input" type="Element" domElement="true"Input element to be validated.</param>
    /// <returns type="Boolean` `true">if all validation rules passed successfully.</returns>

        },

    bind: function(event, callback) {
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
    },

    unbind: function(event, callback) {
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
    }

};

$.fn.getKendoValidator = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Validator widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Validator">The kendo.ui.Validator instance (if present).</returns>
};

$.fn.kendoValidator = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Validator widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// &#10;messages — Object 
    /// &#10;Set of messages (either strings or functions) which will be shown when given validation rule fails.
/// &#10;
/// &#10;By setting already existing key the appropriate built-in message will be overridden.
    /// &#10;
    /// &#10;rules — Object 
    /// &#10;Set of custom validation rules. Those rules will extend the [built-in ones](/getting-started/framework/validator/overview#default-validation-rules).
    /// &#10;
    /// &#10;validateOnBlur — Boolean 
    /// &#10;Determines if validation will be triggered when element loses focus. Default value is true.
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};


kendo.ui.Widget = function() { };

kendo.ui.Widget.prototype = {




    bind: function() {
        /// <summary>
        /// Attaches a handler to an event. More info can be found in the [bind](/api/framework/observable#bind) section of the
/// 
/// kendo.Observable API reference.
        /// </summary>

        },


    destroy: function() {
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes `jQuery.data` attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>

        },


    one: function() {
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once. More info can be found in the [one](/api/framework/observable#one) section of the
/// 
/// kendo.Observable API reference.
        /// </summary>

        },


    trigger: function() {
        /// <summary>
        /// Executes all handlers attached to the given event. More info can be found in the [trigger](/api/framework/observable#trigger) section of the
/// 
/// kendo.Observable API reference.
        /// </summary>

        },


    unbind: function() {
        /// <summary>
        /// Remove a previously attached event handler. More info can be found in the [unbind](/api/framework/observable#unbind) section of the
/// 
/// kendo.Observable API reference.
        /// </summary>

        },


    self: null

};

$.fn.getKendoWidget = function() {
    /// <summary>
    /// Returns a reference to the kendo.ui.Widget widget, instantiated on the selector.
    /// </summary>
    /// <returns type="kendo.ui.Widget">The kendo.ui.Widget instance (if present).</returns>
};

$.fn.kendoWidget = function(options) {
    /// <summary>
    /// Instantiates a kendo.ui.Widget widget based the DOM elements that match the selector.

    /// &#10;Accepts an object with the following configuration options:
    /// &#10;
    /// </summary>
    /// <param name="options" type="Object">
    /// The widget configuration options
    /// </param>
};

