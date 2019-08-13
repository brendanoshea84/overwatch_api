//get json file

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);

        var characters = response.characters;

        //javascript going through json file to show image of characters in overwatch with id and class of fighter
        //output goes into collapse area in "Character Icon" area
        var output = '';
        for (var i = 0; i < characters.length; i++) {
            output += '<div class="characterBox' +' '+ characters[i].role+'">'+ '<img src="' + characters[i].image + '"' + 'width="100%" height="100%"' +'class="'+characters[i].role + '"/>' + '<name ="'+characters[i].name +'">'+'"</div>';
        }
        document.getElementById('innerPicter').innerHTML = output;

    }
};

xhttp.open("GET", "assets/js/info.json", true);
xhttp.send();

//search for characters in search area

$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function () {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('assets/js/info.json', function (data) {
            $(data.characters).each(function (key, value) {
                if (value.name.search(expression) != -1 || value.real_name.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class"><img src="' + value.image + '" height="40" width="40" class="img-thumbnail" /> ' + value.name + ' | <span class="text-muted">' + value.real_name + '</span></li>');
                }
            });
        });
    });

});


$('#result').on('click', 'li', function () {
    var click_text = $(this).text().split('|');
    $('#search').val($.trim(click_text[0]));
    $("#result").html('');
});

//Icon area- button options to hide and show different characters in their different roles
//Show all with all btn
$('#all-toggle').click(function(){
    $('.damage').css('display', 'inline-block')
    $('.tank').css('display', 'inline-block')
    $('.support').css('display', 'inline-block');

});
//Show damage characters
$('#damage-toggle').click(function(){
    $('.damage').css('display', 'inline-block')
    $('.tank').css('display', 'none')
    $('.support').css('display', 'none');

});
//Show tank characters
$('#tank-toggle').click(function(){
    $('.tank').css('display', 'inline-block')
    $('.damage').css('display', 'none')
    $('.support').css('display', 'none');
});
//Show support characters
$('#support-toggle').click(function(){
    $('.support').css('display', 'inline-block')
    $('.tank').css('display', 'none')
    $('.damage').css('display', 'none');

});


//Single player information area

$("#characterBox").click(function(){
    console.log("worki");
})