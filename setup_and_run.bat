@echo off

:: Step 1: Install Node.js dependencies
echo Installing Node.js dependencies...
yarn add express body-parser cors pg bcrypt jsonwebtoken dotenv

:: Step 2: Create .env file if it doesn't exist
if not exist .env (
  echo Creating .env file...
  echo DATABASE_URL=postgres://user:password@localhost:5432/login_db > .env
  echo JWT_SECRET=your_jwt_secret >> .env
)

:: Step 3: Install additional packages for the React app
yarn add cross-env react-scripts

:: Step 4: Run the build script
echo Building the React app...
npx cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts build

:: Step 5: Start the Node.js server
echo Starting the Node.js server...
node server.js

:: Step 6: Deploy to Vercel
echo Deploying to Vercel...
vercel login
vercel --prod
