$(document).ready(function () {
    
    // References
    var input = $('#Input');
    var button = $('#Button');
    var container = $('.TaskList');

    // Handlebars Init
    var source = $('#list-template').html();
    var template = Handlebars.compile(source);

    getTasks(template, container);

    

}); // <-- End ready


/************
 * FUNCTIONS
 ***********/

// Crud
function getTasks(template, container) {
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
    })
}