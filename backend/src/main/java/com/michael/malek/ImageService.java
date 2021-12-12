package com.michael.malek;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ImageService {
	
	@Autowired
	private ImageRepository repo;

	public ResponseEntity<?> saveImage(MultipartFile file, String name, double price, String description) {
		boolean fileIsValid = Utils.isValidFile(file);
		if (!fileIsValid) {
			return ResponseEntity.badRequest().body("Invalid file type.");
		}
		String fileLocation;
		try {
			fileLocation = Utils.saveImageToDisk(file);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
		Image image = new Image();
		image.setName(name);
		image.setPrice(price);
		image.setDescription(description);
		image.setFilePath(fileLocation);
		repo.save(image);
		return ResponseEntity.ok("File Uploaded Successfully");
	}
	
	public List<Image> saveImages(List<Image> images){
		return repo.saveAll(images);
	}
	
	public ResponseEntity<FileResource> getImageById(int id) {
		Image image = repo.findById(id).orElse(null);
		FileResource fileResource = Utils.imageToFileResource(image);
		return ResponseEntity.ok().body(fileResource);
	}
	
	public Image getImageByName(String name) {
		return repo.findByName(name);
	}
	
	public ResponseEntity<List<FileResource>> getAllImages(){
		List<Image> allImages =  repo.findAll();
		List<FileResource> allFileResources = new LinkedList<FileResource>(); 
		for (Image image : allImages) {
			FileResource fileResource = Utils.imageToFileResource(image);
			allFileResources.add(fileResource);
		}
		return ResponseEntity.ok().body(allFileResources);
	}
	
	public ResponseEntity<String> deleteImageById(int id) {
		Image image = repo.findById(id).orElse(null);
		if(image!=null) {
			// Delete image file from folder
			File fileToDelete = new File(image.getFilePath());
			try {
				fileToDelete.delete();
			} catch (Exception e) {
				return ResponseEntity.internalServerError().body(e.getMessage());
			}
			// Delete image file from database
			repo.deleteById(id);
			return 	ResponseEntity.ok().body("Image with id " + id + " has been removed.");
		}
		else {
			return ResponseEntity.badRequest().body("Image with id " + id + " does not exist");
		}
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
