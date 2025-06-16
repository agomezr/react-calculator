# React + TypeScript + Vite

A simple React calculator with TS and vite.

## Bootstrap 5 Integration

It also have a bootstrap integration that only loads styles, helpers and utils for the layout.

It needs the live sass compiler plugin in VSCode for get the bs-min.css that use the application.

In .vscode folder type the config for the plugin

```json
{
"liveSassCompile.settings.formats":[
    {
        "format": "compressed", 
        "extensionName": "-min.css", 
        //"savePath": "/public/css", 
    }
],
"liveSassCompile.settings.generateMap": false, 
"liveSassCompile.settings.watchOnLaunch": true
}
```

## Use

- Clone the repository of GitHub
- make npm install to get all the dependencies
- configure the plugin live sass compiler if need
- launch npm run dev to see the result
