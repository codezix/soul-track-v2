$(document).ready(function() {

    // Setup datatables

    $.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings)

    {

        return {

            "iStart": oSettings._iDisplayStart,

            "iEnd": oSettings.fnDisplayEnd(),

            "iLength": oSettings._iDisplayLength,

            "iTotal": oSettings.fnRecordsTotal(),

            "iFilteredTotal": oSettings.fnRecordsDisplay(),

            "iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),

            "iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)

        };

    };



    var table = $("#mytable").dataTable({

        initComplete: function() {

            var api = this.api();

            $('#mytable_filter input')

            .off('.DT')

            .on('input.DT', function() {

                api.search(this.value).draw();

            });

        },

        oLanguage: {

            sProcessing: "tracking..."

        },

        processing: true,

        serverSide: true,

        ajax: {
            "url": "http://christembassysoultracker.org/track/get_product_json",
            "type": "POST"
        },

        columns: [

            //{"data": "sid"},     

            {
                "data": "firstname"
            },

            {
                "data": "lastname"
            },

            //{"data": "email"},

            {
                "data": "foundation_message"
            },

            {
                "data": "status_message"
            },

            {
                "data": "view"
            }

        ],

        order: [
            [1, 'desc']
        ],

        rowCallback: function(row, data, iDisplayIndex) {

            var info = this.fnPagingInfo();

            var page = info.iPage;

            var length = info.iLength;

            $('td:eq(0)', row).html();

        }



    });

    // end setup datatables

    // get Edit Records

    $('#mytable').on('click', '.edit_record', function() {

        var sid = $(this).data('sid');

        var firstname = $(this).data('firstname');

        var lastname = $(this).data('lastname');

        var phone_number = $(this).data('format_phone_no');

        var email = $(this).data('email');

        //var statusmessage=$(this).data('statusmessage');

        var foundation_message = $(this).data('foundation_message');

        // alert(foundationmessage);

        $('#ModalUpdate').modal('show');

        $('[name="sid"]').val(sid);

        $('[name="firstname"]').val(firstname);

        $('[name="lastname"]').val(lastname);

        $('[name="phone_number"]').val(phone_number);

        $('[name="email"]').val(email);

        //$('[name="statusmessage"]').val(statusmessage);

        $('[name="foundation_message"]').val(foundation_message);

    });

    // End Edit Records

    // get delete Records

    $('#mytable').on('click', '.delete_record', function() {

        var code = $(this).data('code');

        $('#ModalDelete').modal('show');

        $('[name="product_code"]').val(code);

    });

    // End delete Records

});