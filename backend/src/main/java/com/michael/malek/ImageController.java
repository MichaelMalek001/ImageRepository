package com.michael.malek;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin("http://localhost:3000")
public class ImageController {

	@Autowired
	private ImageService imageService;
	
	@PostMapping(value = "/addImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<?> addImage(@RequestParam("file") MultipartFile file, @RequestParam String name, @RequestParam double price, @RequestParam String description) {
		return imageService.saveImage(file, name, price, description);
	}
	
	@GetMapping("/getAllImages")
	public ResponseEntity<List<FileResource>> giveAllProducts(){
		return imageService.getAllImages();
	}
	
	@DeleteMapping("/deleteImage/{id}")
	public ResponseEntity<String> deleteImage(@PathVariable int id) {
		return imageService.deleteImageById(id);
	}
	
}
