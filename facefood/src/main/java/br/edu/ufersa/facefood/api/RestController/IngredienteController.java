package br.edu.ufersa.facefood.api.RestController;

import java.util.ArrayList;
import java.util.List;

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
import br.edu.ufersa.facefood.domain.entity.Ingrediente.TipoIngrediente;
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

	@GetMapping("/id/{ingredienteId}")
	public ResponseEntity<IngredienteDTO> buscar(@PathVariable long ingredienteId) {
		IngredienteDTO dto = mapper.map(service.getById(ingredienteId), IngredienteDTO.class);
		if (dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}
	
	
	//Busca por nome
	@GetMapping("/nome/{ingredienteNome}")
	public ResponseEntity<IngredienteDTO> buscar(@PathVariable String ingredienteNome) {
		IngredienteDTO dto = mapper.map(service.getByNome(ingredienteNome), IngredienteDTO.class);
		if (dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else
			return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/tipo/{tipoIngrediente}")
	public ResponseEntity<List<IngredienteDTO>> buscarPorTipo(@PathVariable TipoIngrediente tipoIngrediente) {
	List<Ingrediente> ingredientes = service.getByTipo(tipoIngrediente);
	List<IngredienteDTO> dtos = new ArrayList<>();
	for (Ingrediente ingrediente : ingredientes) {
	IngredienteDTO dto = mapper.map(ingrediente, IngredienteDTO.class);
	dtos.add(dto);
	}
	if (!dtos.isEmpty()) {
	return new ResponseEntity<>(dtos, HttpStatus.OK);
	} else {
	return ResponseEntity.notFound().build();
	}
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
	
	// PUT deveria poder trocar o nome também, mas por enquanto não dá porque não temos uma variável de uuid para ingredientes
	@PutMapping
	public ResponseEntity<IngredienteDTO> alterar(@Valid @RequestBody UpdateIngredienteDTO dto) {
	    Ingrediente ingrediente = service.updateIngrediente(mapper.map(dto, Ingrediente.class));
	    IngredienteDTO atualizado = mapper.map(ingrediente, IngredienteDTO.class);
	    if(atualizado!=null) {
	    	return new ResponseEntity<>(atualizado, HttpStatus.OK);
	    }else {
	    	return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	
	@PatchMapping
	public ResponseEntity<IngredienteDTO> alterar(@Valid @RequestBody InsertIngredienteDTO dto) {
	    Ingrediente ingrediente = service.updateIngredientePatch(mapper.map(dto, Ingrediente.class));
	    IngredienteDTO atualizado = mapper.map(ingrediente, IngredienteDTO.class);
	    if(atualizado!=null) {
	    	return new ResponseEntity<>(atualizado, HttpStatus.OK);
	    }else {
	    	return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	
	@DeleteMapping("/id/{ingredienteId}")
	public ResponseEntity<Long> deletar(@PathVariable long ingredienteId) {
	String result = service.deleteIngrediente(ingredienteId);
	if (result.equals("ok")) {
	return new ResponseEntity<>(ingredienteId, HttpStatus.OK);
	} else {
	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	}
	
	@DeleteMapping("/nome/{ingredienteNome}")
	public ResponseEntity<String> deletar(@PathVariable String ingredienteNome) {
	String result = service.deleteIngrediente(ingredienteNome);
	if (result.equals("ok")) {
	return new ResponseEntity<>(ingredienteNome, HttpStatus.OK);
	} else {
	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	}
	
}