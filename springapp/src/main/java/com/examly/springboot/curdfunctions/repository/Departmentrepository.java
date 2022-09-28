
package com.examly.springboot.curdfunctions.repository;

import com.examly.springboot.curdfunctions.entity.Department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Annotation
@Repository

// Interface
public interface Departmentrepository extends JpaRepository<Department, Long> {
    
}
