package com.fire.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fire.entity.Fire;
import com.fire.entity.Graph;
import com.fire.repository.FireRepository;

@Service
public class FireServiceImpl implements FireService {

	@Autowired
	FireRepository fireRepository;

	@Override
	public List<Fire> getFire() {
		List<Fire> list = (List<Fire>) fireRepository.findAll();
		return list;
	}

	@Override
	public Fire saveFire(Fire fire) {
		return fireRepository.save(fire);
	}

	@Override
	public List<Graph> getCityFire() {
		// TODO Auto-generated method stub
		List<Object> list = fireRepository.getCityFire();
		List<Graph> graphs = new ArrayList<>();
		list.forEach((o) -> {
			Object[] t = (Object[]) o;
			Graph g = new Graph(t[0], t[1]);
			graphs.add(g);
		});
		return graphs;
	}

	@Override
	public List<Graph> getZipCodeFire() {
		// TODO Auto-generated method stub
		List<Object> list = fireRepository.getZipCodeFire();
		List<Graph> graphs = new ArrayList<>();

		list.forEach((o) -> {
			Object[] t = (Object[]) o;
			Graph g = new Graph(t[0], t[1]);
			graphs.add(g);
		});
		return graphs;
	}

	@Override
	public Fire getFireByID(Long id) {
		try {
			Fire fire = fireRepository.findById(id).get();
			return fire;
		} catch (NumberFormatException e) {
			e.getMessage();
		}
		return null;
	}

	@Override
	public List<Fire> getBystreetandnumber(String streetandnumber) {
		try {
			return fireRepository.getBystreetandnumber(streetandnumber);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

	@Override
	public List<Fire> getByZipcode(String zipcode) {
		try {
			return fireRepository.getByZipcode(zipcode);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}

}
