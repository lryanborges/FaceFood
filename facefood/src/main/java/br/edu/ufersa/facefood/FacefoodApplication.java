package br.edu.ufersa.facefood;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class FacefoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(FacefoodApplication.class, args);
	}
	
	@Bean 
	public ModelMapper modelMapper() {
		return new ModelMapper(); 
	}
}
