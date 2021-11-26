package com.michael.malek;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ImageController {

	@Autowired
	private ImageService imageService;
	
	@PostMapping("/addImage")
	public Image addProduct(@RequestBody Image image) {
		return imageService.saveImage(image);
	}
	
	@PostMapping("/addImages")
	public List<Image> addImages(@RequestBody List<Image> images){
		return imageService.saveImages(images); 
	}
	
	@GetMapping("/getImageById/{id}")
	public Image giveImageById(@PathVariable int id) {
		return imageService.getImageById(id);
	}
	
	@GetMapping("/getImageByName/{name}")
	public Image giveImageByName(@PathVariable String name) {
		return imageService.getImageByName(name);
	}
	
	@GetMapping("/getAllImages")
	public List<Image> giveAllProducts(){
		return imageService.getAllImages();
	}
	
	@PutMapping("/putImage")
	public Image putImage(@RequestBody Image image) {
		return imageService.updateImage(image);
	}
	
	@DeleteMapping("/deleteImage/{id}")
	public String deleteImage(@PathVariable int id) {
		return imageService.deleteImageById(id);
	}
}
