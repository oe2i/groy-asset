(function () {
	const key = "orioTheme";
	const themes = ["light", "dark", "orio"];
	let theme = localStorage.getItem(key);

	if (!theme || !themes.includes(theme)) {
		theme = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	document.documentElement.classList.add(theme);
})();
