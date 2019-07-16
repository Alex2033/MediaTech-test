window.onload = function() {

    var btn = document.querySelector('.button');
    var url = document.location.search.slice(5);

    btn.href = url;

    function notifyMe() {
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }
      
        else if (Notification.permission === "granted") {
          var notification = new Notification("Hi there!");
        }
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {

            if (permission === "granted") {
              var notification = new Notification("Hi there!");
            }
          });
        }

      }Notification.requestPermission().then(function(result) {
        console.log(result);
      });
        function spawnNotification(body, icon, title) {
            var options = {
                body: body,
                icon: icon
            };
            var n = new Notification(title, options);
        }
    notifyMe();
}