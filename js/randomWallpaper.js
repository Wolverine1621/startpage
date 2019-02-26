var wallpaperNumber = Math.floor(Math.random() * 9)

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
    ["#eaa610", "#91b348", "#2c8b95", "#77b9a6", "#63672b"]
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
]

let root = document.documentElement
root.style.setProperty("--color1", colors[wallpaperNumber][0])
root.style.setProperty("--color2", colors[wallpaperNumber][1])
root.style.setProperty("--color3", colors[wallpaperNumber][2])
root.style.setProperty("--color4", colors[wallpaperNumber][3])
root.style.setProperty("--bordercolor", colors[wallpaperNumber][4])
root.style.setProperty("--othercolor", bw[wallpaperNumber])
