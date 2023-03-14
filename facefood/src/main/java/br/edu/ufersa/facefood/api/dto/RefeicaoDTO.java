package br.edu.ufersa.facefood.api.dto;

import java.time.LocalTime;

import java.util.Set;
import java.util.UUID;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;
import br.edu.ufersa.facefood.domain.entity.User;

public class RefeicaoDTO {
	 private long id;
	 
	private UUID uuid;

	private User user;

    private LocalTime horario;
    
    private Set<Prato> pratos; 
   
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalTime getHorario() {
		return horario;
	}

	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}

	public Set<Prato> getPratos() {
		return pratos;
	}

	public void setPratos(Set<Prato> pratos) {
		this.pratos = pratos;
	}

	public Rotina getRotina() {
		return rotina;
	}

	public void setRotina(Rotina rotina) {
		this.rotina = rotina;
	}

}
