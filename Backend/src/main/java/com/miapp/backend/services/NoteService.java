package com.miapp.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.miapp.backend.models.Note;
import com.miapp.backend.models.User;
import com.miapp.backend.repository.NoteRepository;
import com.miapp.backend.repository.UserRepository;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;

    public Optional<Note> findNoteById(Long id) {
        return noteRepository.findById(id);
    }

    public Note createNoteWithUserId(Long userId, Note note) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        note.setUser(user);
        return noteRepository.save(note);
    }

    public void deleteNoteById(Long id) {
        noteRepository.deleteById(id);
    }

    public List<Note> findNotesByUserId(Long userId) {
        return noteRepository.findByUserId(userId);
    }
}
