package br.edu.ufersa.facefood.api.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

import br.edu.ufersa.facefood.domain.entity.Refeicao;

public class InsertRotinaDTO {
	@NotEmpty
	private List<Refeicao> listaRefeicoes = new ArrayList<Refeicao>();
	@FutureOrPresent(message="A Rotina tem que ser no futuro ou no presente!")
	private LocalDate data;
	private UUID uuid;
	public UUID getUuid() {
		return uuid;
	}
	public void setUuid(UUID uuid) {
		this.uuid = uuid;
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
