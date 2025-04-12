import { INote, INoteCreate, INoteUpdate } from '../interfaces/note.interface';
import { noteRepository } from '../repositories/note.repository';

// Retrive list of all resources
const findAll = async (): Promise<INote[] | []> => {
  return noteRepository.findAll();
};

// Retrive a specific resource
const findOneById = async (id: number): Promise<INote | null> => {
  return noteRepository.findOneById(id);
};

// Create a new resource
const create = async (note: INoteCreate): Promise<INote> => {
  return noteRepository.create(note);
};

// Update a specific resource
const update = async (id: number, note: INoteUpdate): Promise<INote | null> => {
  const existingNote = await noteRepository.findOneById(id);
  if (!existingNote) {
    return null;
  }
  return noteRepository.update(id, note);
};

// Delete a specific resource
const destroy = async (id: number): Promise<void> => {
  noteRepository.destroy(id);
};

export const noteService = {
  findAll,
  findOneById,
  create,
  update,
  destroy,
};
