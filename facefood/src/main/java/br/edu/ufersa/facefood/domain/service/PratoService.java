package br.edu.ufersa.facefood.domain.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.repository.PratoRepository;

@Service
public class PratoService {

	@Autowired
	private PratoRepository pratoRep;
	@Autowired
	private UserService userService;
	@Autowired
	private IngredienteService ingredienteService;
	
	public List<Prato> getAll() {
		List<Prato> pratos = pratoRep.findAll();
		return pratos;
	}
	
	public Prato getById(long id) {
		Prato prato = pratoRep.findById(id); // por ter N de coluna de TIPO com tal id, vai retornar N vezes os tipos
		return prato;
	}
	
	public Prato getByUuid(UUID uuid) {
		Prato prato = pratoRep.findByUuid(uuid);
		return prato;
	}
	
	public Prato getByNome(String nome) {
		Prato prato = pratoRep.findByNome(nome);
		return prato;
	}
	
	public Prato createPrato(Prato prato) {
		prato.setUuid(UUID.randomUUID());
		prato.setUser(userService.getById(prato.getUser().getId()));
		Set<Ingrediente> hashIngredientes = new HashSet<Ingrediente>();
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getById(ingrediente.getId());
			hashIngredientes.add(ingrediente);
		}
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getByUuid(ingrediente.getUuid());
			hashIngredientes.add(ingrediente);
		}
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getByNome(ingrediente.getNome());
			hashIngredientes.add(ingrediente);
		}
		//ArrayList<Ingrediente> arrayIngredientes = new ArrayList<>(hashIngredientes);
		prato.setIngredientes(hashIngredientes);
		Prato saved = pratoRep.save(prato);
		return saved;
	}
	
	/*
	 public Ingrediente updateIngrediente(Ingrediente ingrediente) {
	    Ingrediente ingredienteData = ingredienteRepository.findById(ingrediente.getId());
	    ingrediente.setId(ingredienteData.getId());    
	    return ingredienteRepository.save(ingrediente);
	}
	 */
	public Prato updatePrato(Prato prato) {
		Prato pratoData = pratoRep.findByUuid(prato.getUuid());
		System.out.println(pratoData.toString());
		prato.setId(pratoData.getId());
		Set<Ingrediente> hashIngredientes = new HashSet<Ingrediente>();
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getById(ingrediente.getId());
			hashIngredientes.add(ingrediente);
		}
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getByUuid(ingrediente.getUuid());
			hashIngredientes.add(ingrediente);
		}
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getByNome(ingrediente.getNome());
			hashIngredientes.add(ingrediente);
		}
		prato.setIngredientes(hashIngredientes);
		Prato pratoUpdated = pratoRep.save(prato);
		return pratoUpdated;
	}
	
	public Prato updatePratoPatch(Prato prato) {
		Prato pratoData = pratoRep.findByNome(prato.getNome());
		prato.setId(pratoData.getId());
		prato.setUuid(pratoData.getUuid());
		Set<Ingrediente> hashIngredientes = new HashSet<Ingrediente>();
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getById(ingrediente.getId());
			hashIngredientes.add(ingrediente);
		}
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getByUuid(ingrediente.getUuid());
			hashIngredientes.add(ingrediente);
		}
		for(Ingrediente ingrediente : prato.getIngredientes()) {
			ingrediente = ingredienteService.getByNome(ingrediente.getNome());
			hashIngredientes.add(ingrediente);
		}
		prato.setIngredientes(hashIngredientes);
		Prato pratoUpdated = pratoRep.save(prato);
		return pratoUpdated;
	}
	
	public String deletePrato(long id) {
		Prato pratoDelete = pratoRep.findById(id);
		if(pratoDelete == null) {
			return "prato não foi encontrado";
		} else {
			pratoRep.delete(pratoDelete);
			return "ok";
		}
	}
	
	public String deletePrato(UUID uuid) {
		Prato pratoDelete = pratoRep.findByUuid(uuid);
		if(pratoDelete == null) {
			return "prato não foi encontrado";
		} else {
			pratoRep.delete(pratoDelete);
			return "ok";
		}
	}
	
	public String deletePrato(String nome) {
		Prato pratoDelete = pratoRep.findByNome(nome);
		if(pratoDelete == null) {
			return "prato não foi encontrado";
		} else {
			pratoRep.delete(pratoDelete);
			return "ok";
		}
	}
	
}
