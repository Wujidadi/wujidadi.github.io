$(document).tooltip({
    content: function() {
        return $(this).attr('title')
    },
    position: {
        my: 'left center',
        at: 'right+8 center',
        using: function(position, feedback) {
            $(this).css(position);
            $('<div>').addClass(feedback.vertical)
                      .addClass(feedback.horizontal)
                      .appendTo(this);
        }
    }
});