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

import br.edu.ufersa.facefood.api.dto.InsertUserDTO;
import br.edu.ufersa.facefood.api.dto.UpdateUserDTO;
import br.edu.ufersa.facefood.api.dto.UserDTO;
import br.edu.ufersa.facefood.domain.entity.User;
import br.edu.ufersa.facefood.domain.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserService service;
	
	@GetMapping
	public List <UserDTO> listar(){
		List<UserDTO> users = new ArrayList<UserDTO>();
		for(User user: service.getAll()) {
			users.add(mapper.map(user, UserDTO.class));
		}
		return users;
	}
	
	@GetMapping("/uuid/{userUuid}")
	public ResponseEntity<UserDTO> buscar (@PathVariable UUID userUuid){
		UserDTO dto = mapper.map(service.getByUuid(userUuid), UserDTO.class);
		if(dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else 
			return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/id/{userId}")
	public ResponseEntity<UserDTO> buscar (@PathVariable long userId){
		UserDTO dto = mapper.map(service.getById(userId), UserDTO.class);
		if(dto != null)
			return new ResponseEntity<>(dto, HttpStatus.OK);
		else 
			return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/email/{email}")
	public ResponseEntity<UserDTO> buscar (@PathVariable String email){
		UserDTO dto = mapper.map(service.getByEmail(email), UserDTO.class);
		if(dto != null) {
			return new ResponseEntity<>(dto, HttpStatus.OK);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PostMapping
	public ResponseEntity<UserDTO> criar (@Valid @RequestBody InsertUserDTO dto){
		User user = service.createUser(mapper.map(dto, User.class));
		UserDTO criado = mapper.map(user, UserDTO.class);
		if(criado==null) {
			return new ResponseEntity<> (null, HttpStatus.INTERNAL_SERVER_ERROR);	
		}else {
			return new ResponseEntity<> (criado, HttpStatus.CREATED);
		}
	}
	
	@PutMapping
	public ResponseEntity<UserDTO> alterar(@Valid @RequestBody UpdateUserDTO dto){
		User user = service.updateUser(mapper.map(dto, User.class));
		UserDTO atualizado = mapper.map(user, UserDTO.class);
		if(atualizado!=null) return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PatchMapping
	public ResponseEntity<UserDTO> alterar(@Valid @RequestBody InsertUserDTO dto){
		User user = service.updateUserPatch(mapper.map(dto, User.class));
		UserDTO atualizado = mapper.map(user, UserDTO.class);
		if(atualizado!=null) return new ResponseEntity<>(atualizado, HttpStatus.OK);
		else return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@DeleteMapping("/id/{userId}")
	public ResponseEntity<Long> deletar(@PathVariable long userId) {
		String teste = service.deleteUser(userId);
		if (teste.equals("ok")) return new ResponseEntity<>(userId, HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/uuid/{userUuid}")
	public ResponseEntity<UUID> deletar(@PathVariable UUID userUuid) {
		String teste = service.deleteUser(userUuid);
		if (teste.equals("ok")) return new ResponseEntity<>(userUuid, HttpStatus.OK);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	
	
}
