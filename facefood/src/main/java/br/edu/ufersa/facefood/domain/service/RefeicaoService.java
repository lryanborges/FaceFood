package br.edu.ufersa.facefood.domain.service;

import java.time.LocalTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.repository.IngredienteRepository;
import br.edu.ufersa.facefood.domain.repository.RefeicaoRepository;

@Service
public class RefeicaoService {
	
	@Autowired
	private RefeicaoRepository rep;
	@Autowired
	private UserService userService;
	@Autowired
	private PratoService pratoService;
	
	
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
		refeicao.setUser(userService.getById(refeicao.getUser().getId()));
		Set<Prato> hashPratos = new HashSet<Prato>();
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getById(prato.getId());
			hashPratos.add(prato);
		}
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getByUuid(prato.getUuid());
			hashPratos.add(prato);
		}
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getByNome(prato.getNome());
			hashPratos.add(prato);
		}
		refeicao.setPratos(hashPratos);
		Refeicao saved = rep.save(refeicao);
		return saved;
	}
	
	
	public Refeicao updateRefeicao(Refeicao refeicao) {
		Refeicao refeicaoData = rep.findByUuid(refeicao.getUuid());
		refeicao.setId(refeicaoData.getId());
		Set<Prato> hashPratos = new HashSet<Prato>();
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getById(prato.getId());
			hashPratos.add(prato);
		}
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getByUuid(prato.getUuid());
			hashPratos.add(prato);
		}
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getByNome(prato.getNome());
			hashPratos.add(prato);
		}
		refeicao.setPratos(hashPratos);
		Refeicao refeicaoUpdated = rep.save(refeicao);
		return refeicaoUpdated;
	}
	
	public Refeicao updateRefeicaoPatch(Refeicao refeicao) {
		Refeicao refeicaoData = rep.findByHorario(refeicao.getHorario());
		refeicao.setId(refeicaoData.getId());
		Set<Prato> hashPratos = new HashSet<Prato>();
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getById(prato.getId());
			hashPratos.add(prato);
		}
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getByUuid(prato.getUuid());
			hashPratos.add(prato);
		}
		for(Prato prato : refeicao.getPratos()) {
			prato = pratoService.getByNome(prato.getNome());
			hashPratos.add(prato);
		}
		refeicao.setPratos(hashPratos);
		Refeicao refeicaoUpdated = rep.save(refeicao);
		return refeicaoUpdated;
	}

	public String deleteRefeicao(long id) {
		Refeicao refeicaoDelete = rep.findById(id);
		if (refeicaoDelete == null) return "Refeição não encontrada";
		rep.delete(refeicaoDelete);
		return "ok";
	}
	
	public String deleteRefeicao(LocalTime horario) {
		Refeicao refeicaoDelete = rep.findByHorario(horario);
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
	
}
