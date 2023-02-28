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

import br.edu.ufersa.facefood.api.dto.IngredienteDTO;
import br.edu.ufersa.facefood.api.dto.InsertIngredienteDTO;
import br.edu.ufersa.facefood.api.dto.UpdateIngredienteDTO;
import br.edu.ufersa.facefood.domain.entity.Ingrediente;
import br.edu.ufersa.facefood.domain.service.IngredienteService;

@RestController
@RequestMapping("/api/ingrediente")
public class IngredienteController {
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private IngredienteService service;

	@GetMapping
	public List<IngredienteDTO> listar() {
		List<IngredienteDTO> ingredientes = new ArrayList<IngredienteDTO>();
		for (Ingrediente ingrediente : service.getAll()) {
			ingredientes.add(mapper.map(ingrediente, IngredienteDTO.class));
		}
		return ingredientes;
	}

	@GetMapping("/{ingredienteId}")
	public ResponseEntity<IngredienteDTO> buscar(@PathVariable Long ingredienteId) {
		IngredienteDTO dto = mapper.map(service.getById(ingredienteId), IngredienteDTO.class);
		if (dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}

	@PostMapping
	public ResponseEntity<IngredienteDTO> criar(@Valid @RequestBody InsertIngredienteDTO dto) {
		Ingrediente ingrediente = service.createIngrediente(mapper.map(dto, Ingrediente.class));
		IngredienteDTO criado = mapper.map(ingrediente, IngredienteDTO.class);
		if (criado == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(criado, HttpStatus.CREATED);
		}
	}

	@PutMapping
	public ResponseEntity<IngredienteDTO> alterar(@Valid @RequestBody UpdateIngredienteDTO dto) {
		Ingrediente ingrediente = service.updateIngrediente(mapper.map(dto, Ingrediente.class));
		IngredienteDTO atualizado = mapper.map(ingrediente, IngredienteDTO.class);
		if (atualizado != null)
			return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<IngredienteDTO> alterar(@PathVariable Long id, @Valid @RequestBody UpdateIngredienteDTO dto) {
	    Ingrediente ingrediente = service.getById(id);
	    if (ingrediente == null) {
	        return ResponseEntity.notFound().build();
	    }
	    mapper.map(dto, ingrediente);
	    Ingrediente updatedIngrediente = service.updateIngrediente(ingrediente);
	    IngredienteDTO updatedDTO = mapper.map(updatedIngrediente, IngredienteDTO.class);
	    return ResponseEntity.ok(updatedDTO);
	}
	
	@DeleteMapping("/{ingredienteId}")
	public ResponseEntity<Long> deletar(@PathVariable Long ingredienteId) {
	String result = service.deleteIngrediente(ingredienteId);
	if (result.equals("ok")) {
	return new ResponseEntity<>(ingredienteId, HttpStatus.OK);
	} else {
	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	}
}