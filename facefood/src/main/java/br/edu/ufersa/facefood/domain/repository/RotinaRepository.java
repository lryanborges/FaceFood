package br.edu.ufersa.facefood.domain.repository;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ufersa.facefood.domain.entity.Rotina;

public interface RotinaRepository extends JpaRepository<Rotina,Long> {
	Rotina findByUuid(UUID uuid);
	Rotina findByData(LocalDate data);
}