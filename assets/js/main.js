//get json file

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(xhttp.responseText);

        //javascript going through json file to show image of characters in overwatch with id and class of fighter
        //output goes into collapse area in "Character Icon" area

        characters = response.characters;

        getCharacterData(characters);
    }
};
let characters;
let hidden = 0;
//let characters;

const getCharacterData = function(characters) {

    var output = '';
    for (var i = 0; i < characters.length; i++) {
        output += '<div class="characterBox' + ' ' + characters[i].role + '" id="' + characters[i].id + '">' + '<img src="' + characters[i].image + '"' + 'width="100%" height="100%"' + 'class="' + characters[i].role + '"/>' + '<name ="' + characters[i].name + '">' + '</div>';
    }

    appendCharacters(output)
    isolateCharacter(characters)
}

const appendCharacters = function(output) {
    $('#innerPicter').append(output);
}

const isolateCharacter = function(characters) {

    var divs = document.querySelectorAll(".characterBox");

    // get characters id and change background pic/hide icons
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', function(event) {
            const result = characters.find(item => {
                return item.id == this.getAttribute("id")
            });

            //changing background image for clicked new character
            $('.main-page').css('background-image', 'url("' + result.image + '")');
            createCharacterTable(result);
            $('.characterBox').hide()
        });
    }
    hidden = 1;
    console.log(characters);


}

const createCharacterTable = function(result) {
    $('.singleInformation').append("<h2>" + result.name + "</h2>")
        //make pretty tables here
}

const getJSONData = function() {
    xhttp.open("GET", "assets/js/info.json", true);
    xhttp.send();
}();

//search for characters in search area

$(document).ready(function() {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function() {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('assets/js/info.json', function(data) {
            $(data.characters).each(function(key, value) {
                if (value.name.search(expression) != -1 || value.real_name.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class"><img src="' + value.image + '" height="40" width="40" class="img-thumbnail" /> ' + value.name + ' | <span class="text-muted">' + value.real_name + '</span></li>');
                }
            });
        });
    });

});

$('#result').on('click', 'li', function() {
    var click_text = $(this).text().split('|');
    $('#search').val($.trim(click_text[0]));
    console.log(this);
    $("#result").html('');
});

//Icon area- button options to hide and show different characters in their different roles
//Show all with all btn
$('#all-toggle').click(function() {
    $('.damage').css('display', 'inline-block')
    $('.tank').css('display', 'inline-block')
    $('.support').css('display', 'inline-block');

});
//Show damage characters
$('#damage-toggle').click(function() {
    $('.damage').css('display', 'inline-block')
    $('.tank').css('display', 'none')
    $('.support').css('display', 'none');

});
//Show tank characters
$('#tank-toggle').click(function() {
    $('.tank').css('display', 'inline-block')
    $('.damage').css('display', 'none')
    $('.support').css('display', 'none');
});
//Show support characters
$('#support-toggle').click(function() {
    $('.support').css('display', 'inline-block')
    $('.tank').css('display', 'none')
    $('.damage').css('display', 'none');

});
//hide characters
$('#hide-toggle').click(function() {
    $('.support').css('display', 'none')
    $('.tank').css('display', 'none')
    $('.damage').css('display', 'none');

});