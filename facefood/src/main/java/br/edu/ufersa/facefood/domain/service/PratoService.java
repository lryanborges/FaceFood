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
		pratoRep.save(prato);
		return prato;
	}
	
	public Prato updatePrato(Prato prato) {
		return null;
	}
	
}
