document.addEventListener('DOMContentLoaded', attachEventsListeners)

function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    buttons.forEach(button => {
        button.addEventListener('click', convertTime)
    })

    function convertTime(event) {
        let buttonId = event.target.id;
        const inputDays = document.getElementById('days');
        const inputHr = document.getElementById('hours');
        const inputMn = document.getElementById('minutes');
        const inputSc = document.getElementById('seconds');

        let days, hours, minutes, seconds;

        switch (buttonId) {
            case 'daysBtn':
                days = Number(inputDays.value);
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;
            case 'hoursBtn':
                hours = Number(inputHr.value);    
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;

            case 'minutesBtn':
                minutes = Number(inputMn.value);
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
                break;
            case 'secondsBtn':
                seconds = Number(inputSc.value);
                minutes = seconds / 60;
                hours = seconds / 60;
                days = hours / 24;
                break;
        }

        inputDays.value = days;
        inputHr.value = hours;
        inputMn.value = minutes;
        inputSc.value = seconds;
    }
}