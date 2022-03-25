$(document).ready(function() {

        // Update quantity on click
    $('.update-link').click(function(e) {
        var form = $(this).prevAll(".update-form");
        form.submit();
    })

    // Remove item and reload on click
    $('.remove-item').click(function(e) {
        var csrfToken = "{{ csrf_token }}";
        var itemId = $(this).attr('id').split('remove_')[1];
        var url = `/cart/remove/${itemId}/`;
        var data = {csrfmiddlewaretoken: window.CSRF_TOKEN};

        $.post(url, data)
        .done(function() {
            location.reload();
        });
    })

});