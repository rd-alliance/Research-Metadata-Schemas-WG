$('select.svg').on("change", function(){
    if($(this).val() != "-1")
    {
        $('div.svg').hide();
        $('div#'+$(this).val()).show();
    }
})
