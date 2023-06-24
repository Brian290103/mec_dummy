import connection from '@/config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getTestimony(req, res);
    case 'POST':
      return await addTestimony(req, res);
    default:
      return res.status(400).send('Method not allowed');
  }
}

const getTestimony = async (req, res) => {
  try {
    const query = 'SELECT * FROM testimonials ORDER BY id DESC';

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error querying the db: ', error);
        res.status(500).json({ message: 'Server Error' });
        return;
      }

      // Process the DB Result
      res.status(200).json(results);
    });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
