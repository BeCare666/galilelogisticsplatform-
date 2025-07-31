$(function () {
    function timer(settings) {
        var config = {
            endDate: '2025-10-30 23:59', // 🟢 Mise à jour ici
            timeZone: 'Europe/Stockholm',
            hours: $('#hours'),
            minutes: $('#minutes'),
            seconds: $('#seconds'),
            newSubMessage: 'and should be back online in a few minutes...'
        };


        function prependZero(number) {
            return number < 10 ? '0' + number : number;
        }

        $.extend(true, config, settings || {});
        var currentTime = moment();
        var endDate = moment.tz(config.endDate, config.timeZone);
        var diffTime = endDate.valueOf() - currentTime.valueOf();
        var duration = moment.duration(diffTime, 'milliseconds');
        var days = Math.floor(duration.asDays()); // ✅ CORRECTION
        var interval = 1000;
        var subMessage = $('.sub-message');
        var clock = $('.clock');

        if (diffTime < 0) {
            endEvent(subMessage, config.newSubMessage, clock);
            return;
        }

        if (days > 0) {
            $('#days').text(prependZero(days));
            $('.days').css('display', 'inline-block');
        }

        var intervalID = setInterval(function () {
            duration = moment.duration(duration - interval, 'milliseconds');
            var hours = duration.hours(),
                minutes = duration.minutes(),
                seconds = duration.seconds();
            days = Math.floor(duration.asDays()); // ✅ CORRECTION

            if (hours <= 0 && minutes <= 0 && seconds <= 0 && days <= 0) {
                clearInterval(intervalID);
                endEvent(subMessage, config.newSubMessage, clock);
                window.location.reload();
            }

            if (days === 0) {
                $('.days').hide();
            }

            $('#days').text(prependZero(days));
            config.hours.text(prependZero(hours));
            config.minutes.text(prependZero(minutes));
            config.seconds.text(prependZero(seconds));
        }, interval);
    }

    function endEvent($el, newText, hideEl) {
        $el.text(newText);
        hideEl.hide();
    }

    timer();
});

// Gestion du modal
const modal = document.querySelector('.modal');
const openButton = document.getElementById('open-modal');
const closeButton = document.querySelector('.icon-button');
const declineButton = document.querySelector('.button.is-primary');

openButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
declineButton.addEventListener('click', closeModal);