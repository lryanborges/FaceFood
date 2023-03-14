package br.edu.ufersa.facefood.domain.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ufersa.facefood.domain.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	Admin findById(long id);
	Admin findByUuid(UUID uuid);
	Admin findByEmail(String email);
}
