MercuryJC Full Stack Web Portfolio
Overview:
This project is a web application featuring a commenting system, an image gallery, and an emailing system. It utilizes MongoDB for the database, ExpressJS for the server-side framework, ReactJS for the frontend, and NodeJS for the backend. Real-time communication is facilitated by PusherJS, and emails are sent using Node Mailer.

Features:

Commenting System:
Users can comment on posts or articles.
Comments are stored in the MongoDB database.
Real-time updates are provided using PusherJS, ensuring seamless interaction.
Features like editing and deleting comments are available.

Image Gallery:
Users can upload, view, and manage images in a gallery format.
Images are stored in the MongoDB database.
Gallery layout is designed using ReactJS components for a smooth user experience.
Options for adding captions, arranging images, and deleting images are included.

Emailing System:
Users can send emails directly from the application.
Node Mailer is integrated to handle email sending functionality.
Emails can be sent to individual users or mailing lists.
Customizable email templates and formatting options are available.

Technologies Used:
MongoDB: A NoSQL database used for storing data such as comments and images.
ExpressJS: A Node.js web application framework utilized for building the server-side of the application.
ReactJS: A JavaScript library used for building user interfaces, employed for creating interactive and dynamic frontend components.

NodeJS: A JavaScript runtime environment used for executing server-side code.
PusherJS: A technology used for enabling real-time communication, employed for updating comments in real-time.
Node Mailer: A module for Node.js applications used for sending emails.

Installation:
Clone the repository from GitHub:
bash
Copy code
git clone https://github.com/yourusername/yourproject.git
Navigate to the project directory:
bash
Copy code
cd yourproject
Install dependencies:
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following variables:
makefile
Copy code
MONGO_URI=your_mongodb_uri
PUSH_KEY=your_pusher_key
PUSH_CLUSTER=your_pusher_cluster
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
Run the application:

sql
Copy code
npm start
Usage:
Access the application through your web browser at http://localhost:3000.
Navigate through the different features: commenting system, image gallery, and emailing system.
Interact with the features according to your requirements.
Enjoy the seamless experience of real-time updates and email functionalities.
Contributors:
Your Name
License:
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements:
Special thanks to Pusher and Node Mailer for their amazing technologies used in this project.