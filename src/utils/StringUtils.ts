export default class StringUtils {
    static capitalize(string: string): string {
        return (
            string.toLowerCase().charAt(0).toUpperCase() +
            string.toLowerCase().slice(1)
        );
    }

    static capitalizePilotName(name: string): string {
        const nameArray = name.split(".");
        const firstName = this.capitalize(nameArray[0]);
        const lastName = this.capitalize(nameArray[1]);

        return `${firstName}. ${lastName}`;
    }
}
