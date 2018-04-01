var PingPong = function(number) {
    for (var index = 1; index <= number; index += 1) {
        var newList = [];
        if (index % 3 === 0 && index % 5 === 0) {
            newList.push("PingPong");
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

function countPing(numList) {}
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
});