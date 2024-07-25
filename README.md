# Prevent Food Wastage App

This app aims to prevent food wastage by connecting individuals and businesses with surplus food to those in need. By facilitating the redistribution of excess food, we can reduce food waste and contribute to a more sustainable future.

## Features

- User registration and login
- Donation submission for individuals and businesses
- Search and browse available food donations
- Request food donations
- Real-time notifications for donation updates
- Rating and feedback system for donors and recipients

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker

## Getting Started

To run this app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/prevent-food-wastage-app.git`
2. Install dependencies: `npm install`
3. Set up the environment variables: Create a `.env` file and add the necessary variables.
4. Start the server: `npm start`
5. Access the app in your browser at `http://localhost:3000`

## Docker Deployment

To deploy the app using Docker, follow these steps:

1. Install Docker on your machine.
2. Build the Docker image: `docker build -t prevent-food-wastage-app .`
3. Run the Docker container: `docker run -p 3000:3000 -d prevent-food-wastage-app`
4. Access the app in your browser at `http://localhost:3000`

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your commit message'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
