package br.edu.ufersa.facefood.api.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufersa.facefood.api.dto.InsertRefeicaoDTO;
import br.edu.ufersa.facefood.api.dto.RefeicaoDTO;
import br.edu.ufersa.facefood.api.dto.UpdateRefeicaoDTO;
import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.service.RefeicaoService;


@RestController
@RequestMapping("/api/refeicao")
public class RefeicaoController {
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private RefeicaoService service;
	
	@GetMapping
	public List<RefeicaoDTO> listar(){
		List<RefeicaoDTO> refeicoes = new ArrayList<RefeicaoDTO>();
		for(Refeicao refeicao: service.getAll()) {
			refeicoes.add(mapper.map(refeicao, RefeicaoDTO.class));
		}
		return refeicoes;
	}
	
	@GetMapping("/{refeicaoId}")
	public ResponseEntity<RefeicaoDTO> buscar (@PathVariable UUID refeicaoId){
		RefeicaoDTO dto = mapper.map(service.getById(refeicaoId), RefeicaoDTO.class);
		if(dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}
	
	
	@PostMapping
	public ResponseEntity<RefeicaoDTO> criar (@Valid @RequestBody InsertRefeicaoDTO dto){
		Refeicao refeicao = service.createRefeicao(mapper.map(dto, Refeicao.class));
		RefeicaoDTO criado = mapper.map(refeicao, RefeicaoDTO.class);
		if(criado == null) {
			return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);
		}else {
			return new ResponseEntity<> (criado, HttpStatus.CREATED);
		}
	}

	@PutMapping
	public ResponseEntity<RefeicaoDTO> alterar(@Valid @RequestBody UpdateRefeicaoDTO dto){
		Refeicao refeicao = service.updateRefeicao(mapper.map(dto, Refeicao.class));
		RefeicaoDTO atualizado = mapper.map(refeicao, RefeicaoDTO.class);
		if(atualizado != null) return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PatchMapping
	public ResponseEntity<RefeicaoDTO> alterar(@Valid @RequestBody InsertRefeicaoDTO dto){
		Refeicao refeicao = service.updateRefeicaoPatch(mapper.map(dto, Refeicao.class));
		RefeicaoDTO atualizado = mapper.map(refeicao, RefeicaoDTO.class);
		if(atualizado != null) return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	

	@DeleteMapping("/{refeicaoId}")
	public ResponseEntity<UUID> deletar (@PathVariable UUID refeicaoId){
		String teste = service.deleteRefeicao(refeicaoId);
		if(teste.equals("ok")) return new ResponseEntity<>(refeicaoId, HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
