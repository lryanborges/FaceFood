package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.validation.constraints.NotEmpty;

import br.edu.ufersa.facefood.domain.entity.Prato;

public class UpdateRefeicaoDTO {
	@NotEmpty(message="Coloque um horario atrelado a refeição")
	 private LocalDateTime horario;
	@NotEmpty(message="Coloque um prato atrelado a refeição")
	 private Prato prato;
	private UUID uuid;
	public LocalDateTime getHorario() {
		return horario;
	}
	public void setHorario(LocalDateTime horario) {
		this.horario = horario;
	}
	public Prato getPrato() {
		return prato;
	}
	public void setPrato(Prato prato) {
		this.prato = prato;
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	
}
