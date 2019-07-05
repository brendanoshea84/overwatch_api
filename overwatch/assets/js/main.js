var container = $('div.container');

$('input#get').click(function() {
    $.ajax({
        type: 'GET', 
        url: 'assets/js/info.json',
        dataType: 'json', 
        success: function(data) {
            $.each(data, function(index, item) {
                $.each(item, function(key, value) {
                    console.log(key, value.name, value.health);
                });
                container.append('<br></br>');
            });
        }
    });
})