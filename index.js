let globalConsole;

try {
  globalConsole = window.console;
} catch (error) {}

if (!globalConsole) {
  try {
    globalConsole = global.console;
  } catch (error) {}
}

if (globalConsole && typeof globalConsole.log === 'function') {
  globalConsole.lol = (...args) => {
    console.log('😂', ...args);
  }
}
