package br.edu.ufersa.facefood.api.dto;

import java.time.LocalTime;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;

public class InsertRefeicaoDTO {
	@NotEmpty(message="Coloque um horario atrelado a refeição")
	 private LocalDateTime horario;
	@NotEmpty(message="Coloque um prato atrelado a refeição")
	 private Prato prato;
	@NotNull
	Rotina rotina;
  
	public LocalTime getHorario() {
		return horario;
	}
	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}
	public Prato getPrato() {
		return prato;
	}
	public void setPrato(Prato prato) {
		this.prato = prato;
	}
}
