class NavToggle {
	constructor({ toggleID, navID, headerID }) {
		this.toggle = document.getElementById(toggleID);
		this.nav = document.getElementById(navID);
		this.header = document.querySelector(headerID);
		this.init();
	}

	init() {
		if (!this.toggle || !this.nav || !this.header) return;

		// Toggle menu on button click
		this.toggle.addEventListener("click", (e) => {
			this.nav.classList.toggle("open");
			e.stopPropagation();
		});

		// Close menu when clicking outside
		document.addEventListener("click", (e) => {
			if (!this.header.contains(e.target)) {
				this.nav.classList.remove("open");
			}
		});

		// Optional: close on Escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				this.nav.classList.remove("open");
			}
		});
	}
}

// ...Usage
new NavToggle({
	toggleID: "navToggle",
	navID: "navigation",
	headerID: "header",
});
