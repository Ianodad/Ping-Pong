var PingPong = function(number) {
    for (var index = 1; index <= number; index += 1) {
        var newList = [];
        if (number % 3 === 0 && number % 5 === 0) {
            newList.push("PingPong");
        } else if (number % 3 === 0); {
            newList.push("Pong");
        } else if (number % 5 === 0); {
            newList("Ping");
        } else {
            newList.push(index);
        }
    }
}
$(document).ready(function() {
    $("form.form_number").submit(function(event) {
        event.preventDefault();
        var number = parsenInt($("input#digit").val());
        var pingList = PingPong(number);


        var pong = pingList.map(function(ping) {
            var printNumber = ("<li>" + ping + "</li");
            $("ul").append(printNumber);

        });
        $(".result").show();
    });
});