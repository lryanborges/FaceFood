package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.repository.PratoRepository;

@Service
public class PratoService {

	@Autowired
	PratoRepository pratoRep;
	
	public List<Prato> getAll() {
		List<Prato> pratos = pratoRep.findAll();
		return pratos;
	}
	
	public Prato getById(long id) {
		Prato prato = pratoRep.findById(id);
		return prato;
	}
	
	public Prato getByNome(String nome) {
		Prato prato = pratoRep.findByNome(nome);
		return prato;
	}
	
	public Prato createPrato(Prato prato) {
		prato.setUuid(UUID.randomUUID());
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
		prato.setId(pratoData.getId());
		Prato pratoUpdated = pratoRep.save(prato);
		return pratoUpdated;
	}
	
	public Prato updatePratoPatch(Prato prato) {
		Prato pratoData = pratoRep.findByNome(prato.getNome());
		prato.setId(pratoData.getId());
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
