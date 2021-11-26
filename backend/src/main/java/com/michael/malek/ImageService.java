package com.michael.malek;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ImageService {
	
	@Autowired
	private ImageRepository repo;

	public Image saveImage(Image image) {
		return repo.save(image);
	}
	
	public List<Image> saveImages(List<Image> image){
		return repo.saveAll(image);
	}
	
	public Image getImageById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	public Image getImageByName(String name) {
		return repo.findByName(name);
	}
	
	public List<Image> getAllImages(){
		return repo.findAll();
	}
	
	public String deleteImageById(int id) {
		repo.deleteById(id);
		return 	"Image with id" + id + "has been removed.";
	}
	
	// there is also a method called deleteByIDs which will allow me to delete a list of 
	// images based on their IDs
	
	public Image updateImage(Image image) {
		Image newImage = repo.findById(image.getId()).orElse(null);
		
		// check if product given is actually in the database
		if(newImage==null) {
			return null; //TODO : Make this better
		}
		newImage.setName(image.getName());
		newImage.setPrice(image.getPrice());
		newImage.setDescription(image.getDescription());
		return repo.save(newImage);
	}
	
}
