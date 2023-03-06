package br.edu.ufersa.facefood.api.RestController;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufersa.facefood.api.dto.InsertRotinaDTO;
import br.edu.ufersa.facefood.api.dto.RotinaDTO;
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
}
