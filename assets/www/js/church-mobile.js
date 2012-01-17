function loadLatest(){
            $.ajax({
            url: "http://feeds.feedburner.com/harvesttn/allnews",
            success: function(data)
            {
                latestFeed = data;
                $('#content').refresh();
            },dataType: "xml"
            });
        };

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
};

function pageClick(guid)
{
    $.mobile.changePage('#pageNewsItem')
};