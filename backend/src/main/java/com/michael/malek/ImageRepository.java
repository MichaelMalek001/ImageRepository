package com.michael.malek;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
	
		Image findByName(String name);
}
