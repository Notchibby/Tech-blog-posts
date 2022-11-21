# Tech-blog-posts [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Introduction
This project aims to promote and reinforce our understanding of creating a functional server using the mvc model. This includes how to use a model layer to modify an object in response to Restful API calls. The controller to set up the routes that modifys the model layer depending on the users intention. The view layer to render the user interface for viewing.  This project models a blog server in regards to how the blogs contails different comments which are from other users. 

## Table of Contents

- [Installation](#installation)
- [Instructions](#instructions)
- [Screenshots](#Screenshots)
- [Dependencies](#Dependencies)
- [Deployment](#Deployment)
- [License](#license)

## Installation
Installation on a local device would require a setup of the dotenv file.
The database can be seeded using the command 'node seeds/index.js' or 'npm run seed' in the terminal.
The app can be started by typing in the command 'npm run watch' or 'node server.js' in the terminal.



## Screenshots
![screenshot-of-the-application-with-a-call-to-get-all-products](https://github.com/Notchibby/E-commerce-ORM-server/blob/main/assets/images/get_all_products.png)

![screenshot-of-the-application-with-a-call-to-product-NO-4](https://github.com/Notchibby/E-commerce-ORM-server/blob/main/assets/images/get_product_4.png)

![screenshot-of-the-application-with-a-call-to-delete-NO-4](https://github.com/Notchibby/E-commerce-ORM-server/blob/main/assets/images/Delete_product_4.png)

![screenshot-of-the-application-with-a-call-to-product-NO-4-after-deleting-product](https://github.com/Notchibby/E-commerce-ORM-server/blob/main/assets/images/Get_product_4_after_delete.png)


## Dependencies

 - dotenv: "^8.2.0",
 - bcrypt: "^5.0.0",
 - express: "^4.17.1",
 - mysql2: "^2.1.0",
 - nodemon: "^2.0.3",
 - sequelize: "^5.21.7",
 - express-handlebars: "^5.2.0",
 - express-session: "^1.17.1"
 - connect-session-sequelize: "^7.0.4"


## Questions

My other applications can be viewed at my github repository located at https://github.com/notchibby.

## Deployment

This application has been deployed at  

## License
Licenced under the [GNU GPLv3](https://www.gnu.org/licenses/agpl-3.0) license.
