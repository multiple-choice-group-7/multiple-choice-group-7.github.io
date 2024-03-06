// Format thời gian: h:mm:ss
export function formatTime(seconds) {
    // multiply the seconds by 1000 to convert to milliseconds
    const time = new Date(seconds * 1000);
    return time.toISOString().substring(12, 19);
    // const minutes = Math.floor(seconds / 60);
    // const remainingSeconds = seconds % 60;
    // return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export function formatDateTimeCurrent() {
    const dateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    // Monday, March 4, 2024 at 8:38 PM
    const dateStr = dateTime.toLocaleDateString('vn-VN', options);

    // Format time: Monday, 1 January 2022, 3:00 PM
    const splitTime = dateStr.split(', ');
    const dateMonths = splitTime[1].split(' ');
    const yearTime = splitTime[2].split(' ');
    return splitTime[0] + ', ' + dateMonths[1] + ' ' + dateMonths[0] + ' ' + yearTime[0] + ', ' + yearTime[2] + ' ' + yearTime[3];
}