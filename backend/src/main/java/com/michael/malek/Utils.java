package com.michael.malek;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.multipart.MultipartFile;

public class Utils {

	public static void saveImageToDisk(MultipartFile file) throws Exception{
		//String currentDirectory = System.getProperty("user.dir");
		String fileName = file.getOriginalFilename();
		byte[] bytes = file.getBytes();
		Path path = Paths.get("C:\\upload\\" + fileName);
		Files.write(path, bytes);
	}
	
	public static void checkPath() {
		//TODO 
		// Make a function to check if the desired path to store the image file or not
		// If it exists already, do nothing
		// if it doesn't, create it
		// This method should be called by the saveImageToDisk method before attempting to save to image to the disk
	}
}
