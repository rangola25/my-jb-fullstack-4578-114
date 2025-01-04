import Color from "./colors.js";
function getColorItem(color) {
    switch (color) {
        case Color.RED:
            return "Apple";
        case Color.BLACK:
            return "Dark";
        case Color.BLUE:
            return "Sky";
        case Color.WHITE:
            return "Snow";
        case Color.YELLOW:
            return "Banana";
        default:
            return "Unknown color";
    }
}
console.log(getColorItem(Color.BLUE));
console.log(getColorItem(Color.WHITE));
console.log(getColorItem(Color.BLACK));
