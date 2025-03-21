<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel + React</title>
    @viteReactRefresh
    @vite(['resources/js/main.jsx', 'resources/css/app.css'])
</head>
<body>
    <div id="app"></div>

    <script type="module">
        import RefreshRuntime from "http://localhost:5173/@react-refresh";
        RefreshRuntime.injectIntoGlobalHook(window);
        window.$RefreshReg$ = () => {};
        window.$RefreshSig$ = () => (type) => type;
        window.__vite_plugin_react_preamble_installed__ = true;
    </script>
</body>
</html>
