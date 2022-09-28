package com.examly.springboot.mediavalutmodel.repository;

import com.examly.springboot.mediavalutmodel.model.FileDB;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileDBrepository extends JpaRepository<FileDB, String> {

}