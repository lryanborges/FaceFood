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

import br.edu.ufersa.facefood.api.dto.PratoDTO;
import br.edu.ufersa.facefood.api.dto.UpdatePratoDTO;
import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.service.PratoService;

@RestController
@RequestMapping("/api/prato")
public class PratoController {

	@Autowired
	private PratoService service;

	@Autowired
	private ModelMapper mapper;

	@GetMapping
	public List<PratoDTO> listar() {
		List<PratoDTO> pratos = new ArrayList<PratoDTO>();
		for(Prato prato : service.getAll()) {
			pratos.add(mapper.map(prato, PratoDTO.class));
		}
		return pratos;
	}
	
	@GetMapping("/id/{pratoId}")
	public ResponseEntity<PratoDTO> buscar(@PathVariable long pratoId){
		PratoDTO dto = mapper.map(service.getById(pratoId), PratoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto,HttpStatus.OK);
		}
	}
	
	@GetMapping("/uuid/{pratoUuid}")
	public ResponseEntity<PratoDTO> buscar(@PathVariable UUID pratoUuid){
		PratoDTO dto = mapper.map(service.getByUuid(pratoUuid), PratoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto,HttpStatus.OK);
		}
	}
	
	@GetMapping("/nome/{pratoNome}")
	public ResponseEntity<PratoDTO> buscar(@PathVariable String pratoNome){
		PratoDTO dto = mapper.map(service.getByNome(pratoNome), PratoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto,HttpStatus.OK);
		}
	}
	
	@PostMapping
	public ResponseEntity<PratoDTO> criar(@Valid @RequestBody PratoDTO dto) {
		Prato prato = service.createPrato(mapper.map(dto, Prato.class));
		PratoDTO novo = mapper.map(prato, PratoDTO.class);
		if(novo == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(novo, HttpStatus.CREATED);
		}
	}
	
	@PutMapping
	public ResponseEntity<PratoDTO> alterar(@Valid @RequestBody UpdatePratoDTO dto){
		Prato prato = service.updatePrato(mapper.map(dto, Prato.class));
		PratoDTO updated = mapper.map(prato, PratoDTO.class);
		if(updated == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(updated, HttpStatus.OK);
		}
	}
	
	@PatchMapping
	public ResponseEntity<PratoDTO> alterar(@Valid @RequestBody PratoDTO dto){
		Prato prato = service.updatePratoPatch(mapper.map(dto, Prato.class));
		PratoDTO updated = mapper.map(prato, PratoDTO.class);
		if(updated == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(updated, HttpStatus.OK);
		}
	}
	
	@DeleteMapping("/id/{pratoId}")
	public ResponseEntity<Long> deletar(@PathVariable long pratoId) {
		String result = service.deletePrato(pratoId);
		if (result.equals("ok")) {
			return new ResponseEntity<>(pratoId, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/uuid/{pratoUuid}")
	public ResponseEntity<UUID> deletar(@PathVariable UUID pratoUuid) {
		String result = service.deletePrato(pratoUuid);
		if (result.equals("ok")) {
			return new ResponseEntity<>(pratoUuid, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@DeleteMapping("/nome/{pratoNome}")
	public ResponseEntity<String> deletar(@PathVariable String pratoNome) {
		String result = service.deletePrato(pratoNome);
		if (result.equals("ok")) {
			return new ResponseEntity<>(pratoNome, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
