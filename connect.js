const { Client } = require("pg");
const fs = require("fs");

// Connection details for the initial connection
const initialClient = new Client({
  user: "postgres",
  host: "localhost",
  password: "dbpassword!",
  port: 5432,
});

initialClient.connect();

const dbName = "login_db";
const sqlFilePath = "login_table.sql";

// Function to execute SQL file
function executeSqlFile(client, filePath) {
  const sql = fs.readFileSync(filePath).toString();
  client.query(sql, (err, res) => {
    if (err) {
      console.error("Error executing SQL file: ", err.stack);
    } else {
      console.log("SQL file executed successfully");
    }
    client.end((endErr) => {
      if (endErr) {
        console.error("Error closing connection: ", endErr.stack);
      }
      // Exit the process once the SQL execution is complete and the connection is closed
      process.exit();
    });
  });
}

// Check if the database exists and create it if it doesn't
initialClient.query(
  `SELECT 1 FROM pg_database WHERE datname='${dbName}'`,
  (err, res) => {
    if (err) {
      console.error("Error checking database existence: ", err.stack);
      initialClient.end(() => process.exit());
      return;
    }

    if (res.rows.length === 0) {
      // Database does not exist, create it
      initialClient.query(
        `CREATE DATABASE ${dbName}`,
        (createErr, createRes) => {
          if (createErr) {
            console.error("Error creating database: ", createErr.stack);
            initialClient.end(() => process.exit());
          } else {
            console.log(`Database ${dbName} created successfully`);

            // Connect to the new database and execute the SQL file
            const newClient = new Client({
              user: "postgres",
              host: "localhost",
              password: "dbpassword!",
              port: 5432,
              database: dbName,
            });

            newClient.connect((connectErr) => {
              if (connectErr) {
                console.error(
                  "Error connecting to new database: ",
                  connectErr.stack
                );
                process.exit();
              } else {
                executeSqlFile(newClient, sqlFilePath);
              }
            });
          }
        }
      );
    } else {
      console.log(`Database ${dbName} already exists`);

      // Connect to the existing database and execute the SQL file
      const existingClient = new Client({
        user: "postgres",
        host: "localhost",
        password: "dbpassword!",
        port: 5432,
        database: dbName,
      });

      existingClient.connect((connectErr) => {
        if (connectErr) {
          console.error(
            "Error connecting to existing database: ",
            connectErr.stack
          );
          process.exit();
        } else {
          executeSqlFile(existingClient, sqlFilePath);
        }
      });

      initialClient.end();
    }
  }
);
