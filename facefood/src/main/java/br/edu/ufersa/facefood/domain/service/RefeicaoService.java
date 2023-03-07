package br.edu.ufersa.facefood.domain.service;

import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.repository.RefeicaoRepository;

@Service
public class RefeicaoService {
	@Autowired
	RefeicaoRepository rep;
	
	public List<Refeicao> getAll(){
		List<Refeicao> refeicoes = rep.findAll();
		return refeicoes;
	}
	

	public Refeicao getById(long id) {
		Refeicao refeicao = rep.findById(id);
		return refeicao;
	}
	
	public Refeicao getByUuid(UUID id) {
		Refeicao refeicao = rep.findByUuid(id);
		return refeicao;
	}
	
	public Refeicao getByHorario(LocalTime horario){
		Refeicao refeicao = rep.findByHorario(horario);
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
		return rep.save(refeicao);
	}
	

	public String deleteRefeicao(long id) {
		Refeicao refeicaoDelete = rep.findById(id);
		if (refeicaoDelete == null) return "Refeição não encontrada";
		rep.delete(refeicaoDelete);
		return "ok";
	}
	
	public String deleteRefeicao(UUID uuid) {
		Refeicao refeicaoDelete = rep.findByUuid(uuid);
		if (refeicaoDelete == null) return "Refeição não encontrada";
		rep.delete(refeicaoDelete);
		return "ok";
	}
	
	public String deleteRefeicao(LocalTime horario) {
		Refeicao refeicaoDelete = rep.findByHorario(horario);
		if(refeicaoDelete == null) {
			return "refeição não foi encontrada";
		}else {
			rep.delete(refeicaoDelete);
			return "ok";
		}
	}
	
}
