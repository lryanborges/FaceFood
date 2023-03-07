package br.edu.ufersa.facefood.domain.repository;

import java.time.LocalTime;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ufersa.facefood.domain.entity.Refeicao;


public interface RefeicaoRepository  extends JpaRepository<Refeicao,Long> {
	Refeicao findByUuid(UUID uuid);
	Refeicao findById(long id);
	Refeicao findByHorario(LocalTime horario);
}
