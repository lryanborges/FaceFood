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
	
	
	public Ingrediente getById(Long id) {
	    Optional<Ingrediente> optionalIngrediente = ingredienteRepository.findById(id);
	    if (optionalIngrediente.isPresent()) {
	        return optionalIngrediente.get();
	    } else {
	        // Lança uma exceção informando que não foi possível encontrar o ingrediente com o ID informado
	        throw new IllegalArgumentException("Não foi possível encontrar o ingrediente com o ID informado");
	    }
	}
	
	
	public Ingrediente createIngrediente(Ingrediente ingrediente) {
		ingredienteRepository.save(ingrediente);
		return ingrediente;
	}
	
	public Ingrediente updateIngrediente(Ingrediente ingrediente) {
		Optional<Ingrediente> optionalIngrediente = ingredienteRepository.findById(ingrediente.getId());
		if (optionalIngrediente.isPresent()) {
			Ingrediente ingredienteData = optionalIngrediente.get();
			ingredienteData.setNome(ingrediente.getNome());
			ingredienteData.setTipo(ingrediente.getTipo());
			ingredienteData.setCalorias(ingrediente.getCalorias());
			return ingredienteRepository.save(ingredienteData);
		}
		return null;
	}
	
	
	public Ingrediente updateIngredientePatch(Ingrediente ingrediente) {
		Ingrediente ingredienteData = ingredienteRepository.findByNome(ingrediente.getNome());
		ingrediente.setId(ingredienteData.getId());
		ingrediente.setCalorias(ingrediente.getCalorias());
		ingrediente.setTipo(ingredienteData.getTipo());
		return ingredienteRepository.save(ingrediente);
	}
	
	public String deleteIngrediente(Long id) {
		Optional<Ingrediente> optionalIngrediente = ingredienteRepository.findById(id);
		if (optionalIngrediente.isPresent()) {
			ingredienteRepository.deleteById(id);
			return "Ok";
		}
		return "Ingrediente não encontrado";
	}
	
	public List<Ingrediente> getByTipo(TipoIngrediente tipo) {
		return ingredienteRepository.findByTipo(tipo);
	}
	
	public Ingrediente getByNome(String nome) {
		Ingrediente ingrediente = ingredienteRepository.findByNome(nome);
		return ingrediente;
	}
}