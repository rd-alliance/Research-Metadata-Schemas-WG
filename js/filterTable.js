$('select.filter').change(function(){
    if($(this).val() != "-1")
    {
    $('table.i').hide();
    $('table#'+$(this).val()).show();
    }
})