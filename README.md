# Wordpress React Plugin
This repository contains the code for a WordPress plugin that integrates React components into a WordPress website. The plugin is built using Docker, Apache, PHP, React, SCSS, MySQL, and WP.

## Getting Started
To use this plugin, you will need to have Docker installed on your computer. Once you have Docker installed, follow these steps:

- Clone this repository to your local machine.
- Navigate to the root directory of the repository in your terminal.
- Run ```docker-compose up -d``` to start the Docker containers.
- Visit ``http://localhost:80/wp-admin`` in your web browser to access the WordPress dashboard.
- Activate the "Todo React Plugin" in the plugins section of the dashboard.

## Copy code
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
This will start a development server that will automatically reload when you make changes to the plugin files.

## Conclusion
This project was a great learning experience for me. I learned how to build a WordPress plugin that integrates React components, how to use PHP to manipulate the WordPress CMS, and how to work with WP actions and hooks. I also learned about the configurations needed to set up a development Docker environment for WordPress.

## Screenshot:
![image](https://user-images.githubusercontent.com/93376408/226131225-d65b20a9-334b-42ae-a29e-5a2345642400.png)
