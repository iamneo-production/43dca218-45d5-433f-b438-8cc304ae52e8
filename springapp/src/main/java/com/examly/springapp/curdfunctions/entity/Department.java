
package com.examly.springapp.curdfunctions.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	private String Name;
	private String Type;

	
	public Long getId() {
		return Id;
	}


	public void setId(Long id) {
		Id = id;
	}


	public String getName() {
		return Name;
	}


	public void setName(String name) {
		Name = name;
	}


	public String getType() {
		return Type;
	}


	public void setType(String type) {
		Type = type;
	}


	public byte[] getData() {
		return data;
	}


	public void setData(byte[] data) {
		this.data = data;
	}


	@Lob
    private byte[] data;
}
