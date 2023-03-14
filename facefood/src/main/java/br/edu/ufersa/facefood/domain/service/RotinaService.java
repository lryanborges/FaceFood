 package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.entity.Rotina;
import br.edu.ufersa.facefood.domain.repository.RotinaRepository;

@Service
public class RotinaService {
	@Autowired
	RotinaRepository rep;
	@Autowired
	RefeicaoService refService;
	@Autowired
	UserService userService;
	public List<Rotina> getAll(){
		List<Rotina> refeicoes = rep.findAll();
		return refeicoes;
	}

	public Rotina getById(UUID id) {
		Rotina rotina = rep.findByUuid(id);
		return rotina;
	}
	
	public Rotina createRotina(Rotina rotina) {
		rotina.setUuid(UUID.randomUUID());
		rotina.setUser(userService.getById(rotina.getUser().getUuid()));
		for(Refeicao refeicao : rotina.getListaRefeicoes()) {
			refService.createRefeicao(refeicao);
		}
		rep.save(rotina);
		return rotina;
	}
	
	public Rotina updateRotinaPatch(Rotina rotina) {
		Rotina rotinaData = rep.findByUuid(rotina.getUuid());
		rotina.setId(rotinaData.getId());
		rotina.setUuid(rotinaData.getUuid());
		return rep.save(rotina);
	}
	

	public String deleteRotina(UUID uuid) {
		Rotina rotinaDelete = rep.findByUuid(uuid);
		if (rotinaDelete == null) return "Refeição não encontrada";
		rep.delete(rotinaDelete);
		return "ok";
	}
	public Rotina updateRotina(Rotina rotina) {
		Rotina rotinaData = rep.findByUuid(rotina.getUuid());
		System.out.println(rotinaData.getUuid());
		rotina.setId(rotinaData.getId());
		Rotina rotinaUpdated = rep.save(rotina);
		return rotinaUpdated;
	}
	
}
