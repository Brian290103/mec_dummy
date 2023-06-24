import connection from '@/config/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // return res.status(200).json({ username, password });
    try {
      const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'  LIMIT 1;`;

      connection.query(query, (error, results) => {
        if (error) {
          console.error('Error querying the db: ', error);
          res.status(500).json({ message: 'Server Error' });
          return;
        } // Check if the user exists
        if (results.length === 0) {
          res.status(401).json({ message: 'Invalid credentials' });
          return;
        } // Authentication successful
        res.status(200).json({ message: 'Login successful' });
      });
    } catch (error) {
      console.error('Error: ', error);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    return res.status(400).send('Method not allowed');
  }
}
