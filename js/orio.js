function trimURLHash() {
	const url = window.location.href;
	const hasHash = url.includes("#");

	if (hasHash) {
		history.replaceState(
			null,
			document.title,
			window.location.pathname + window.location.search
		);
	}
}
