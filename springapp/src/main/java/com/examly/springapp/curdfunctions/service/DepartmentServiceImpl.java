
package com.examly.springapp.curdfunctions.service;

import com.examly.springapp.curdfunctions.entity.Department;
import com.examly.springapp.curdfunctions.repository.Departmentrepository;

import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service


public class DepartmentServiceImpl implements DepartmentService {

	@Autowired
	private Departmentrepository departmentRepository;
    //public Department department;

	@Override
	public Department saveDepartment(Department department)
	{
		return departmentRepository.save(department);
	}

	@Override public List<Department> fetchDepartmentList()
	{
		return (List<Department>)
			departmentRepository.findAll();
	}

	@Override
	public Department updateDepartment(Department department, Long Id)
	{
		Department depDB= departmentRepository.findById(Id).get();

		if (Objects.nonNull(department.getName())&& !"".equalsIgnoreCase(department.getName())) 
        {
			depDB.setName(department.getName());
		}

		if (Objects.nonNull(department.getType())&& !"".equalsIgnoreCase(department.getType())) 
        {
			depDB.setType(department.getType());
		}
        
		return departmentRepository.save(depDB);

	}


	@Override
	public void deleteDepartmentById(Long id)
	{
		departmentRepository.deleteById(id);
	}
}
