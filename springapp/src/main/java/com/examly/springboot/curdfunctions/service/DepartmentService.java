
package com.examly.springboot.curdfunctions.service;

import java.util.List;

import com.examly.springboot.curdfunctions.entity.Department;


public interface DepartmentService {

	Department saveDepartment(Department department);

	
	List<Department> fetchDepartmentList();

	
	Department updateDepartment(Department department,Long Id);

	
	void deleteDepartmentById(Long Id);
}
