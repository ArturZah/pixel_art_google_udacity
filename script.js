$(function(){

    const info = $(".info");
    const info_btn = $(".info-btn");
    const gridContainer = $("#pixel_canvas");
    const submitButton = $("#submit-button");
    const td = $(".td");

    info_btn.click(function(){
      info.toggleClass("fade-in");
    });
    
    var table;
    var colorPicker = $("#colorPicker");

    if ($(window).width() <= 450) {
        var gridHeight = 8;
        var gridWidth = 8;
        $("#input_width, #input_height").attr("max","8");
    } else {
        var gridHeight = 16;
        var gridWidth = 16;
        $("#input_width, #input_height").attr("max","8");
    }

    $(window).resize(function(){
      var win = $(this); //this = window
      if (win.width() <= 450) { 
        var gridHeight = 8;
        var gridWidth = 8;
        $("#input_width, #input_height").attr("max","8");
        $("#table").remove();
        if(table != undefined){
            table = "<table class='table' id='table'>";
            for (let r = 0; r < gridHeight; r ++) {
                table += "<tr class='tr'>";
                for (let c = 0; c < gridWidth; c++) {
                    table += ("<td class='td'></td>")
                }
                table += "</tr>";
            }
            table += "</table>";
            gridContainer.append(table);
            submitButton.attr("value", "Clear");
        }
        
      } else {
        var gridHeight = 16;
        var gridWidth = 16;
        $("#input_width, #input_height").attr("max","16");
      }
});

    function startGrid(){
        if(table === undefined){
            table = "<table class='table' id='table'>";
            for (let r = 0; r < gridHeight; r ++) {
                table += "<tr class='tr'>";
                for (let c = 0; c < gridWidth; c++) {
                    table += ("<td class='td'></td>")
                }
                table += "</tr>";
            }
            table += "</table>";
            gridContainer.append(table);
            submitButton.attr("value", "Clear");
        } else {
            $("#table").remove();
            table = undefined;
            submitButton.attr("value", "Send")
        }
    };

    startGrid();

    function color(target){
        let color = colorPicker.val();
        $(target).css("background-color", color);
    }

    function clearCell(target){
        $(target).css("background-color", "");
    }

    $("form").submit(function makeGrid(e){
        e.preventDefault();
        gridHeight = $("#input_height").val();
        gridWidth = $("#input_width").val();
        startGrid()
    });

    gridContainer.on("dblclick", ".td", function(){
        clearCell(this);
    });

    gridContainer.on("mousedown", ".td", function(){
        color(this);
    });

    $(".menu-label").click(function() {

        $(".menu-content").toggleClass("visible");
        $(".menu-label").toggleClass("label-on");
    });

    $(".content").click(function() {

        $(".menu-content").removeClass("visible");
        $(".menu-label").removeClass("label-on");
    });

});
