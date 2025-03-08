package com.miapp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.miapp.backend.models.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
}
