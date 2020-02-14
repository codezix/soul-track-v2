function myFunction() {
    var feedback_category = document.getElementById("feedback_category").value;
    var feedback_comment = document.getElementById("feedback_comment").value;
    var page_title = document.getElementById("page_title").value;
    //alert(feedback_category+feedback_comment+page_title);
    // Returns successful data submission message when the entered information is stored in database.
    //var dataString = '&feedback_category1=' + feedback_category + '&feedback_comment1=' + feedback_comment + '&page_title1=' + page_title;
    //alert(dataString);
    if (feedback_category == '' || feedback_comment == '') {
        alert("Please Fill All Fields");
    } else {
        // AJAX code to submit form.
        $.ajax({
            type: "POST",
            url: "http://christembassysoultracker.org/settings/feedback",
            data: {
                feedback_category: feedback_category,
                feedback_comment: feedback_comment,
                page_title: page_title
            },
            //data: dataString,
            cache: false,
            success: function(html) {
                //alert(html);
                document.getElementById("feedback_response").innerHTML = html;
                $('#modal-form').modal('hide')
            }
        });
    }
    //console.log();
    return false;
}