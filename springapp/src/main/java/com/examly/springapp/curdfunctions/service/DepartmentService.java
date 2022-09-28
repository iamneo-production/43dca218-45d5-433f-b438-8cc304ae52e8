
package com.examly.springapp.curdfunctions.service;

import com.examly.springapp.curdfunctions.entity.Department;

import java.util.List;


public interface DepartmentService {

	Department saveDepartment(Department department);

	
	List<Department> fetchDepartmentList();

	
	Department updateDepartment(Department department,Long Id);

	
	void deleteDepartmentById(Long Id);
}
