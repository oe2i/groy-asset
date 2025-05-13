class NavToggle {
	constructor({
		toggleID,
		navID,
		headerID,
		openKey = "m",
		requireCtrl = true,
	}) {
		this.toggleBtn = document.getElementById(toggleID);
		this.navMenu = document.getElementById(navID);
		this.header = document.querySelector(headerID);
		this.openKey = openKey.toLowerCase();
		this.requireCtrl = requireCtrl;
		this.init();
	}

	init() {
		if (!this.toggleBtn || !this.navMenu || !this.header) return;

		// Toggle menu on button click
		this.toggleBtn.addEventListener("click", (e) => {
			this.toggleMenu();
			e.stopPropagation();
		});

		// Close menu when clicking outside
		document.addEventListener("click", (e) => {
			if (!this.header.contains(e.target)) {
				this.closeMenu();
			}
		});

		// Close on Escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				this.closeMenu();
			}

			// Open menu with a specific key combo
			if (
				e.key.toLowerCase() === this.openKey &&
				(!this.requireCtrl || e.ctrlKey)
			) {
				this.openMenu();
			}
		});
	}

	toggleMenu() {
		this.navMenu.classList.toggle("open");
	}

	openMenu() {
		this.navMenu.classList.add("open");
	}

	closeMenu() {
		this.navMenu.classList.remove("open");
	}
}

// ... Usage
new NavToggle({
	toggleID: "navToggle",
	navID: "navigation",
	headerID: "header",
	openKey: "m",
	requireCtrl: true,
});
