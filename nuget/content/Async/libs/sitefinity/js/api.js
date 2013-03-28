/**
 * This is an API wrapper for Sitefinity
 * Use with NuGet package: Falafel.Sitefinity.WebApi
 */
define([
	'jquery',
	'utils/helpers'
], function ($, Helpers) {
	//PRIVATE PROPERTIES
	
	//START PAGES API
    var getPages = function () {
        return $.getJSON(Helpers.toServicesUrl('/pages'));
    };
	
    var getPagesById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/pages/' + id));
    };
	
    var getPagesByUrl = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/pages/getbyurl?value=' + value));
    };

	//START CONTENT API
    var getContentsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/contents/' + id));
    };
	
    var getContentsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/contents/getbyname?value=' + value));
    };
	
    var getContentsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/contents/getbytitle?value=' + value));
    };
	
	//START NEWS API
    var getNews = function () {
        return $.getJSON(Helpers.toServicesUrl('/news'));
    };
	
    var getNewsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/news/' + id));
    };
	
    var getNewsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/news/getbyname?value=' + value));
    };
	
    var getNewsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/news/getbytitle?value=' + value));
    };
	
    var getNewsByCategory = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/news/getbycategory?value=' + value));
    };
	
    var getNewsByTag = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/news/getbytag?value=' + value));
    };
	
    var getNewsByCategoryId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/news/getbycategoryid/' + id));
    };
	
    var getNewsByTagId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/news/getbytagid/' + id));
    };
	
    var getNewsBySearch = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/news/search?value=' + value));
    };
	
    var getNewsByRecent = function () {
        return $.getJSON(Helpers.toServicesUrl('/news/getrecent'));
    };
	
	//START EVENTS API
    var getEvents = function () {
        return $.getJSON(Helpers.toServicesUrl('/events'));
    };
	
    var getEventsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/events/' + id));
    };
	
    var getEventsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/events/getbyname?value=' + value));
    };
	
    var getEventsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/events/getbytitle?value=' + value));
    };
	
    var getEventsByCategory = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/events/getbycategory?value=' + value));
    };
	
    var getEventsByTag = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/events/getbytag?value=' + value));
    };
	
    var getEventsByCategoryId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/events/getbycategoryid/' + id));
    };
	
    var getEventsByTagId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/events/getbytagid/' + id));
    };
	
    var getEventsBySearch = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/events/search?value=' + value));
    };
	
    var getEventsByRecent = function () {
        return $.getJSON(Helpers.toServicesUrl('/events/getrecent'));
    };
	
	//START PRODUCTS API
    var getProducts = function () {
        return $.getJSON(Helpers.toServicesUrl('/products'));
    };
	
    var getProductsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/products/' + id));
    };
	
    var getProductsBySku = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbysku?value=' + value));
    };
	
    var getProductsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbyname?value=' + value));
    };
	
    var getProductsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbytitle?value=' + value));
    };
	
    var getProductsByCategory = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbycategory?value=' + value));
    };
	
    var getProductsByTag = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbytag?value=' + value));
    };
	
    var getProductsByCategoryId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbycategoryid/' + id));
    };
	
    var getProductsByTagId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/products/getbytagid/' + id));
    };
	
    var getProductsBySearch = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/search?value=' + value));
    };
	
    var getProductsByRecent = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/products/getrecent'));
    };
	
	//START BLOGS API
    var getBlogs = function () {
        return $.getJSON(Helpers.toServicesUrl('/blogs'));
    };
	
    var getBlogsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/blogs/' + id));
    };
	
    var getBlogsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/blogs/getbyname?value=' + value));
    };
	
    var getBlogsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/blogs/getbytitle?value=' + value));
    };
	
    var getBlogsBySearch = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/blogs/search?value=' + value));
    };
	
	//START BLOG POSTS API
    var getPosts = function () {
        return $.getJSON(Helpers.toServicesUrl('/posts'));
    };
	
    var getPostsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/posts/' + id));
    };
	
    var getPostsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbyname?value=' + value));
    };
	
    var getPostsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbytitle?value=' + value));
    };
	
    var getPostsByCategory = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbycategory?value=' + value));
    };
	
    var getPostsByTag = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbytag?value=' + value));
    };
	
    var getPostsByCategoryId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbycategoryid/' + id));
    };
	
    var getPostsByTagId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbytagid/' + id));
    };
	
    var getPostsBySearch = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/posts/search?value=' + value));
    };
	
    var getPostsByParent = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/posts/getbyparent?value=' + value));
	};

	var getPostsByParentTitle = function (value) {
		return $.getJSON(Helpers.toServicesUrl('/posts/getbyparenttitle?value=' + value));
    };

	var getPostsByParentId = function (id) {
		return $.getJSON(Helpers.toServicesUrl('/posts/getbyparentid/' + id));
	};
	
    var getPostsByRecent = function () {
        return $.getJSON(Helpers.toServicesUrl('/posts/getrecent'));
    };
	
	//START IMAGES API
    var getImagesById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/images/' + id));
    };
	
    var getImagesByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/images/getbyname?value=' + value));
    };
	
    var getImagesByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/images/getbytitle?value=' + value));
    };
	
    var getImagesByParent = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/images/getbyparent?value=' + value));
    };
	
    var getImagesByParentId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/images/getbyparentid/' + id));
    };
	
    var getImagesByRecent = function () {
        return $.getJSON(Helpers.toServicesUrl('/images/getrecent'));
    };
	
	//START VIDEOS API
    var getVideosById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/videos/' + id));
    };
	
    var getVideosByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/videos/getbyname?value=' + value));
    };
	
    var getVideosByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/videos/getbytitle?value=' + value));
    };
	
    var getVideosByParent = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/videos/getbyparent?value=' + value));
    };
	
    var getVideosByParentId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/videos/getbyparentid/' + id));
    };
	
    var getVideosByRecent = function () {
        return $.getJSON(Helpers.toServicesUrl('/videos/getrecent'));
    };
	
	//START DOCS API
    var getDocumentsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/documents/' + id));
    };
	
    var getDocumentsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/documents/getbyname?value=' + value));
    };
	
    var getDocumentsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/documents/getbytitle?value=' + value));
    };
	
    var getDocumentsByParent = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/documents/getbyparent?value=' + value));
    };
	
    var getDocumentsByParentId = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/documents/getbyparentid/' + id));
    };
	
    var getDocumentsByRecent = function () {
        return $.getJSON(Helpers.toServicesUrl('/documents/getrecent'));
    };
	
	//START LISTS API
    var getListsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/lists/' + id));
    };
	
    var getListsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/lists/getbyname?value=' + value));
    };
	
    var getListsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/lists/getbytitle?value=' + value));
    };
	
	//START DEPARTMENTS API
    var getDepartments = function () {
        return $.getJSON(Helpers.toServicesUrl('/departments'));
    };
	
    var getDepartmentsById = function (id) {
        return $.getJSON(Helpers.toServicesUrl('/departments/' + id));
    };
	
    var getDepartmentsByName = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/departments/getbyname?value=' + value));
    };
	
    var getDepartmentsByTitle = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/departments/getbytitle?value=' + value));
    };
	
    var getDepartmentsByParent = function (value) {
        return $.getJSON(Helpers.toServicesUrl('/departments/getbyparent?value=' + value));
	};

	var getDepartmentsByParentTitle = function (value) {
		return $.getJSON(Helpers.toServicesUrl('/departments/getbyparenttitle?value=' + value));
    };

	var getDepartmentsByParentId = function (id) {
		return $.getJSON(Helpers.toServicesUrl('/departments/getbyparentid/' + id));
	};

    //PUBLIC PROPERTIES
    return {
	    getPages: getPages,
	    getPagesById: getPagesById,
		getPagesByUrl: getPagesByUrl,
		getContentsById: getContentsById,
		getContentsByName: getContentsByName,
		getContentsByTitle: getContentsByTitle,
		getNews: getNews,
		getNewsById: getNewsById,
		getNewsByName: getNewsByName,
		getNewsByTitle: getNewsByTitle,
		getNewsByCategory: getNewsByCategory,
		getNewsByTag: getNewsByTag,
		getNewsByCategoryId: getNewsByCategoryId,
		getNewsByTagId: getNewsByTagId,
		getNewsBySearch: getNewsBySearch,
		getNewsByRecent: getNewsByRecent,
		getEvents: getEvents,
		getEventsById: getEventsById,
		getEventsByName: getEventsByName,
		getEventsByTitle: getEventsByTitle,
		getEventsByCategory: getEventsByCategory,
		getEventsByTag: getEventsByTag,
		getEventsByCategoryId: getEventsByCategoryId,
		getEventsByTagId: getEventsByTagId,
		getEventsBySearch: getEventsBySearch,
		getEventsByRecent: getEventsByRecent,
		getProducts: getProducts,
		getProductsById: getProductsById,
		getProductsBySku: getProductsBySku,
		getProductsByName: getProductsByName,
		getProductsByTitle: getProductsByTitle,
		getProductsByCategory: getProductsByCategory,
		getProductsByTag: getProductsByTag,
		getProductsByCategoryId: getProductsByCategoryId,
		getProductsByTagId: getProductsByTagId,
		getProductsBySearch: getProductsBySearch,
		getProductsByRecent: getProductsByRecent,
		getBlogs: getBlogs,
		getBlogsById: getBlogsById,
		getBlogsByName: getBlogsByName,
		getBlogsByTitle: getBlogsByTitle,
		getBlogsBySearch: getBlogsBySearch,
		getPosts: getPosts,
		getPostsById: getPostsById,
		getPostsByName: getPostsByName,
		getPostsByTitle: getPostsByTitle,
		getPostsByCategory: getPostsByCategory,
		getPostsByTag: getPostsByTag,
		getPostsByCategoryId: getPostsByCategoryId,
		getPostsByTagId: getPostsByTagId,
		getPostsBySearch: getPostsBySearch,
		getPostsByParent: getPostsByParent,
		getPostsByParentTitle: getPostsByParentTitle,
		getPostsByParentId: getPostsByParentId,
		getPostsByRecent: getPostsByRecent,
		getImagesById: getImagesById,
		getImagesByName: getImagesByName,
		getImagesByTitle: getImagesByTitle,
		getImagesByParent: getImagesByParent,
		getImagesByParentId: getImagesByParentId,
		getImagesByRecent: getImagesByRecent,
		getVideosById: getVideosById,
		getVideosByName: getVideosByName,
		getVideosByTitle: getVideosByTitle,
		getVideosByParent: getVideosByParent,
		getVideosByParentId: getVideosByParentId,
		getVideosByRecent: getVideosByRecent,
		getDocumentsById: getDocumentsById,
		getDocumentsByName: getDocumentsByName,
		getDocumentsByTitle: getDocumentsByTitle,
		getDocumentsByParent: getDocumentsByParent,
		getDocumentsByParentId: getDocumentsByParentId,
		getDocumentsByRecent: getDocumentsByRecent,
		getListsById: getListsById,
		getListsByName: getListsByName,
		getListsByTitle: getListsByTitle,
		getDepartments: getDepartments,
		getDepartmentsById: getDepartmentsById,
		getDepartmentsByName: getDepartmentsByName,
		getDepartmentsByTitle: getDepartmentsByTitle,
		getDepartmentsByParent: getDepartmentsByParent,
		getDepartmentsByParentTitle: getDepartmentsByParentTitle,
		getDepartmentsByParentId: getDepartmentsByParentId,
		
		//MAINTAINED FOR BACKWARD COMPATIBILITY
	    getImagesByAlbum: getImagesByParent
    };
});
