export default class DateUtil {
    static convertTimeToMilisseconds(time: string): number {
        const timeArray = time.split(":");
        const minutes = parseInt(timeArray[0]);
        const seconds = parseInt(timeArray[1].split(".")[0]);
        const milliseconds = parseInt(timeArray[1].split(".")[1]);

        return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
    }

    static convertMilissecondsToTime(milisseconds: number): string {
        const minutes = Math.floor(milisseconds / 60000);
        const seconds = Math.floor((milisseconds % 60000) / 1000);
        const milliseconds = Math.floor((milisseconds % 60000) % 1000);

        return `${minutes}:${seconds}.${milliseconds}`;
    }
}
