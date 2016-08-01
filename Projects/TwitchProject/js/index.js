var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2", "ESL_SC2"];
var patt = /kraken\/channels/g;
var val;
var game;

for (var i = 0; i < users.length; i++) {
  //console.log(i);
  callAjax(i);
}

function ajax(url) {
  $.ajax({
    url: url,
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function(data) {
      if (patt.test(url)) {
        console.log("Channel");
        console.log(data.url);
        genDisplay1(data);
        // $("div").append("<a href =" + data.url + ">"+ data.display_name + "</a>");
      } else {
        //console.log("stream url");
        fetchData(data);
      }
    },
    error: function() {
      console.log("unable to access json");
    }

  });
}

function fetchData(data) {
  if (data.error === "Unprocessable Entity") {
    genDisplay3(data);

  } else if (data.stream === null) {
    console.log("Stream false");
    console.log(data._links.channel);
    chanAjax(data._links.channel);
  } else {
    console.log("Stram true");
    //console.log(data.stream.channel.url);
    //console.log(data.stream.game);
    genDisplay2(data);
  }
}

function genDisplay1(data) {
  console.log(data);
  $(".output").append("<div  class = \"row offline\"><div class =\'container\'><a href = " + data.url + "><div class = \"inBlock  col-md-2 col-md-offset-2 outOnline pull-left\"> " + data.display_name + "<div class = \'status pull-right\' > <p  class = \'statusOffline\'>Offline</p></div><p></div></a></div></div>");
}

function genDisplay2(data) {
  console.log("gen Display 2");
  $(".output").append("<div class = \"row online\"><div class =\'container\'><a href = " + data.stream.channel.url +
    "><div class = \"inBlock pull-left col-md-4 col-md-offset-2 inOnline\">" + data.stream.channel.display_name + "<div class = \'status pull-right\' > <p class = \'statusOnline\'>Online</p></div><p>      " + data.stream.game + ": " + data.stream.channel.status + "</p></div></a></div></div>");
}

function genDisplay3(data) {
  console.log("Display Name: ", users[i]);
  $(".output").append("<div class = \"row offline\"><div class =\'container\'><div class = \"inBlock text-center col-md-2 col-md-offset-2 unavailable\">" + data.message + "</div></a></div></div>");
}

function callAjax(i) {
  url = "https://api.twitch.tv/kraken/streams/" + users[i] + "?callback=?";
  ajax(url);
}

function chanAjax(url) {
  $.ajax({
    url: url,
    dataType: "jsonp",
    data: {
      format: "json"
    },
    success: function(data) {
      genDisplay1(data);
    },
    error: function() {
      console.log("unable to access json");
    }

  });
}

$(".allBtn").click(function() {
  $(".offline").show();
  $(".online").show();
});

$(".onlineBtn").click(function() {
  $(".offline").hide();
  $(".online").show();
});

$(".offlineBtn").click(function() {
  $(".offline").show();
  $(".online").hide();
});