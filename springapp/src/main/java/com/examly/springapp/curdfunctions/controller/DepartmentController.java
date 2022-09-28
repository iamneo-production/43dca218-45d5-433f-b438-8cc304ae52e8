
package com.examly.springapp.curdfunctions.controller;

import com.examly.springapp.curdfunctions.entity.Department;
import com.examly.springapp.curdfunctions.service.DepartmentService;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController

public class DepartmentController {

    @Autowired
    public Department department;


	@Autowired private DepartmentService departmentService;

	@PostMapping("/departments")
	public Department saveDepartment(@RequestBody Department Department)
	{
		return departmentService.saveDepartment(Department);
	}


	@GetMapping("/departments")
	public List<Department> fetchDepartmentList()
	{
		return departmentService.fetchDepartmentList();
	}

	@PutMapping("/departments/{id}")
	public Department
	updateDepartment(@RequestBody Department department,@PathVariable("id") Long departmentId)
	{
		return departmentService.updateDepartment(department,departmentId);
	}

	@DeleteMapping("/departments/{id}")
	public String deleteDepartmentById(@PathVariable("id")Long Id)
	{
		departmentService.deleteDepartmentById(Id);
		return "Deleted Successfully";
	}
}

