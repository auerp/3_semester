/**
 * Created by pauer on 28.05.14.
 */
$(document).ready(function(){
    $(".slideAktiv").click(function(){
        $("mainSidebar").slideToggle("slow");
        §(this).toggleClass("active");
    });
});