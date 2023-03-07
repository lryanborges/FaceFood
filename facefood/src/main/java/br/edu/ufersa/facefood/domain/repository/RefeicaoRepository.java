package br.edu.ufersa.facefood.domain.repository;

import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.entity.Rotina;


public interface RefeicaoRepository  extends JpaRepository<Refeicao,Long> {
	Refeicao findByUuid(UUID uuid);
	Refeicao findByHorario(LocalTime horario);
}
