package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.edu.ufersa.facefood.domain.entity.Refeicao;
import br.edu.ufersa.facefood.domain.entity.User;

public class InsertRotinaDTO {
	@NotEmpty
	private List<Refeicao> listaRefeicoes = new ArrayList<Refeicao>();
	@FutureOrPresent(message="A Rotina tem que ser no futuro ou no presente!")
	private LocalDate data;
	private UUID uuid;
	@NotNull(message = "Por favor, informe o usuário autor da refeição.")
	private User user;
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
	public List<Refeicao> getListaRefeicoes() {
		return listaRefeicoes;
	}
	public void setListaRefeicoes(List<Refeicao> listaRefeicoes) {
		this.listaRefeicoes = listaRefeicoes;
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
}
