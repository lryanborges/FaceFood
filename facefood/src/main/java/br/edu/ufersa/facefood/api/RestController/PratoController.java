package br.edu.ufersa.facefood.api.RestController;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufersa.facefood.api.dto.PratoDTO;
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
		return null;
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
	
}
