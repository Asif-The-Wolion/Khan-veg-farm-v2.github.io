// left sidebar
$(document).ready(function () {
    $("#toggleNavLefton").click(function () {
        $("#LeftNavContent").show(500);
    });
    $("#toggleNavLeftoff").click(function () {
        $("#LeftNavContent").hide(200);
    });
});

// // right sidebar
$(document).ready(function () {
    $("#carton").click(function () {
        $("#cartbox").show(500);
    });
    $("#cartoff").click(function () {
        $("#cartbox").hide(350);
    });
});


//   legal page
$(document).ready(function () {
    $("#legal").click(function () {
        $("#page").toggle(300);
    });
});

// join 

$(document).ready(function () {
    $("#joinbtn").click(function (e) { 
        $("#join").toggle(300);        
    });
});
