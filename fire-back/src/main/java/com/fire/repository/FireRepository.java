package com.fire.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fire.entity.Fire;

@Repository
public interface FireRepository extends CrudRepository<Fire, Long> {
	
	
	@Query("select count(f.city) as total, f.city from  Fire f group by f.city")
	public List<Object> getCityFire();

	@Query("select count(f.zipcode) as total, f.zipcode from Fire f group by f.zipcode")
	public List<Object> getZipCodeFire(); 
	
	@Query("from Fire f where f.streetandnumber like %?1%")
	public List<Fire> getBystreetandnumber(String streetandnumber); 

	@Query("from Fire f where f.zipcode like %?1%")
	public List<Fire> getByZipcode(String zipcode); 

}
