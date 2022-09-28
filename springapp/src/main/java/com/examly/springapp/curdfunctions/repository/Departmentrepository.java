
package com.examly.springapp.curdfunctions.repository;

import com.examly.springapp.curdfunctions.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Annotation
@Repository

// Interface
public interface Departmentrepository extends JpaRepository<Department, Long> {
    
}
