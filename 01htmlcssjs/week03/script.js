function add_node() {
    var para = document.createElement("p");
    var node = document.createTextNode("New node.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    var child = document.getElementById("p1");
    element.insertBefore(para, child);
}

function delete_node() {
    var parent = document.getElementById("div1");
    var child = document.getElementById("p2");
    parent.removeChild(child);
}

