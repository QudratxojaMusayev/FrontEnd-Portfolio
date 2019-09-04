// Check off completed tasks
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

// Delete a task
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {
        // Read the value of input
        var textVal = $(this).val();
        // Clear up the input
        $(this).val("");
        // Appending it to the ui
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+ textVal +"</li");
    }
})

$("#add").on("click", function() {
    $("input[type='text']").fadeToggle();
})