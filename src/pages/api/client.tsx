import connect from '../../utils/database';

export default async (req, res) => {
  if (req.method === 'POST') {
    // eslint-disable-next-line object-curly-newline
    const { name, surname, email, phone } = req.body;
    if (!name || !surname || !email || !phone) {
      res.status(400).json({ error: 'Faltando campos no body' });
      return;
    }

    const { db } = await connect();
    const response = await db.collection('clients').insertOne({
      name,
      surname,
      email,
      phone,
      date: new Date(),
    });
    res.status(200).json(response.ops[0]);
  } else {
    res.status(400).json({ error: 'Metodo errado na request' });
  }
};
