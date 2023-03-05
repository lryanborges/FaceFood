package br.edu.ufersa.facefood.domain.service;

import java.util.ArrayList;
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
	
	public Prato createPrato(Prato prato) {
		prato.setUuid(UUID.randomUUID());
		pratoRep.save(prato);
		return prato;
	}
	
}
