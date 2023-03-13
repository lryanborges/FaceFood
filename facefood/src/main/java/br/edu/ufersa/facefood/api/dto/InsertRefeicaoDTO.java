package br.edu.ufersa.facefood.api.dto;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import br.edu.ufersa.facefood.domain.entity.Prato;
import br.edu.ufersa.facefood.domain.entity.Rotina;
import br.edu.ufersa.facefood.domain.entity.User;

public class InsertRefeicaoDTO {
	private long id;
	private UUID uuid;
	@NotNull(message = "Por favor, informe o usuário autor da refeição.")
	private User user;
	@NotNull(message = "O horario não pode ser vazio. Digite o horario no formato HH:mm:ss")
	@DateTimeFormat(pattern = "HH:mm:ss")
   private LocalTime horario;
   @NotNull(message = "Por favor, informe os pratos da refeição.")
   private Set<Prato> pratos;
  //@NotNull(message = "Por favor, a rotina.")
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
