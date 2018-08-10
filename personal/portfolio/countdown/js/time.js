var time = (function() {
    var config = {
        time: null,
        distance: null,
        millisec: 1000,
        sec: 60,
        min: 60,
        hour: 24
    };

    var getSec = function() {
        return Math.floor((config.distance % (config.millisec * config.sec)) / config.millisec);
    };

    var getMin = function() {
        return Math.floor((config.distance % (config.millisec * config.sec * config.min)) / (config.millisec * config.sec));
    };

    var getHour = function() {
        return Math.floor((config.distance % (config.millisec * config.sec * config.min * config.hour)) / (config.millisec * config.sec * config.min));
    };

    var getDate = function() {
        return Math.floor(config.distance / (config.millisec * config.sec * config.min * config.hour));
    };

    var getIniTime = function() {
        return getDate() + '일' + getHour() + '시' + getMin() + '분' + getSec() + '초';
    };

    var getNow = function() {
        return new Date().getTime();
    };

    var setDistance = function() {
        if (config.time) {
            config.distance = config.time - getNow();
        }
    };

    var getDistance = function() {
        return config.distance;
    };

    var init = function(strDay) {
        config.time = new Date(strDay).getTime();
        setDistance();
    };

    return {
        init: init,
        getIniTime: getIniTime,
        getDistance: getDistance,
        setDistance: setDistance,
        getDate: getDate,
        getMin: getMin
    };
}());