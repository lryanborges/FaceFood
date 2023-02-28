package br.edu.ufersa.facefood.domain.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.User;
import br.edu.ufersa.facefood.domain.repository.UserRepository;

@Service // Anotação que indica que esta classe é um componente de serviço do Spring
public class UserService {
	@Autowired
	UserRepository rep;
	
	public List<User> getAll() {
		List<User> users = rep.findAll();
		
		return users;
	}
	
	public User getById(UUID id) {
		// Cria um usuário com o email "achou@gmail.com" e o UUID recebido como parâmetro
		User user = rep.findByUuid(id);
		
		return user;
	}
	
	public User createUser(User user) {
		// Gera um novo UUID para o usuário
		user.setUuid(UUID.randomUUID());
		rep.save(user);
		// Retorna o usuário com o novo UUID
		return user;
	}	
	
	public User updateUser(User user) {
		User userData = rep.findByUuid(user.getUuid());
		user.setId(userData.getId());
		return rep.save(user);
	}	
	
	public User updateUserPatch(User user) {
		User userData = rep.findByEmail(user.getEmail());
		user.setId(userData.getId());
		user.setUuid(userData.getUuid());
		return rep.save(user);
	}	
	
	public String deleteUser(UUID uuid) {
		User userDelete = rep.findByUuid(uuid);
		if (userDelete == null) return "usuario não encontrado";
		rep.delete(userDelete);
		return "Ok";
	}	
	
}