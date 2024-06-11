exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { email, password } = JSON.parse(event.body);

  // Simulate user signup logic
  // In a real-world scenario, you'd interact with a database here
  if (!email || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email and password are required" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Signup successful" }),
  };
};
