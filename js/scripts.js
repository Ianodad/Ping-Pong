var PingPong = function(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Ping Pong"
    } else if (num % 3 === 0) {
        return "Ping"
    } else if (num % 5 === 0) {
        return "Pong"
    } else {
        return number
    }
}

$(document).ready(function() {
    $("form.form-number").submit(function(event) {
        event.preventDefault();
        var number = parsenInt($("input#digit").val());

        for (var index = 0; index <= number; index++); {
            var new_number = PingPong(index);
            var printNumber = ("<li>" + new_number + "</li");
            $("ul").append(printNum);
        };

        $(".result").show();


    });
});