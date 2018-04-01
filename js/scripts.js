///////////////////////////////
//BUSINESS LOGIC STARTS HERE!!//
//////////////////////////////
var PingPong = function(number) {
    for (var index = 1; index <= number; index += 1) {
        var newList = [];
        if (index % 3 === 0 && index % 5 === 0) {
            newList.push("Ping Pong");
        } else if (index % 3 === 0) {
            newList.push("Ping");
        } else if (index % 5 === 0) {
            newList.push("Pong");
        } else {
            newList.push(index);
        }
    }
    return newList;

};
//js animation business logic
// animation for Hover
var animationHover = function(element, animation) {
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function() {
            //wait for animation to finish before removing classes
            window.setTimeout(function() {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}
// animaton for on click
function animationClick(element, animation) {
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);
            //wait for animation to finish before removing classes
            window.setTimeout(function() {
                element.removeClass('animated ' + animation);
            }, 2000);

        });
}

function countPing(numList) {}
//////////////////////////////////////
//USER INTERFACE LOGIC STARTS HERE!!//
/////////////////////////////////////
$(document).ready(function() {
    $("form.form_number").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("input#digit").val());
        var pingList = PingPong(number);


        var pong = pingList.map(function(ping) {
            var printNumber = ("<li>" + ping + "</li");
            $("ul").append(printNumber);

        });
        $(".result-tab").show();
    });
    $(".result-tab").click(function() {
        (".result-tab").toggle();

    });
    //Animation for hover page
    animationHover(".heading", "tada");
    animationHover(".btn-primary", "swing");
    animationHover(".fall1", "hinge");
    animationHover(".fall2", "hinge");
    animationHover(".fall3", "hinge");
    animationHover("#link", "shake");
    animationHover(".btn-danger", "shake");
    animationHover(".ping", "lightSpeedIn");
    animationHover(".pong", "bounceInUp");
    animationHover("#name", "hinge");

    //Animation for on click
    animationClick(".btn-primary", "hinge");
    animationClick(".btn-danger", "zoomOut");
    animationClick("#link", "rubberBand");

});