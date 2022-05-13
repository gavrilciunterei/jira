import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getEntry(req, res);
    case 'PUT':
      return updateEntries(req, res);
    default:
      return res.status(400).json({ message: 'Endpoint no existe' });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id } = req.query;
    await db.connect();
    const entry = await Entry.findById(id);
    await db.disconnect();

    if (!entry) {
      return res.status(404).json({ message: 'Entrada no encontrada' });
    }

    return res.status(200).json(entry);
  } catch (error) {
    return res.status(404).json({ message: 'Entrada no encontrada' });
    await db.disconnect();
  }
};

const updateEntries = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id } = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById(id);
    if (!entryToUpdate) {
      await db.disconnect();
      return res.status(404).json({ message: 'Entrada no encontrada' });
    }
    const {
      description = entryToUpdate.description,
      status = entryToUpdate.status,
    } = req.body;

    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();
    return res.status(200).json(updatedEntry!);
  } catch (error) {
    await db.disconnect();
    return res.status(500).json({ message: 'Error al actualizar la entrada' });
  }
};
