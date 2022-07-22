var available_icons = ["woozy_face.svg", "thinking.svg", "nerd.svg", "moyai.svg", "pleading_face.svg", "smirk.svg", "cowboy.svg", "sunglasses.svg"];

var ic = document.getElementById("ic")
ic.href = "res/"+available_icons[Math.round(Math.random() * (available_icons.length-1))]