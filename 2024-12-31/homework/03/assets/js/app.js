import Backup from "./backup.js";
import Kitten from "./kitten.js";
const stringBackup = new Backup("User Data", "John Doe");
stringBackup.displayBackup();
const numberBackup = new Backup("User Age", 30);
numberBackup.displayBackup();
const booleanBackup = new Backup("did u right", true);
booleanBackup.displayBackup();
const objectBackup = new Backup("today", new Date);
objectBackup.displayBackup();
const kitten = new Kitten("Hathatol", 8, "orange");
const kittenBackup = new Backup("User Profile", kitten);
kittenBackup.displayBackup();
