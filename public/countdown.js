
const countdownTo = moment.tz("2020-05-18T20:55:00", "Europe/Amsterdam");
const userTimezone = moment.tz.guess(true);



window.onload = function() {
    const countdown = document.querySelector("#countdown");
    setInterval(function () {
        const duration = moment.duration(countdownTo.diff(moment()));
        countdown.textContent = `${Math.floor(duration.asDays())} days ${duration.hours()} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`;
    }, 1000)
};
