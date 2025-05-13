class Theme {
	constructor({
		key = "orioTheme",
		toggleID = "#themeToggle",
		keyboard = { key: "t", ctrl: true },
		themes,
	} = {}) {
		this.root = document.documentElement;
		this.key = key;
		this.themes = themes || ["light", "dark", "orio"];
		this.toggleID = toggleID;
		this.shortcut = keyboard;
		this.theme = this.getInitialTheme(); // Still needed for toggling
		this.bind();
		this.finishInit(); // remove not-ready
	}

	getInitialTheme() {
		const saved = localStorage.getItem(this.key);
		if (saved && this.themes.includes(saved)) return saved;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

	set(theme) {
		this.themes.forEach((t) => this.root.classList.remove(t));
		this.root.classList.add(theme);
		localStorage.setItem(this.key, theme);
		this.theme = theme;
	}

	toggle() {
		const current = this.themes.indexOf(this.theme);
		const next = (current + 1) % this.themes.length;
		this.set(this.themes[next]);
		return this.theme;
	}

	bind() {
		const btn = document.querySelector(this.toggleID);
		if (btn) {
			btn.addEventListener("click", (e) => {
				if (btn.tagName.toLowerCase() === "a") {
					e.preventDefault(); // Prevent jumping
				}
				if (typeof trimURLHash === "function") {
					trimURLHash(); // Only call if defined
				}
				this.toggle();
			});
		}

		document.addEventListener("keydown", (e) => {
			if (
				e.key.toLowerCase() === this.shortcut.key.toLowerCase() &&
				(!this.shortcut.ctrl || e.ctrlKey)
			) {
				this.toggle();
			}
		});
	}

	finishInit() {
		window.addEventListener("DOMContentLoaded", () => {
			this.root.classList.remove("not-ready");
		});
	}
}

// Initialize theme toggle
const themeToggle = new Theme({
	toggleID: "#themeToggle",
	keyboard: { key: "t", ctrl: true },
	// themes: ['light', 'dark']
});
