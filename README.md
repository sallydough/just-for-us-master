# Garden Loft Smart Home App

Welcome to the Garden Loft Smart Home App! This app provides a user interface for managing smart home devices.

## Installation

Follow these steps to install and run the app on your local machine:

### Clone the repository

```
git clone https://github.com/whimsical-phoenix/gardenLoft.git
```

### Navigate to the project directory

```
cd garden-loft-app
```

### Install Dependencies

```
npm install
```

### Install server dependencies

```
cd server
npm install
```

### Start the React development

Make sure you are in the just-for-us folder

```
npm start
```

The app will be accessible at http://localhost:3000/.

### In a separate terminal, start the Node.js server using nodemon

```
nodemon Server/server.js
```

The server will be accessible at http://localhost:3001/.

### Prerequisites

- Node.js: Ensure that you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Folder Structure

src/: Contains the source code for the React application.
public/: Contains static assets and the HTML template.
server/: Contains the server-side code.

## Contributing

### Getting the Latest Changes

Before starting your work, make sure you have the latest changes from the main repository:

```bash
# Ensure you are on the main branch
git checkout main

# Fetch the latest changes
git pull origin main
```

### Creating a New Branch

Create a new branch for your feature or bug fix:

```bash
# Create a new branch
git checkout -b feature/your-feature
```

### Making Changes

Make your changes and commit them:

```bash
# Add your changes
git add .

# Commit your changes
git commit -m 'Add some feature'
```

### Fetching Updates

If there were changes in the main repository while you were working, fetch them to keep your branch up to date:

```bash
# Fetch updates from the main repository
git fetch origin main
```

### Handling Merge Conflicts

If there are conflicting changes, Git will inform you. Resolve the conflicts in your code and commit the changes:

```bash
# Resolve conflicts in your code
# (Edit the conflicted files to resolve conflicts)

# Add the resolved changes
git add .

# Commit the resolved changes
git commit -m 'Resolve merge conflicts'
```

### Pushing Changes

Push your changes to the repository:

```bash
# Push changes to your branch
git push origin feature/your-feature
```

## Opening a Pull Request

Open a pull request on GitHub:

1. Navigate to the repository on GitHub.
2. Switch to the branch containing your changes.
3. Click on "Pull Request" and follow the instructions.
   Other developers will review your changes, and once approved, your contribution will be merged into the main repository.

Thank you for contributing to Garden Loft Smart Home App!

## License

This project is licensed under the MIT License.
