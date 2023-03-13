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

import br.edu.ufersa.facefood.api.dto.InsertPublicacaoDTO;
import br.edu.ufersa.facefood.api.dto.PublicacaoDTO;
import br.edu.ufersa.facefood.api.dto.UpdatePublicacaoDTO;
import br.edu.ufersa.facefood.domain.entity.Publicacao;
import br.edu.ufersa.facefood.domain.service.PublicacaoService;

@RestController
@RequestMapping("/api/publicacao")
public class PublicacaoController {

	@Autowired
	private PublicacaoService service;
	@Autowired
	private ModelMapper mapper;
	
	@GetMapping
	public List<PublicacaoDTO> listar(){
		List<PublicacaoDTO> publicacoes = new ArrayList<PublicacaoDTO>();
		for(Publicacao publicacao : service.getAll()) {
			publicacoes.add(mapper.map(publicacao, PublicacaoDTO.class));
		}
		return publicacoes;
	}
	
	@GetMapping("/id/{publicacaoId}")
	public ResponseEntity<PublicacaoDTO> buscar(@PathVariable long publicacaoId) {
		Publicacao publicacao = service.getById(publicacaoId);
		PublicacaoDTO dto = mapper.map(publicacao, PublicacaoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto, HttpStatus.OK);
		}
	}
	
	@GetMapping("/uuid/{publicacaoUuid}")
	public ResponseEntity<PublicacaoDTO> buscar(@PathVariable UUID publicacaoUuid) {
		Publicacao publicacao = service.getByUuid(publicacaoUuid);
		PublicacaoDTO dto = mapper.map(publicacao, PublicacaoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto, HttpStatus.OK);
		}
	}
	
	@PostMapping
	public ResponseEntity<PublicacaoDTO> criar(@Valid @RequestBody InsertPublicacaoDTO dto) {
		Publicacao publicacao = service.createPublicacao(mapper.map(dto, Publicacao.class));
		PublicacaoDTO novo = mapper.map(publicacao, PublicacaoDTO.class);
		if(novo == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(novo, HttpStatus.CREATED);
		}
	}
	
	@PutMapping
	public ResponseEntity<PublicacaoDTO> buscar(@Valid @RequestBody UpdatePublicacaoDTO dto) {
		Publicacao publicacao = service.updatePublicacao(mapper.map(dto, Publicacao.class));
		PublicacaoDTO updated = mapper.map(publicacao, PublicacaoDTO.class);
		if(updated == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(updated, HttpStatus.OK);
		}
	}
	
	@PatchMapping
	public ResponseEntity<PublicacaoDTO> buscar(@Valid @RequestBody PublicacaoDTO dto) {
		Publicacao publicacao = service.updatePublicacaoPatch(mapper.map(dto, Publicacao.class));
		PublicacaoDTO updated = mapper.map(publicacao, PublicacaoDTO.class);
		if(updated == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(updated, HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/id/{publicacaoId}")
	public ResponseEntity<Long> deletar(@PathVariable long publicacaoId){
		String result = service.deletePublicacao(publicacaoId);
		if(result.equals("ok")) {
			return new ResponseEntity<>(publicacaoId,HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/uuid/{publicacaoUuid}")
	public ResponseEntity<UUID> deletar(@PathVariable UUID publicacaoUuid){
		String result = service.deletePublicacao(publicacaoUuid);
		if(result.equals("ok")) {
			return new ResponseEntity<>(publicacaoUuid,HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
