$(document).ready(function () {
    
    // References
    var input = $('#Input');
    var button = $('#Button');
    var container = $('.TaskList');

    // Handlebars Init
    var source = $('#list-template').html();
    var template = Handlebars.compile(source);

    getTasks(template, container);

    // Click
    button.click(function() {
        createTask(template, container, input);
    })
    

}); // <-- End ready


/************
 * FUNCTIONS
 ***********/

// cRud
function getTasks(template, container) {
    container.html('');

    $.ajax({
        url: 'http://157.230.17.132:3023/todos',
        method: 'GET',
    }).done(function(res) {
        for (var i = 0; i < res.length; i++) {
            var context = res[i];
            var html = template(context);
            container.append(html);
        }
    }).fail(function() {
        console.log('Errore chiamata');
    });
}

// Crud
function createTask(template, container, input) {
    $.ajax({
        url: 'http://157.230.17.132:3023/todos',
        method: 'POST',
        data: {
            text: input.val()
        }
    }).done(function(res) {
        getTasks(template, container);
    }).fail(function(){
        console.log('Errore chiamata');
    });
}