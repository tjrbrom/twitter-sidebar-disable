
function main() {
    var sidebar = document.querySelectorAll('[data-testid="sidebarColumn"]')[0];
    if (sidebar) {
        var display = sidebar.style.display;
        if (display != "none") {
            sidebar.style.display = "none";
	}
    }
}

main();
