package br.edu.ufersa.facefood.domain.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ufersa.facefood.domain.entity.Prato;

public interface PratoRepository extends JpaRepository<Prato,Long> {

	Prato findById(long id);
	Prato findByNome(String nome);
	Prato findByUuid(UUID uuid);
	
}
