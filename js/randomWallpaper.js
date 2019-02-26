var wallpaperNumber = Math.floor(Math.random() * 15)

document.body.style.backgroundImage = "url('resources/" + wallpaperNumber + ".png')"

var colors = [
    ["#693A4E", "#4b5b85", "#9396b1", "#f4ac5a", "#171227"],
    ["#726554", "#303e47", "#8e93a2", "#c98256", "#d3cbcc"],
    ["#7f5b77", "#f1bab8", "#b27f95", "#5b3b5f", "#412b52"],
    ["#482d57", "#714b76", "#c265a9", "#eaa2e1", "#3a2044"],
    ["#feeb9f", "#cec8d8", "#fad78b", "#f5eee7", "#999295"],
    ["#f38bd3", "#8f6bb3", "#1d8874", "#81e699", "#4e427e"],
    ["#820a01", "#c6370c", "#866a4a", "#adc7aa", "#411808"],
    ["#7d58d2", "#614cb8", "#d76fb8", "#9d4b86", "#52336a"],
    ["#eaa610", "#91b348", "#2c8b95", "#77b9a6", "#63672b"],
    ["#a35229", "#523a33", "#bdc2b9", "#8a857c", "1d1f26"],
    ["#f9267b", "#7f4d7e", "#fbb487", "#13f1dc", " #4a3e6e"],
    ["#9dabdf", "#cdb1d3", "#4b633c", "#f5ebe1", "#e0d2e1"],
    ["#c74369", "#782c46", "#df83b0", "#575a9a", "#f3d1eb"],
    ["#8c3ddb", "#499ee5", "#72befe", "#47b372", "#8c3ddb"],
    ["#f1d687", "#d45d44", "#4c6ea3", "#80b3b3", "#493a4d"]
]

var bw = [
    "white",
    "white",
    "white",
    "white",
    "black",
    "black",
    "white",
    "black",
    "black",
    "black",
    "white",
    "black",
    "white",
    "white",
    "white"
]

let root = document.documentElement
root.style.setProperty("--color1", colors[wallpaperNumber][0])
root.style.setProperty("--color2", colors[wallpaperNumber][1])
root.style.setProperty("--color3", colors[wallpaperNumber][2])
root.style.setProperty("--color4", colors[wallpaperNumber][3])
root.style.setProperty("--bordercolor", colors[wallpaperNumber][4])
root.style.setProperty("--othercolor", bw[wallpaperNumber])
