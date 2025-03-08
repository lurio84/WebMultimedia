package com.miapp.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "notes")
public class Note {

    @Schema(hidden = true)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Schema(example = "Test Title")
    @Column(nullable = false)
    private String title;

    @Schema(hidden = true)
    @Column(nullable = false)
    private String content = "";

    @JsonBackReference
    @Schema(hidden = true)
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
