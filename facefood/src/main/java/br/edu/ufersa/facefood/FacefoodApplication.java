package br.edu.ufersa.facefood;



import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication // Anotação que indica que a classe é uma classe de configuração do Spring Boot
public class FacefoodApplication {

	public static void main(String[] args) {
	
		SpringApplication.run(FacefoodApplication.class, args); // Método responsável por inicializar o aplicativo Spring Boot
		
	}

	@Bean // Anotação que indica que o método deve ser tratado pelo container Spring como um bean gerenciado
	public ModelMapper modelMapper() {
		return new ModelMapper(); // Cria uma nova instância do objeto ModelMapper e retorna como um bean gerenciado pelo Spring
	}
}
