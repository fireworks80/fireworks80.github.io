(function() {
    'use strict';
    var timeID = null;

    // @param {number}
    // deadline 일이 남았을 경우 마감임박을 표시 한다.            
    var displaySign = function(deadline) {
        // 화면 리로딩 하지 않을 경우 현재 시간 갱신안됨                
        time.setDistance();

        if (time.getDate() <= deadline) {
            document.querySelectorAll('.deadline-sign').forEach(function(el) {
                el.classList.add('is-active');
            });
            clearTimeout(timeID);
            timeId = null;
            return;
        }

        timeID = setTimeout(function() {
            displaySign(deadline);
        }, 1000);
    };

    // @param {string: 'm/dd/yyy hh:mm:ss'}
    // @param {number}
    var loadCountDown = function(theDay, deadline) {

        time.init(theDay);

        $('.counter').counter({
            initial: time.getDistance() > 0 ? time.getIniTime() : '0일00시00분00초',
            direction: 'down',
            format: "31일23시59분59초",
            interval: 1000
        });

        displaySign(deadline);
    };

    // d day, sign 이 보여질 날짜
    loadCountDown('8/20/2018 00:00:00', 7);
}());