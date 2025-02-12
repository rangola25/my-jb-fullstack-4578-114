export default class Backup {
    subject;
    value;
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    displayBackup() {
        const valueStr = typeof this.value === 'object' ? JSON.stringify(this.value, null, 2) : this.value.toString();
        console.log(`Subject: ${this.subject}, Value: ${valueStr}`);
    }
}
