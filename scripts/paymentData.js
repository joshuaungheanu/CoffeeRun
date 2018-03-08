(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function Payment(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("No element exist with selector: " + selector);
    }
  }

  Payment.prototype.generatemsg = function(info) {
    var dialogBox = new Greeting(info);
    this.$element.append(dialogBox.$element);
  };

  function Greeting(paymentInfo) {
    var $div = $("<div></div>", {
      id: "greet",
      class: "modal"
    });
    var $p = $("<p></p>");
    var $a = $("<a></a>", {
      href: "#",
      rel: "modal:close"
    });

    var description = "Thank you for your payment, ";
    description += paymentInfo.title + " " + paymentInfo.username + ". <br>";

    $p.append(description);
    $div.append($a);
    $div.append($p);

    this.$element = $div;
  }

  App.Payment = Payment;
  window.App = App;
})(window);
