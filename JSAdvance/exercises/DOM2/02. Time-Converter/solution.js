function attachEventsListeners() {
    const inputElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    document.getElementById('daysBtn').addEventListener('click', () => convert('days'));
    document.getElementById('hoursBtn').addEventListener('click', () => convert('hours'));
    document.getElementById('minutesBtn').addEventListener('click', () => convert('minutes'));
    document.getElementById('secondsBtn').addEventListener('click', () => convert('seconds'));

    
    function convert(unit) {
        const value = Number(inputElements[unit].value);
        const days = value / ratios[unit]; // normalize to days
        for (const key in inputElements) {
            inputElements[key].value = days * ratios[key];
        }
    }
}
