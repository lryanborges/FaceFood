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
import br.edu.ufersa.facefood.api.dto.InsertRotinaDTO;
import br.edu.ufersa.facefood.api.dto.RefeicaoDTO;
import br.edu.ufersa.facefood.api.dto.RotinaDTO;
import br.edu.ufersa.facefood.api.dto.UpdateRefeicaoDTO;
import br.edu.ufersa.facefood.api.dto.UpdateRotinaDTO;
import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.entity.Rotina;
import br.edu.ufersa.facefood.domain.service.RotinaService;

@RestController
@RequestMapping("/api/rotina")
public class RotinaController {
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private RotinaService service;
	@GetMapping
	public List<RotinaDTO> listar() {
		List<RotinaDTO> rotinas = new ArrayList<RotinaDTO>();
		for (Rotina rotina : service.getAll()) {
			rotinas.add(mapper.map(rotina, RotinaDTO.class));
		}
		return rotinas;
	}
	@GetMapping("/{rotinaId}")
	public ResponseEntity<RotinaDTO> buscar (@PathVariable UUID rotinaId){
		RotinaDTO dto = mapper.map(service.getById(rotinaId), RotinaDTO.class);
		if(dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else 
			return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<RotinaDTO> criar (@Valid @RequestBody InsertRotinaDTO dto){
		Rotina rotina = service.createRotina(mapper.map(dto, Rotina.class));
		RotinaDTO criado = mapper.map(rotina, RotinaDTO.class);
		if(criado==null) {
			return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);	
		}else {
			return new ResponseEntity<> (criado, HttpStatus.CREATED);
		}
	}
	@PatchMapping
	public ResponseEntity<RotinaDTO> alterar(@Valid @RequestBody InsertRotinaDTO dto){
		Rotina rotina = service.updateRotinaPatch(mapper.map(dto, Rotina.class));
		RotinaDTO atualizado = mapper.map(rotina, RotinaDTO.class);
		if(atualizado != null) return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@DeleteMapping("/{rotinaId}")
	public ResponseEntity<UUID> deletar(@PathVariable UUID rotinaId) {
		String teste = service.deleteRotina(rotinaId);
		if (teste.equals("ok")) return new ResponseEntity<>(rotinaId, HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	@PutMapping
	public ResponseEntity<RotinaDTO> alterar(@Valid @RequestBody UpdateRotinaDTO dto){
		Rotina rotina = service.updateRotina(mapper.map(dto, Rotina.class));
		RotinaDTO atualizado = mapper.map(rotina, RotinaDTO.class);
		if(atualizado != null) return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}