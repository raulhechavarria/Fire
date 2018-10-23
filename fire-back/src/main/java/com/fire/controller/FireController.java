package com.fire.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.fire.entity.Fire;
import com.fire.entity.Graph;
import com.fire.service.FireService;

@RestController
@CrossOrigin
@RequestMapping("/fire")
public class FireController {
	
	@Autowired
	FireService fireService;
	
	@GetMapping
	public @ResponseBody List<Fire> getFire(){
		return fireService.getFire();
	}
	
	@GetMapping("/{id}")
	public @ResponseBody Fire getFireByID(@PathVariable Long id){
		return fireService.getFireByID(id);
	}
	
	@GetMapping("city")
	public @ResponseBody List<Graph> getCityFire(){
		return fireService.getCityFire();
	}
	
	@GetMapping("zipcode")
	public @ResponseBody List<Graph> getZipCodeFire(){
		return fireService.getZipCodeFire();
	}
	
	@GetMapping("streetandnumber/{streetandnumber}")
	public @ResponseBody List<Fire> getBystreetandnumber(@PathVariable String streetandnumber){
		return fireService.getBystreetandnumber(streetandnumber);
	}
	
	@GetMapping("zipcode/{zipcode}")
	public @ResponseBody List<Fire> getByZipcode(@PathVariable String zipcode){
		return fireService.getByZipcode(zipcode);
	}
	
	
	@PostMapping
	public @ResponseBody Fire saveFire(@RequestBody Fire fire) {
		return fireService.saveFire(fire);

	}

	@PutMapping
	public @ResponseBody Fire updateFire(@RequestBody Fire fire) {
		return fireService.saveFire(fire);

	}

}
