import { INote, INoteCreate, INoteUpdate } from '../interfaces/note.interface';
import { storage } from '../storage';

/**
 * Retrieve all notes
 */
const findAll = async (): Promise<INote[]> => {
  return storage;
};

/**
 * Retrieve a single note by ID
 */
const findOneById = async (id: number): Promise<INote | null> => {
  const note = storage.find((item) => item.id === id);
  return note || null;
};

/**
 * Create a new note
 */
const create = async (note: INoteCreate): Promise<INote> => {
  const id = Date.now();
  const document: INote = {
    id,
    ...note,
  };

  storage.push(document);
  return document;
};

/**
 * Update a note by ID
 */
const update = async (id: number, note: INoteUpdate): Promise<INote | null> => {
  const index = storage.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  // Merge updated fields
  storage[index] = {
    ...storage[index],
    ...note,
  };

  return storage[index];
};

/**
 * Delete a note by ID
 */
const destroy = async (id: number): Promise<void> => {
  const index = storage.findIndex((item) => item.id === id);
  if (index !== -1) {
    storage.splice(index, 1);
  }

  return;
};

export const noteRepository = {
  findAll,
  findOneById,
  create,
  update,
  destroy,
};
