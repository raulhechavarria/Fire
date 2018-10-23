package com.fire.service;

import java.util.List;

import com.fire.entity.Fire;
import com.fire.entity.Graph;

public interface FireService {

	List<Fire> getFire();

	Fire saveFire(Fire fire);

	List<Graph> getCityFire();

	List<Graph> getZipCodeFire();

	Fire getFireByID(Long id);

	List<Fire> getBystreetandnumber(String streetandnumber);

	List<Fire> getByZipcode(String zipcode);


}
