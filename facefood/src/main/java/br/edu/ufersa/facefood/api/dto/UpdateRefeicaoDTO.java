package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;

public class UpdateRefeicaoDTO {

	@NotEmpty(message="Coloque um horario atrelado a refeição")
	private LocalDateTime horario;
  //private List<Prato> pratos;
	//private UUID uuid;
	@NotEmpty(message="Coloque um prato atrelado a refeição")
	private Prato prato;
	@NotNull(message="Coloque uma rotina para a refeição")
	private Rotina rotina;
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
	public Rotina getRotina() {
		return rotina;
	}
	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	
}
