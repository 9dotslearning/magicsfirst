/* from https://creative-coding.decontextualize.com/public/sketchui.js
on clicking "run sketch" button, add iframe pointing to source
on clicking "stop sketch" button, remove iframe
*/


$(function() {
    $('.play').each(function(index, val) {
        $(this).click(function() {
            // jquery expects 'data-' prepending the parameter, so data-sketch-id
            var sketchId = $(this).data('sketch-id');
            var sketchPath = $('#'+sketchId).data('sketch-src');
            if ($('#sketchframe-'+sketchId).length == 0) {
                $('#'+sketchId).append(
                    "<iframe id='sketchframe-"+sketchId+"' src='"+sketchPath+
                    "' width='400' height='400' frameborder='0'></iframe>");
            }
        });
    });
    $('.stop').each(function(index, val) {
        $(this).click(function() {
            var sketchId = $(this).data('sketch-id');
            $('#sketchframe-'+sketchId).remove();
        });
    });
    $('.showAnswers').click(function(e){
      $(this).toggleClass('showAnswersVisited');
      $('.answers').each(function(index, val) {
        $(this).toggleClass('visible');
      });
    });
});
