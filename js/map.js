$(function() {
    Map.init();
});

var Map = new function() {
    this.mapData = [];
    this.mapContainer = null;
    this.mapDataContainer = null;

    this.init = function() {
        this.mapContainer = $("#mapContainer");
        this.mapDataContainer = $("#mapDataContainer");
        this.mapContainer.on('click', function(event) {
            var point = { x: event.clientX - event.currentTarget.offsetLeft, y: event.clientY - event.currentTarget.offsetTop };
            Map.mapData[Map.mapData.length] = point;
            Map.render();
        });
    };

    this.render = function() {
        this.mapDataContainer.html('');
        for (var i = 0, l = Map.mapData.length; i<l; i++) {
            var point = Map.mapData[i];
            var $pointContainer = $("<div class=\"point\"></div>");
            this.mapContainer.append($pointContainer);
            $pointContainer.css({ "position": "absolute", "top" : point.y - 4, "left" : point.x - 4 });
            this.mapDataContainer.append("<p>Point x: " + (point.x - 4) + " y: " + (point.y - 4) + "</p><input type=\"text\" id=\"" + i + "\" /><button>Speichern</button>");
        }
    };
};