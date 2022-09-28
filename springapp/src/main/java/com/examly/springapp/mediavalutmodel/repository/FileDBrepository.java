package com.examly.springapp.mediavalutmodel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.mediavalutmodel.model.FileDB;

@Repository
public interface FileDBrepository extends JpaRepository<FileDB, String> {

}