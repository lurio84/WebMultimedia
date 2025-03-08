package com.miapp.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miapp.backend.models.Note;
import com.miapp.backend.repository.NoteRepository;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    public Optional<Note> findNoteById(Long id) {
        return noteRepository.findById(id);
    }

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    public void deleteNoteById(Long id) {
        noteRepository.deleteById(id);
    }
}
