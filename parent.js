// var data = console.log(localStorage.getItem("lastname"));

// Hardcoded data array:
var data = ["Dishes task in progress.", "Dishes task completed.",
    "Laundry task in progress.", "Mowing task in progress.",
    "Laundry task completed."
];

window.onload = function() {
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        var node = document.createElement("DIV");
        var textnode = document.createTextNode(data[i]);
        node.className = "row tasks border border-success";
        if (data[i].includes("completed")) { // ecma 6 only
            node.className = "row tasks border border-success completed";
        } else { // in progress
            node.className = "row tasks border border-warning in-progress";
        }
        node.appendChild(textnode);
        document.getElementById("content").appendChild(node);
    }
}