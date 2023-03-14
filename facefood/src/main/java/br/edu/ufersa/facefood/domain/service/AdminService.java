package br.edu.ufersa.facefood.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufersa.facefood.domain.entity.Admin;
import br.edu.ufersa.facefood.domain.repository.AdminRepository;

@Service // Anotação que indica que esta classe é um componente de serviço do Spring
public class AdminService {
	@Autowired
	AdminRepository rep;
	
	public List<Admin> getAll() {
		List<Admin> admins = rep.findAll();
		
		return admins;
	}
	
	public Admin getByUuid(UUID uuid) {
		// Cria um admin com o email "achou@gmail.com" e o UUID recebido como parâmetro
		Admin admin = rep.findByUuid(uuid);
		
		return admin;
	}
	
	public Admin getById(long id) {
		Admin admin = rep.findById(id);
		
		return admin;
	}
	
	public Admin createAdmin(Admin admin) {
		// Gera um novo UUID para o usuário
		admin.setUuid(UUID.randomUUID());
		rep.save(admin);
		// Retorna o usuário com o novo UUID
		return admin;
	}	
	
	public Admin updateAdmin(Admin admin) {
		Admin adminData = rep.findByUuid(admin.getUuid());
		admin.setId(adminData.getId());
		return rep.save(admin);
	}	
	
	public Admin updateAdminPatch(Admin admin) {
		Admin adminData = rep.findByEmail(admin.getEmail());
		admin.setId(adminData.getId());
		admin.setUuid(adminData.getUuid());
		return rep.save(admin);
	}	
	
	public String deleteAdmin(UUID uuid) {
		Admin adminDelete = rep.findByUuid(uuid);
		if (adminDelete == null) return "usuario não encontrado";
		rep.delete(adminDelete);
		return "ok";
	}	
	
	public String deleteAdmin(long id) {
		Admin adminDelete = rep.findById(id);
		if (adminDelete == null) return "usuario não encontrado";
		rep.delete(adminDelete);
		return "ok";
	}	
	
}