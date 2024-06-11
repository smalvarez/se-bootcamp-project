@echo off

:: Step 1: Remove existing node_modules and package-lock.json
echo Removing existing node_modules and package-lock.json...
if exist node_modules (
  rd /s /q node_modules
)
if exist package-lock.json (
  del package-lock.json
)

:: Step 2: Install Node.js dependencies
echo Installing Node.js dependencies...
npm install express body-parser cors pg bcrypt jsonwebtoken dotenv aws-sdk nock mock-aws-s3@4.0.2

:: Step 3: Create .env file if it doesn't exist
if not exist .env (
  echo Creating .env file...
  echo DATABASE_URL=postgres://user:password@localhost:5432/login_db > .env
  echo JWT_SECRET=your_jwt_secret >> .env
)

:: Step 4: Install additional packages for the React app
npm install cross-env react-scripts

:: Step 5: Run the build script
echo Building the React app...
npx cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts build

:: Step 6: Deploy to Vercel
echo Deploying to Vercel...
vercel login
vercel --prod
