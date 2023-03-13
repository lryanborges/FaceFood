package br.edu.ufersa.facefood.api.RestController;

import java.time.LocalTime;
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
	
	@GetMapping("/uuid/{refeicaoUuid}")
	public ResponseEntity<RefeicaoDTO> buscar(@PathVariable UUID refeicaoUuid){
		RefeicaoDTO dto = mapper.map(service.getByUuid(refeicaoUuid), RefeicaoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto,HttpStatus.OK);
		}
	}
	
	@GetMapping("/id/{refeicaoId}")
	public ResponseEntity<RefeicaoDTO> buscar (@PathVariable long refeicaoId){
		RefeicaoDTO dto = mapper.map(service.getById(refeicaoId), RefeicaoDTO.class);
		if(dto == null) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(dto,HttpStatus.OK);
		}
	}
	
	@GetMapping("/horario/{horario}")
	public ResponseEntity<RefeicaoDTO> buscar(@PathVariable String horario){
	    LocalTime localTime = LocalTime.parse(horario);
	    System.out.println("horario: " + localTime);

	    RefeicaoDTO dto = mapper.map(service.getByHorario(localTime), RefeicaoDTO.class);
	    System.out.println("dto: " + dto);

	    if(dto == null) {
	        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    } else {
	        return new ResponseEntity<>(dto, HttpStatus.OK);
	    }
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
		if(atualizado == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(atualizado, HttpStatus.OK);
		}
	}

	@PatchMapping
	public ResponseEntity<RefeicaoDTO> alterar(@Valid @RequestBody InsertRefeicaoDTO dto){
		Refeicao refeicao = service.updateRefeicaoPatch(mapper.map(dto, Refeicao.class));
		RefeicaoDTO atualizado = mapper.map(refeicao, RefeicaoDTO.class);
		if(atualizado == null) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		} else {
			return new ResponseEntity<>(atualizado, HttpStatus.OK);
		}
	}

	@DeleteMapping("/id/{refeicaoId}")
	public ResponseEntity<Long> deletar (@PathVariable long refeicaoId){
		String teste = service.deleteRefeicao(refeicaoId);
		if(teste.equals("ok")) return new ResponseEntity<>(refeicaoId, HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/uuid/{refeicaoUuid}")
	public ResponseEntity<UUID> deletar(@PathVariable UUID refeicaoUuid){
		String result = service.deleteRefeicao(refeicaoUuid);
		if(result.equals("ok")) {
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/horario/{refeicaoHorario}")
	public ResponseEntity<String> deletar(@PathVariable LocalTime horario) {
		String result = service.deleteRefeicao(horario);
		if (result.equals("ok")) {
			return new ResponseEntity<>("refeição deletada no horario " + horario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
