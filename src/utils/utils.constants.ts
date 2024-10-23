const MILLISECONDS_IN_SECOND = 1000;

const SECONDS_IN_MINUTE = 60;

const MILLISECONDS_IN_MINTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;

const getMinuteInMilliseconds = (minutes: number) => {
    return minutes * MILLISECONDS_IN_MINTE;
}

export const Times = {
    MILLISECONDS_IN_MINTE,
    MILLISECONDS_IN_SECOND,
    SECONDS_IN_MINUTE,
    getMinuteInMilliseconds,
}
