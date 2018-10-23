package com.fire.entity;

import javax.persistence.Entity;


public class Graph {
	
	private Integer total;
	
	private String name;

	public Graph(Object total, Object name) {
		super();
		this.total = Integer.parseInt(total.toString()) ;
		this.name = (String) name;
	}
	
	public Graph(Integer total, String name) {
		super();
		this.total = total;
		this.name = name;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	} 

	
}
