export default class Backup<T> {
    subject: string;
    value: T;

    constructor(subject: string, value: T) {
        this.subject = subject;
        this.value = value;
    }

    displayBackup(): void {
        const valueStr = typeof this.value === 'object' ? JSON.stringify(this.value, null, 2) : this.value.toString();
        console.log(`Subject: ${this.subject}, Value: ${valueStr}`);
    }
}