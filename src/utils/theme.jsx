export function ThemeToggle() {
  function toggle() {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-800 dark:text-white"
    >
      Alternar tema
    </button>
  );
}
