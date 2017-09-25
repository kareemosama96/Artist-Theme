$(function () {

  /* -------------------------------------------------------------------- navbar section animation --------------------------------------------------------------------*/
  
  
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    
    /* -------------------------------------------------------------------- work section animation --------------------------------------------------------------------*/
    
    
    $(".work-title").click(function () {

        $(".work-belt").hide(1000);
        $(".show-belt").css("height", "auto");
        $.ajaxSetup({ cache: false });
        var
            $this = $(this),
            n = $this.attr("number");
        $(".work-" + n).css("display", "block")
       
    });

    $(".back").click(function () {

        $(".work-hide").css("display", "none");
        $(".work-belt").show(1000);
        

    });

    /* -------------------------------------------------------------------- client section animation --------------------------------------------------------------------*/
    
    
    var i = 2,
        j = 4;
    $(".one").click(function () {
        $(".person").hide();
        $(".c-1").show("ease-in");
        $(".company").css("border-bottom", "none");
        $(".b-1").css("border-bottom", "8px solid rgb(185, 110, 44)");
        i = 2;
        j = 4;
    });
    $(".two").click(function () {
        $(".person").hide();
        $(".c-2").show("ease-in");
        $(".company").css("border-bottom", "none");
        $(".b-2").css("border-bottom", "8px solid rgb(185, 110, 44)");
        i = 3;
        j = 1;
    });
    $(".three").click(function () {
        $(".person").hide();
        $(".c-3").show("ease-in");
        $(".company").css("border-bottom", "none");
        $(".b-3").css("border-bottom", "8px solid rgb(185, 110, 44)");
        i = 4;
        j = 2;
    });
    $(".four").click(function () {
        $(".person").hide();
        $(".c-4").show("ease-in");
        $(".company").css("border-bottom", "none");
        $(".b-4").css("border-bottom", "8px solid rgb(185, 110, 44)");
        i = 1;
        j = 3;
    });
  
    $(".next").click(function () {
        if (i <= 4) {
            $(".person").hide();
            $(".c-" + i).show("ease-in");
            
            $(".company").css("border-bottom", "none");
            $(".b-" + i).css("border-bottom", "8px solid rgb(185, 110, 44)");
        
            i = i + 1;
            j = j + 1;

            if (i > 4) {
                i = 1;
            }
            if (j > 4) {
                j = 1;
            }
        }
    });

    $(".prev").click(function () {
        if (j <= 4) {
            $(".person").hide();
            $(".c-" + j).show("ease-in");
            
            $(".company").css("border-bottom", "none");
            $(".b-" + j).css("border-bottom", "8px solid rgb(185, 110, 44)");
        
            
            j = j - 1;
            i = i - 1;

            if (j < 1) {
                j = 4;
            }
            if (i < 1) {
                i = 4;
            }
        }
    });




















});

