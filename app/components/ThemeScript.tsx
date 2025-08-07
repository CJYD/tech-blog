export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                // Default to light, explicitly remove dark class
                document.documentElement.classList.remove('dark');
                // If no theme is saved, save light as default
                if (!theme) {
                  localStorage.setItem('theme', 'light');
                }
              }
            } catch (e) {
              // Default to light mode on error
              document.documentElement.classList.remove('dark');
            }
          })();
        `,
      }}
    />
  );
}