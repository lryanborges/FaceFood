package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.entity.User;
import br.edu.ufersa.facefood.domain.entity.Ingrediente.TipoIngrediente;
import br.edu.ufersa.facefood.domain.repository.IngredienteRepository;

@Service
public class IngredienteService {
	@Autowired
	private IngredienteRepository ingredienteRepository;
	
	public List<Ingrediente> getAll() {
		List<Ingrediente> ingredientes = ingredienteRepository.findAll();
		return ingredientes;
	}
	
	public Ingrediente getById(long id) {
		Ingrediente ingrediente = ingredienteRepository.findById(id);
		return ingrediente;
	}
	
	public Ingrediente getByNome(String nome) {
		Ingrediente ingrediente = ingredienteRepository.findByNome(nome);
		return ingrediente;
	}
	
	
	public Ingrediente createIngrediente(Ingrediente ingrediente) {
		ingredienteRepository.save(ingrediente);
		return ingrediente;
	}
	
	/*
	 * public User updateUser(User user) {
		User userData = rep.findByUuid(user.getUuid());
		user.setId(userData.getId());
		return rep.save(user);
	}	
	 */
	
	
	public Ingrediente updateIngrediente(Ingrediente ingrediente) {
	    Ingrediente ingredienteData = ingredienteRepository.findById(ingrediente.getId());
	    ingrediente.setId(ingredienteData.getId());    
	    return ingredienteRepository.save(ingrediente);
	}
	
	
	public Ingrediente updateIngredientePatch(Ingrediente ingrediente) {
		Ingrediente ingredienteData = ingredienteRepository.findByNome(ingrediente.getNome());
		ingrediente.setId(ingredienteData.getId());
		return ingredienteRepository.save(ingrediente);
	}
	

	public String deleteIngrediente(long id) {
		Ingrediente ingredienteDelete = ingredienteRepository.findById(id);
		if(ingredienteDelete == null)return "ingrediente não encontrado";
		ingredienteRepository.delete(ingredienteDelete);
		return "ok";
	}
	
	public String deleteIngrediente(String nome) {
		Ingrediente ingredienteDelete = ingredienteRepository.findByNome(nome);
		if(ingredienteDelete == null)return "ingrediente não encontrado";
		ingredienteRepository.delete(ingredienteDelete);
		return "ok";
	}
	
	
	public List<Ingrediente> getByTipo(TipoIngrediente tipo) {
		return ingredienteRepository.findByTipo(tipo);
	}
	
}