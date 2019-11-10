This project is an interactive, browser-based tool for exploring endpoints on the Smartcar api. 
This tool will accept parameters describing an endpoint (values such as url, method, headers, body etc)
and produce an html component for sending requests to that endpoint.

## Installation Steps

# 1. Unzip the project folder.
# 2. Check the Node installation on your machine.
# 3. Move to the project folder where package.json resides.
# 4. Perform npm install to install all the required dependency packages.
# 5. Once all done, Run npm start command to run the application.
# 6. Application will be running on port 3000. Click http://localhost:3000.

## Folder Structure

After creation, your project should look like this:

```
smartcar-frontend-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
	api/*
	images/*
	components/*
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Available Folders

In the project directory, you can see:

### `components/ folder`

This folder contains all the major components used in the application
1. Explorer Component - Contains the main expandable list of the Rest APIs and the send request button.
2. Dynamic Body - Contains the dynamic form generation of the HTML5 inputs for the request body parameters.
3. Config Data - Contains the constant JSON to set the API configuration data.
4. Smartcar-frontend - Landing Page of the application.

### `api/ folder`

This folder contains a file for actually calling the rest API to get data from server given upon configuration.

### `images/ folder`

This folder contains all type of images used in the application including logo of the company.


## Configure Rest API endpoints data

There is one file in src/components/ConfigData/APIConfig.js
In this file you can add your array of json with required valid json configuration.