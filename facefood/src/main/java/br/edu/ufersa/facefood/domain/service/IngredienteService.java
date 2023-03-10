package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Ingrediente;
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
	
	public Ingrediente getByUuid(UUID uuid) {
		Ingrediente ingrediente = ingredienteRepository.findByUuid(uuid);
		return ingrediente;
	}
	
	public Ingrediente getById(long id) {
		Ingrediente ingrediente = ingredienteRepository.findById(id);
		return ingrediente;
	}
	
	public Ingrediente getByNome(String nome) {
		Ingrediente ingrediente = ingredienteRepository.findByNome(nome);
		return ingrediente;
	}
	
	public List<Ingrediente> getByTipo(TipoIngrediente tipo) {
		return ingredienteRepository.findByTipo(tipo);
	}
	
	
	public Ingrediente createIngrediente(Ingrediente ingrediente) {
		ingrediente.setUuid(UUID.randomUUID());
		ingredienteRepository.save(ingrediente);
		return ingrediente;
	}
	
	public Ingrediente updateIngrediente(Ingrediente ingrediente) {
	    Ingrediente ingredienteData = ingredienteRepository.findByUuid(ingrediente.getUuid());
	    ingrediente.setId(ingredienteData.getId());    
	    return ingredienteRepository.save(ingrediente);
	}

	public Ingrediente updateIngredientePatch(Ingrediente ingrediente) {
		Ingrediente ingredienteData = ingredienteRepository.findByNome(ingrediente.getNome());
		ingrediente.setId(ingredienteData.getId());
		ingrediente.setUuid(ingredienteData.getUuid());
		return ingredienteRepository.save(ingrediente);
	}

	public String deleteIngrediente(UUID uuid) {
		Ingrediente ingredienteDelete = ingredienteRepository.findByUuid(uuid);
		if(ingredienteDelete == null)return "Ingrediente não encontrado";
		ingredienteRepository.delete(ingredienteDelete);
		return "ok";
	}
	
	public String deleteIngrediente(String nome) {
		Ingrediente ingredienteDelete = ingredienteRepository.findByNome(nome);
		if(ingredienteDelete == null)return "ingrediente não encontrado";
		ingredienteRepository.delete(ingredienteDelete);
		return "ok";
	}	
	
	public String deleteIngrediente(long id) {
		Ingrediente ingredienteDelete = ingredienteRepository.findById(id);
		if (ingredienteDelete == null) return "ingrediente não encontrado";
		ingredienteRepository.delete(ingredienteDelete);
		return "ok";
	}	
}