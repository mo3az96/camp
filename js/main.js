
$(document).ready(function () {
    $(document).ready(function () {
        $('.collapsible').collapsible();
    });

    $('.nav-btn').on('click', function (e) {
        e.preventDefault()
        $('[data-toggle="tab"][href="' + this.hash + '"]').trigger('click');
        $('[data-toggle="tab"][href="' + this.hash + '"]').addClass('done');
    })

    $('.selectall').click(function () {
        $(this).parent(".select-all").siblings().find("input").prop('checked', this.checked);
    });

    $('.selectall').change(function () {
        var check = ($(this).parent(".select-all").siblings().find("input").filter(":checked").length == $(this).parent(".select-all").siblings().find("input").length);
        $('#selectall').prop("checked", check);
    });
    $(".input-file").change(function () {
        var file = $('.input-file')[0].files[0]
        $(".file-text").text(file.name)
    });

    $('.fixed-arrow').click(function () {
        $(".fixed-info").toggleClass("out");
        $(this).toggleClass("active");
    });
});