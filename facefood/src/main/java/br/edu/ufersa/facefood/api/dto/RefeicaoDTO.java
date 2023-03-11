package br.edu.ufersa.facefood.api.dto;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;

public class RefeicaoDTO {
	private long id;
	private UUID uuid;
    private LocalTime horario;
    private List<Prato> pratos = new ArrayList<Prato>();    
    private Rotina rotina;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}
	public LocalTime getHorario() {
		return horario;
	}
	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}
	public List<Prato> getPratos() {
		return pratos;
	}
	public void setPratos(List<Prato> pratos) {
		this.pratos = pratos;
	}
	public Rotina getRotina() {
		return rotina;
	}
	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}
}
