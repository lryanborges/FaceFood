package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.entity.Rotina;
import br.edu.ufersa.facefood.domain.repository.RefeicaoRepository;

@Service
public class RefeicaoService {
	@Autowired
	RefeicaoRepository rep;
	
	public List<Refeicao> getAll(){
		List<Refeicao> refeicoes = rep.findAll();
		return refeicoes;
	}

	public Refeicao getById(UUID id) {
		Refeicao refeicao = rep.findByUuid(id);
		return refeicao;
	}
	public Refeicao createRefeicao(Refeicao refeicao) {
		refeicao.setUuid(UUID.randomUUID());
		rep.save(refeicao);
		return refeicao;
	}
	
	public Refeicao updateRefeicao(Refeicao refeicao) {
		Refeicao refeicaoData = rep.findByUuid(refeicao.getUuid());
		refeicao.setId(refeicaoData.getId());
		return rep.save(refeicao);
	}
	
	public Refeicao updateRefeicaoPatch(Refeicao refeicao) {
		Refeicao refeicaoData = rep.findByHorario(refeicao.getHorario());
		refeicao.setId(refeicaoData.getId());
		refeicao.setUuid(refeicaoData.getUuid());
		return rep.save(refeicao);
	}
	

	public String deleteRefeicao(UUID uuid) {
		Refeicao refeicaoDelete = rep.findByUuid(uuid);
		if (refeicaoDelete == null) return "Refeição não encontrada";
		rep.delete(refeicaoDelete);
		return "ok";
	}
	
}
