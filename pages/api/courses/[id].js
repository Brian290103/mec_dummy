import connection from '@/config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getCourse(req, res);
    case 'POST':
      return await addNews(req, res);
    default:
      return res.status(400).send('Method not allowed');
  }
}

const getCourse = async (req, res) => {
  const { id } = req.query;

  try {
    // const query = 'SELECT * FROM news ORDER BY id DESC';
    const query = `SELECT * FROM courses WHERE id = '${id}'`;

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
