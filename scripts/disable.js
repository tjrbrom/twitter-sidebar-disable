
function main() {
	var sidebar = document.getElementsByClassName("css-1dbjc4n r-aqfbo4 r-zso239 r-1hycxz")[0];
	if (sidebar) {
        var display = sidebar.style.display;
        if (display != "none") {
            sidebar.style.display = "none";
		}
	}
}

main();
