Module.register("MMM-PilotWX", {
    getStyles: function() {
        return ["MMM-PilotWX.css"];
    }

    getDom: function() {
        var wrapper = document.createElement("div");
        var icaoList = ["YBAF", "YAMB"];

        icaoList.forEach(function(icao) {
            var url = "http://metar.online/metar/" + icao + "/1";
            var entry = document.createElement("div");
            entry.innerHTML = this.getMetar(url);
            wrapper.appendChild(entry);
        });

        return wrapper;
    }
});