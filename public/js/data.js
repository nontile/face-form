function getConfig() {
    var res;
    $.ajax({
        url: '../../compareTo.json',
        async: false,
        dataType: 'json',
        success: function (json) {
            // console.log('in', json)
            res = json;
        }
    });
    return res;
}