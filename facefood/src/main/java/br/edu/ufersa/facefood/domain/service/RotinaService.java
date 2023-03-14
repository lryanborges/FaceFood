package br.edu.ufersa.facefood.domain.service;

import java.util.ArrayList;
import java.util.List;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		List<Rotina> rotinas = rep.findAll();
		return rotinas;
	}

	public Rotina getById(UUID id) {
		Rotina rotina = rep.findByUuid(id);
		return rotina;
	}
	
	public Rotina createRotina(Rotina rotina) {
		rotina.setUuid(UUID.randomUUID());
		rotina.setUser(userService.getById(rotina.getUser().getId()));
		List<Refeicao> listaRefeicoes = new ArrayList<Refeicao>();
		for(Refeicao refeicao : rotina.getListaRefeicoes()) {
			refeicao = refService.getById(refeicao.getId());
			listaRefeicoes.add(refeicao);
		}
		rotina.setListaRefeicoes(listaRefeicoes);
		rep.save(rotina);
		return rotina;
	}
	
	public Rotina updateRotinaPatch(Rotina rotina) {
		Rotina rotinaData = rep.findByUuid(rotina.getUuid());
		rotina.setId(rotinaData.getId());
		rotina.setUuid(rotinaData.getUuid());
		List<Refeicao> listaRefeicoes = new ArrayList<Refeicao>();
		for(Refeicao refeicao : rotina.getListaRefeicoes()) {
			refeicao = refService.getById(refeicao.getId());
			listaRefeicoes.add(refeicao);
		}
		rotina.setListaRefeicoes(listaRefeicoes);
		return rep.save(rotina);
	}
	

	public String deleteRotina(UUID uuid) {
		Rotina rotinaDelete = rep.findByUuid(uuid);
		if (rotinaDelete == null) return "Rotina não encontrada";
		rep.delete(rotinaDelete);
		return "ok";
	}
	public Rotina updateRotina(Rotina rotina) {
		Rotina rotinaData = rep.findByUuid(rotina.getUuid());
		rotina.setId(rotinaData.getId());
		List<Refeicao> listaRefeicoes = new ArrayList<Refeicao>();
		for(Refeicao refeicao : rotina.getListaRefeicoes()) {
			refeicao = refService.getById(refeicao.getId());
			listaRefeicoes.add(refeicao);
		}
		rotina.setListaRefeicoes(listaRefeicoes);
		Rotina rotinaUpdated = rep.save(rotina);
		return rotinaUpdated;
	}
	
}
