package com.michael.malek;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public class Utils {

	// Saves given file to the disk. 
	// Returns the complete path where the file was stored
	public static String saveImageToDisk(MultipartFile file) throws Exception{
		Utils.checkPath();
		String fileName = file.getOriginalFilename();
		byte[] bytes = file.getBytes();
		Path path = Paths.get("C:\\upload\\" + new Date().getTime() + "-" + fileName);
		Files.write(path, bytes);
		return path.toString();
	}
	
	
	// Helper method to ensure that the directory where the files will be stored exists
	public static void checkPath() {
		new File("C:\\upload").mkdirs();		 
	}
	
	public static FileResource imageToFileResource(Image image) {
		FileResource fileResource = new FileResource();
		byte[] bytes = null;
		if (image!=null) {
			String fileName = image.getFilePath();
			try {
				bytes = Files.readAllBytes(Paths.get(fileName));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		String encodedString = Base64.getEncoder().encodeToString(bytes);
		fileResource.setDescription(image.getDescription());
		fileResource.setPrice(image.getPrice());
		fileResource.setEncodedContent(encodedString);
		fileResource.setId(image.getId());
		fileResource.setName(image.getName());
		return fileResource;
	}
	
	public static boolean isValidFile(MultipartFile file){
		String fileName = file.getOriginalFilename().toLowerCase();
		if (fileName.endsWith(".png") || fileName.endsWith(".jpeg") || fileName.endsWith(".jpg")) {
			return true;
		}
		return false;
	}
}
 