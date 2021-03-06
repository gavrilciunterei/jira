import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);
    case 'POST':
      return postEntries(req, res);
    default:
      return res.status(200).json({ message: 'Endpoint no existe' });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  try {
    await db.connect();

    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    res.status(200).json(entries);
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: 'Error al obtener las entradas' });
  }
};

const postEntries = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = '' } = req.body;

  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();

    res.status(200).json(newEntry);
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: 'Error al crear la entrada' });
  }
};
