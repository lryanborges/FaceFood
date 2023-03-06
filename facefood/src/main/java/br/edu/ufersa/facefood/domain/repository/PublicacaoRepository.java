package br.edu.ufersa.facefood.domain.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ufersa.facefood.domain.entity.Publicacao;

public interface PublicacaoRepository extends JpaRepository<Publicacao, Long>{

	Publicacao findById(long id);
	Publicacao findByUuid(UUID uuid);
	Publicacao findByDescricao(String descricao);
	
}
