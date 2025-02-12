import Backup from "./backup.js";
import Kitten from "./kitten.js";

const stringBackup = new Backup<string>("User Data", "John Doe");
stringBackup.displayBackup();

const numberBackup = new Backup<number>("User Age", 30);
numberBackup.displayBackup(); 

const booleanBackup = new Backup<boolean>("did u right", true);
booleanBackup.displayBackup(); 

const objectBackup = new Backup<Date>("today", new Date);
objectBackup.displayBackup();

const kitten = new Kitten("Hathatol", 8, "orange");
const kittenBackup = new Backup<Kitten>("User Profile", kitten);
kittenBackup.displayBackup();